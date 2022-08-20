import React from 'react';
import axios from 'axios';

import { strYYYY_MM_DDToNumber } from './lib';
import { PictureMulti100TB, PictureOnce100TB, TextIndentPNews, TextPNews, TextSpanNews } from './samples';

export type TBloc = {
  tag: string;
  value?: string;
};
export type TNew = {
  uuid: string;
  title: string;
  content: TBloc[];
};
export interface ICreateNews {
  onReady: React.Dispatch<React.SetStateAction<TNew[]>>;
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
      return <TextSpanNews key={index}> {blocData.value}</TextSpanNews>;
    case 'p':
      return <TextPNews key={index}>{blocData.value}</TextPNews>;
    case 'indent_p':
      return <TextIndentPNews key={index}>{blocData.value}</TextIndentPNews>;
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

export function createNews({ onReady }: ICreateNews) {
  const fileListNews = 'news/news.json';
  let files: string[] = [];
  let filesLength: number = 0;
  const accumItems: TNew[] = [];

  const saveSortNews = () => {
    const intervalId = setInterval(() => {
      if (accumItems.length === filesLength) {
        clearInterval(intervalId);
        const sortNews = accumItems.sort((a, b) => {
          const n1 = strYYYY_MM_DDToNumber(a.uuid);
          const n2 = strYYYY_MM_DDToNumber(b.uuid);
          if (n1 < n2) return 1;
          if (n1 > n2) return -1;
          return 0;
        });
        onReady(sortNews);
      }
    }, 100);
  };

  const readAllNews = () => {
    let nameLastFileNews = '';
    for (let i = 0; i < files.length; i++) {
      const nameFileNew = `news/${files[i]}/${files[i]}.json`;
      if (i >= files.length - 1) nameLastFileNews = nameFileNew;
      axios
        .get(nameFileNew)
        // eslint-disable-next-line no-loop-func
        .then((res) => {
          accumItems.push(res.data);
          if (res.config.url === nameLastFileNews) saveSortNews();
        })
        // eslint-disable-next-line no-loop-func
        .catch((err) => {
          filesLength--;
          console.log(`Ошибка получения данных из файла "${err.config.url}":`, err);
          if (err.config.url === nameLastFileNews) saveSortNews();
        });
    }
  };

  const getListNews = () => {
    axios
      .get(fileListNews)
      .then((res) => {
        files = res.data;
        filesLength = files.length;
        readAllNews();
      })
      .catch((err) => {
        console.log(`Ошибка получения данных из файла "${fileListNews}":`, err);
      });
  };

  getListNews();
}
