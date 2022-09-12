import React from 'react';

import { TBloc, TNotice } from '../types';

import { isFolder, descendingSort, isAdvertActive } from './lib';
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

export interface IDisassemblyContentProps {
  typeNotice: ENotice;
  blocId: string;
  blocData: TBloc;
  index: number;
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
export const disassemblyContent = ({ typeNotice, blocId, blocData, index }: IDisassemblyContentProps) => {
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
      const namePictureMulti = `${window.location.origin}/${typeNotice}/${blocId}/${blocData.value}`;
      return <PictureMulti100TB key={index} name={namePictureMulti} alt={`Фото ${namePictureMulti}`} />;
    case 'picture_once':
      const namePictureOnce = `${window.location.origin}/${typeNotice}/${blocId}/${blocData.value}`;
      return <PictureOnce100TB key={index} name={namePictureOnce} alt={`Фото ${namePictureOnce}`} />;

    default:
      return null;
  }
};

export interface IReadNoticesProps {
  typeNotice: ENotice;
  isActiveAdverts?: boolean;
  isAsside?: boolean;
  assideNumber?: number;
  onReady: (notices: TNotice[]) => void;
}

export function readNotices({
  typeNotice,
  isActiveAdverts = false,
  isAsside = false,
  assideNumber = 3,
  onReady,
}: IReadNoticesProps) {
  let notices: string[] = [];
  let noticesLength: number = 0;
  const accumNotices: TNotice[] = [];

  const saveSortedNotices = () => {
    const intervalId = setInterval(() => {
      if (accumNotices.length === noticesLength) {
        clearInterval(intervalId);
        onReady(accumNotices.sort((a, b) => descendingSort(a.uuid, b.uuid)));
      }
    }, 100);
  };

  const readContentNotices = () => {
    let nameLastFileNotices = '';
    for (let i = 0; i < notices.length; i++) {
      const requestURLFileNotice = `${window.location.origin}/${typeNotice}/${notices[i]}/${notices[i]}.json`;
      if (i >= notices.length - 1) nameLastFileNotices = requestURLFileNotice;
      fetch(requestURLFileNotice, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
        // eslint-disable-next-line no-loop-func
        .then((res) => {
          if (res.status === 200) {
            res.json().then((data) => {
              accumNotices.push(data);
              if (res.url === nameLastFileNotices) saveSortedNotices();
            });
          } else {
            noticesLength--;
            console.log(`Ошибка чтения данных из файла "${res.url}":`, res);
            if (res.url === nameLastFileNotices) saveSortedNotices();
          }
        })
        .catch((err) => {
          console.log(`Ошибка поиска файла "${requestURLFileNotice}":`, err);
        });
    }
  };

  const getFoldersNotices = () => {
    const requestURL = `${window.location.origin}/${typeNotice}/list.json`;
    fetch(requestURL, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (res.status === 200) {
          res
            .json()
            .then((data) => {
              if (data.length > 0) {
                notices = data
                  .filter((nameFolder: string) => {
                    let isOk = isFolder(nameFolder);
                    if (isOk && typeNotice === ENotice.adverts)
                      isOk = isOk && isActiveAdverts === isAdvertActive(nameFolder);
                    return isOk;
                  })
                  .sort((a: string, b: string) => descendingSort(a, b));
                if (isAsside) notices = notices.slice(0, assideNumber);
                if (notices.length) {
                  noticesLength = notices.length;
                  readContentNotices();
                } else onReady([]);
              } else onReady([]);
            })
            .catch((err) => {
              console.log(`Ошибка чтения данных из файла "${res.url}":`, res);
              onReady([]);
            });
        } else {
          console.log(`Ошибка чтения данных из файла "${res.url}":`, res);
          onReady([]);
        }
      })
      .catch((err) => {
        console.log(`Ошибка поиска файла "${requestURL}":`, err);
        onReady([]);
      });
  };

  getFoldersNotices();
}
