/* eslint-disable no-cond-assign */
import React from 'react';
import axios from 'axios';

import { EAling, Text } from '../shared/Text';
import { Picture } from '../shared/Picture';
import { strYYYY_MM_DDToNumber } from './lib';

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
 * @param inBloc: TBloc - полученный блоковый тег для разбора
 * @param index: number - индекс для уникальности возвращаемого jsx-элемента
 * @returns - jsx-элемент
 *
 * Разбираемые теги:
 * @param newline - перенос на новую строку
 * @param space - неразрывной пробел
 * @param span - не форматированный текст
 * @param p - абзаца форматированного текста
 * @param indent_p - абзаца форматированного текста с отступом на первой строке
 */
export const disassemblyContent = (idBloc: string, inBloc: TBloc, index: number) => {
  switch (inBloc.tag) {
    case 'newline':
      return <br key={index} />;
    case 'space':
      return <span key={index}>&emsp;</span>;
    case 'span':
      return (
        <Text
          key={index}
          As='span'
          fontMobile={{ size: 13, lineHeight: '17px', weight: 400 }}
          fontTablet={{ size: 14, lineHeight: '18px', weight: 400 }}
          fontLaptop={{ size: 14, lineHeight: '18px', weight: 400 }}
          fontDesktop={{ size: 15, lineHeight: '20px', weight: 300 }}
          textAling={EAling.justify}
        >
          {inBloc.value}
        </Text>
      );
    case 'p':
      return (
        <Text
          key={index}
          As='p'
          fontMobile={{ size: 13, lineHeight: '17px', weight: 400 }}
          fontTablet={{ size: 14, lineHeight: '18px', weight: 400 }}
          fontLaptop={{ size: 14, lineHeight: '18px', weight: 400 }}
          fontDesktop={{ size: 15, lineHeight: '20px', weight: 300 }}
          textAling={EAling.justify}
        >
          {inBloc.value}
        </Text>
      );
    case 'indent_p':
      return (
        <Text
          key={index}
          As='p'
          fontMobile={{ size: 13, lineHeight: '17px', weight: 400 }}
          fontTablet={{ size: 14, lineHeight: '18px', weight: 400 }}
          fontLaptop={{ size: 14, lineHeight: '18px', weight: 400 }}
          fontDesktop={{ size: 15, lineHeight: '20px', weight: 300 }}
          indent
          textAling={EAling.justify}
        >
          {inBloc.value}
        </Text>
      );
    case 'picture':
      const namePicture = `news/${idBloc}/${inBloc.value}`;
      return (
        <Picture
          key={index}
          name={namePicture}
          alt={`Фото /${namePicture}`}
          sizeMobile={{ width: '100%', height: 'auto' }}
          sizeTablet={{ width: '100%', height: 'auto' }}
          sizeLaptop={{ width: '100%', height: 'auto' }}
          sizeDesktop={{ width: '100%', height: 'auto' }}
          marginMobile='4px 0 8px 0'
          marginTablet='4px 0 8px 0'
          marginLaptop='4px 0 10px 0'
          marginDesktop='5px 0 10px 0'
        />
      );
    case 'picture-once':
      const namePictureOnce = `news/${idBloc}/${inBloc.value}`;
      return (
        <Picture
          key={index}
          name={namePictureOnce}
          alt={`Фото /${namePictureOnce}`}
          size={{ width: '100%', height: 'auto' }}
          marginMobile='4px 0 8px 0'
          marginTablet='4px 0 8px 0'
          marginLaptop='4px 0 10px 0'
          marginDesktop='5px 0 10px 0'
        />
      );

    default:
      return null;
  }
};

export function createNews({ onReady }: ICreateNews) {
  const fileListNews = 'news/news.json';
  let files: string[] = [];
  const accumItems: TNew[] = [];

  const saveSortNews = () => {
    onReady(
      accumItems.sort((a, b) => {
        const n1 = strYYYY_MM_DDToNumber(a.uuid);
        const n2 = strYYYY_MM_DDToNumber(b.uuid);
        if (n1 < n2) return 1;
        if (n1 > n2) return -1;
        return 0;
      })
    );
  };

  const readAllNews = () => {
    let nameLastFileNews = '';
    for (let i = 0; i < files.length; i++) {
      if (i >= files.length - 1) nameLastFileNews = files[i];
      axios
        .get(files[i])
        // eslint-disable-next-line no-loop-func
        .then((res) => {
          accumItems.push(res.data);
          if (res.config.url === nameLastFileNews) saveSortNews();
        })
        // eslint-disable-next-line no-loop-func
        .catch((err) => {
          console.log(`Ошибка получения данных из файла "${files[i]}":`, err);
          if (err.config.url === nameLastFileNews) saveSortNews();
        });
    }
  };

  const getListNews = () => {
    axios
      .get(fileListNews)
      .then((res) => {
        files = res.data;
        readAllNews();
      })
      .catch((err) => {
        console.log(`Ошибка получения данных из файла "${fileListNews}":`, err);
      });
  };

  getListNews();
}
