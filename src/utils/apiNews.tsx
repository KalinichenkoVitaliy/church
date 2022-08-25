import React from 'react';
import axios from 'axios';

import { isFolderNews, strYYYY_MM_DDtoNumber } from './lib';
import { TextIndentPNewsWidth, TextPNewsWidth, TextSpanNews, PictureMulti100TB, PictureOnce100TB } from './samples';

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
  isAsside: boolean;
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
      return <TextPNewsWidth key={index}>{blocData.value}</TextPNewsWidth>;
    case 'indent_p':
      return <TextIndentPNewsWidth key={index}>{blocData.value}</TextIndentPNewsWidth>;
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

export function createNews({ isAsside, onReady }: ICreateNews) {
  // const foldersNews = 'news/';
  const foldersNews = 'news/news.json';
  let news: string[] = [];
  let newsLength: number = 0;
  const accumNews: TNew[] = [];

  const saveSortNews = () => {
    const intervalId = setInterval(() => {
      if (accumNews.length === newsLength) {
        clearInterval(intervalId);
        const sortNews = accumNews.sort((a, b) => {
          const n1 = strYYYY_MM_DDtoNumber(a.uuid);
          const n2 = strYYYY_MM_DDtoNumber(b.uuid);
          if (n1 < n2) return 1;
          if (n1 > n2) return -1;
          return 0;
        });
        onReady(isAsside ? sortNews.slice(0, 5) : sortNews);
      }
    }, 100);
  };

  const readAllNews = () => {
    let nameLastFileNews = '';
    for (let i = 0; i < news.length; i++) {
      const nameFileNew = `news/${news[i]}/${news[i]}.json`;
      if (i >= news.length - 1) nameLastFileNews = nameFileNew;
      axios
        .get(nameFileNew)
        // eslint-disable-next-line no-loop-func
        .then((res) => {
          accumNews.push(res.data);
          if (res.config.url === nameLastFileNews) saveSortNews();
        })
        // eslint-disable-next-line no-loop-func
        .catch((err) => {
          newsLength--;
          console.log(`Ошибка получения данных из файла "${err.config.url}":`, err);
          if (err.config.url === nameLastFileNews) saveSortNews();
        });
    }
  };

  const getFoldersNews = () => {
    axios
      .get(foldersNews)
      .then((res) => {
        if (res.data.length > 0)
          news = res.data.filter((nameFolder: string) => {
            return isFolderNews(nameFolder);
          });
        newsLength = news.length;
        readAllNews();
      })
      .catch((err) => {
        // console.log(`Ошибка получения списка новостных папок из папки "${foldersNews}":`, err);
        console.log(`Ошибка получения списка новостных папок из файла "${foldersNews}":`, err);
      });
  };

  getFoldersNews();
}
