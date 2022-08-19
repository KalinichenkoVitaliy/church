import React from 'react';
import axios from 'axios';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import styles from './lifeEvents.module.scss';

import files from '../../assets/news/news.json';

import { toDDMMYYY } from '../../utils/lib';

import { EAling, Text } from '../../shared/Text';
import { Picture } from '../../shared/Picture';

type TBloc = {
  tag: string;
  value?: string;
};
type TNew = {
  uuid: string;
  title: string;
  content: TBloc[];
};

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
const disassemblyContent = (idBloc: string, inBloc: TBloc, index: number) => {
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
          alt={`Фото ${namePicture}`}
          sizeMobile={{ width: '100%', height: 'auto' }}
          sizeTablet={{ width: '100%', height: 'auto' }}
          sizeLaptop={{ width: '100%', height: 'auto' }}
          sizeDesktop={{ width: '100%', height: 'auto' }}
          marginMobile='3px 0 8px 0'
          marginTablet='3px 0 8px 0'
          marginLaptop='3px 0 10px 0'
          marginDesktop='0 0 10px 0'
        />
      );

    default:
      return null;
  }
};

export function LifeEvents() {
  const [items, setItems] = React.useState<TNew[]>([]);

  React.useEffect(() => {
    const accumItems: TNew[] = [];

    const prepareForRender = (curIndex: number, maxIndex: number) => {
      if (curIndex >= maxIndex) {
        setItems(
          accumItems.sort((n1, n2) => {
            if (n1.uuid < n2.uuid) return 1;
            if (n1.uuid > n2.uuid) return -1;
            return 0;
          })
        );
      }
    };

    for (let i = 0; i < files.length; i++) {
      axios
        .get(files[i])
        .then((res) => {
          accumItems.push(res.data);
          prepareForRender(i, files.length - 1);
        })
        .catch((err) => {
          console.log('axios - err', err);
          prepareForRender(i, files.length - 1);
        });
    }
  }, []);

  return (
    <div className={styles.lifeEvents}>
      <Accordion allowMultipleExpanded allowZeroExpanded className={styles.accordion}>
        {items.map((item) => (
          <AccordionItem key={item.uuid} className={styles.accordion__item}>
            <AccordionItemHeading>
              <AccordionItemButton className={styles.accordion__button}>
                <Text
                  fontMobile={{ size: 13, lineHeight: '17px', weight: 400 }}
                  fontTablet={{ size: 14, lineHeight: '18px', weight: 400 }}
                  fontLaptop={{ size: 14, lineHeight: '18px', weight: 400 }}
                  fontDesktop={{ size: 15, lineHeight: '20px', weight: 300 }}
                  textAling={EAling.justify}
                >
                  <strong>{toDDMMYYY(item.uuid) + ' г. - '}</strong>
                  {item.title}
                </Text>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={styles.accordion__panel}>
              {item.content.map((bloc, index) => disassemblyContent(item.uuid, bloc, index))}
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
