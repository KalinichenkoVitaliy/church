import React from 'react';
import axios from 'axios';

import { isFolder, strYYYY_MM_DDtoNumber } from './lib';
import {
  TextIndentPNoticeWidth,
  TextPNoticeWidth,
  TextSpanNotice,
  PictureMulti100TB,
  PictureOnce100TB,
} from './samples';

export enum ENotice {
  news = 'news',
  adverts = 'adverts',
}
export type TBloc = {
  tag: string;
  value?: string;
};
export type TFile = {
  uuid: string;
  title: string;
  content: TBloc[];
};
export interface IReadNoticesProps {
  typeNotice: ENotice;
  isAsside?: boolean;
  assideNumber?: number;
  onReady: React.Dispatch<React.SetStateAction<TFile[]>>;
}

/**
 * Функция разбора блоковых тегов из json-файла и возвращения соответствующих jsx-элементов
 * @param blocId: string - id массива блоковых тегов для построения пути до файлов изображений
 * @param blocData: TBloc - полученный блоковый тег для разбора
 * @param index: number - индекс для уникальности возвращаемого jsx-элемента
 * @returns - jsx-элемент
 *
 * Разбираемые теги:
 * @param newline - перенос на новую строку
 * @param space - неразрывной пробел
 * @param span - не форматированный текст
 * @param p - абзаца форматированного текста
 * @param indent_p - абзаца форматированного текста с отступом на первой строке
 * @param picture_multi - комплект изображений для mobile, tablet, laptop и desktop
 *                        на всю ширину экрана с отступами сверху и снизу
 * @param picture_once - единственное изображение для mobile, tablet, laptop и desktop
 *                       на всю ширину экрана с отступами сверху и снизу
 */
export const disassemblyContent = (blocId: string, blocData: TBloc, index: number) => {
  switch (blocData.tag) {
    case 'newline':
      return <br key={index} />;
    case 'space':
      return <span key={index}>&emsp;</span>;
    case 'span':
      return <TextSpanNotice key={index}> {blocData.value}</TextSpanNotice>;
    case 'p':
      return <TextPNoticeWidth key={index}>{blocData.value}</TextPNoticeWidth>;
    case 'indent_p':
      return <TextIndentPNoticeWidth key={index}>{blocData.value}</TextIndentPNoticeWidth>;
    case 'picture_multi':
      const namePictureMulti = `news/${blocId}/${blocData.value}`;
      return <PictureMulti100TB key={index} name={namePictureMulti} alt={`Фото /${namePictureMulti}`} />;
    case 'picture_once':
      const namePictureOnce = `news/${blocId}/${blocData.value}`;
      return <PictureOnce100TB key={index} name={namePictureOnce} alt={`Фото /${namePictureOnce}`} />;

    default:
      return null;
  }
};

/**
 * Функция сортировки массива элементов в порядке убывания
 * @param arrayNotices
 * @returns
 */
const sortListNotices = (arrayListNotices: string[]) => {
  return arrayListNotices.sort((a, b) => {
    const n1 = strYYYY_MM_DDtoNumber(a);
    const n2 = strYYYY_MM_DDtoNumber(b);
    if (n1 < n2) return 1;
    if (n1 > n2) return -1;
    return 0;
  });
};

/**
 * Функция сортировки массива элементов по свойству uuid в порядке убывания
 * @param arrayNotices
 * @returns
 */
const sortNotices = (arrayNotices: TFile[]) => {
  return arrayNotices.sort((a, b) => {
    const n1 = strYYYY_MM_DDtoNumber(a.uuid);
    const n2 = strYYYY_MM_DDtoNumber(b.uuid);
    if (n1 < n2) return 1;
    if (n1 > n2) return -1;
    return 0;
  });
};

export function readNotices({ typeNotice, isAsside = false, assideNumber = 3, onReady }: IReadNoticesProps) {
  const fileFoldersNotice = `${typeNotice}/${typeNotice}.json`;
  let notices: string[] = [];
  let noticesLength: number = 0;
  const accumNotices: TFile[] = [];

  const saveSortNotices = () => {
    const intervalId = setInterval(() => {
      if (accumNotices.length === noticesLength) {
        clearInterval(intervalId);
        onReady(sortNotices(accumNotices));
      }
    }, 100);
  };

  const readContentNotices = () => {
    let nameLastFileNotices = '';
    for (let i = 0; i < notices.length; i++) {
      const nameFileNotice = `${typeNotice}/${notices[i]}/${notices[i]}.json`;
      if (i >= notices.length - 1) nameLastFileNotices = nameFileNotice;
      axios
        .get(nameFileNotice)
        // eslint-disable-next-line no-loop-func
        .then((res) => {
          accumNotices.push(res.data);
          if (res.config.url === nameLastFileNotices) saveSortNotices();
        })
        // eslint-disable-next-line no-loop-func
        .catch((err) => {
          noticesLength--;
          console.log(`Ошибка получения данных из файла "${err.config.url}":`, err);
          if (err.config.url === nameLastFileNotices) saveSortNotices();
        });
    }
  };

  const getFoldersNotices = () => {
    axios
      .get(fileFoldersNotice)
      .then((res) => {
        if (res.data.length > 0)
          notices = res.data
            .filter((nameFolder: string) => {
              return isFolder(nameFolder);
            })
            .sortListNotices(notices);
        if (isAsside) notices = notices.slice(0, assideNumber);
        noticesLength = notices.length;
        readContentNotices();
      })
      .catch((err) => {
        console.log(`Ошибка получения списка папок из файла "${fileFoldersNotice}":`, err);
      });
  };

  getFoldersNotices();
}
