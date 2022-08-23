import React from 'react';

import styles from './pageSanctitys.module.scss';

import {
  TextH2,
  TextH3,
  TextP,
  TextIndentP,
  BreakAfterH2,
  BreakInterP,
  PictureOncePhoto,
} from '../../../utils/samples';

const documentTitle = getComputedStyle(document.documentElement).getPropertyValue('--documentTitle');

export function PageSanctitys() {
  React.useEffect(() => {
    const newTitle = `Святыни храма | ${documentTitle}`;
    document.title = newTitle;
  }, []);

  return (
    <div className={styles.pageSanctitys}>
      <TextH2>Святыни храма</TextH2>
      <BreakAfterH2 />
      <TextH3>Чтимые иконы, частицы мощей:</TextH3>
      <BreakAfterH2 />
      <div className={styles.sanctitys}>
        <TextIndentP>
          В Свято-Никольском храме станицы Фастовецкой имеются следующие иконы с частицами мощей:
        </TextIndentP>
        <TextP>
          <PictureOncePhoto
            name='images/photos/sanctitys/stFeodorUshakov'
            alt='Фото иконы святого праведного Феодора Ушакова'
          />
          - преподобного Феодора Санаксарского, святого праведного Феодора Ушакова и преподобноисповедника Александра,
          игумена Санаксарского, привезённые из паломнической поездки в Санаксарский монастырь в 2004 году;
        </TextP>
        <TextP>
          <PictureOncePhoto
            name='images/photos/sanctitys/MarfaAleksandraElena'
            alt='Фото иконы преподобных Марфы, Александры и Елены Дивеевских'
          />
          - преподобной Марфы Дивеевской, преподобной Александры Первоначальницы Дивеевской, привезённые из
          паломнической поездки в Дивеевский монастырь в 2004 году;
        </TextP>
        <TextP>
          <PictureOncePhoto
            name='images/photos/sanctitys/PelageyaParaskevaMariya'
            alt='Фото иконы юродивых Пелагеи, Параскевы и Марии Дивеевских'
          />
          - святых Христа ради юродивых: блаженной Пелагеи Дивеевской, блаженной Параскевы Дивеевской (Паши Дивеевской),
          блаженной Марии Дивеевской, привезённые из паломнической поездки в Дивеевский монастырь в 2004 году;
        </TextP>
        <TextP>
          <PictureOncePhoto name='images/photos/sanctitys/stTatiana' alt='Фото иконы святой мученицы Татианы' />-
          частица мощей десницы святой мученицы Татианы была подарена нашему храму в 2002 году, а в 2003 году была
          написана икона мученицы;
        </TextP>
        <TextP>- святого исповедника архиепископа Луки Войно-Ясенецкого;</TextP>
        <TextIndentP>
          <PictureOncePhoto
            name='images/photos/sanctitys/stIosafBelgorodskiy'
            alt='Фото иконы святителя Иосафа Белгородского'
          />
          Единственная, чудом сохранившаяся из разрушенного в 30-е годы Свято-Никольского храма – икона святителя Иосафа
          Белгородского. На пожертвования прихожан она была отреставрирована и теперь находится на правой колонне нового
          храма с северной стороны. Многие прихожане чувствуют намоленность этой иконы, но мало кто знает, что святой
          Иосаф Белгородский сильный помощник в строительстве;
        </TextIndentP>
        <TextIndentP>
          <PictureOncePhoto
            name='images/photos/sanctitys/BogoroditsaPribavlenieUma'
            alt='Фото иконы Божией Матери «Прибавление ума»'
          />
          Написанная в 2012 году икона Божией Матери «Прибавление ума» так же привлекает к себе прихожан, молящихся о
          даровании разумения как в учении, так и в духовной жизни.
        </TextIndentP>
      </div>
    </div>
  );
}

export default PageSanctitys;
