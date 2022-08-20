import React from 'react';

import styles from './pageContacts.module.scss';

import { TextP, TextH2, BreakAfterH2, BreakInterP } from '../../../utils/samples';

import { FormFeedback } from '../../FormFeedback';
import { YandexMap } from '../../YandexMap';

const documentTitle = getComputedStyle(document.documentElement).getPropertyValue('--documentTitle');

export function PageContacts() {
  React.useEffect(() => {
    const newTitle = `Контакты | ${documentTitle}`;
    document.title = newTitle;
    return () => {
      document.title = documentTitle;
    };
  }, []);

  return (
    <div className={styles.pageContacts}>
      <TextH2>Контакты</TextH2>
      <BreakAfterH2 />
      <TextP>
        <strong>Телефон прихода:</strong>{' '}
        <a className={styles.linkTo} href='tel:+78619645627'>
          +7 (861-96) 4-56-27
        </a>
      </TextP>
      <BreakInterP />
      <TextP>
        <strong>Ящик электронной почты (email):</strong>{' '}
        <a className={styles.linkTo} href='mailto:xpam-fastov-ne@mail.ru'>
          xpam-fastov-ne@mail.ru
        </a>
      </TextP>
      <BreakInterP />
      <div className={styles.placeForm}>
        <TextP>Вы можете написать нам прямо здесь и мы вам обязательно ответим:</TextP>
        <BreakInterP />
        <FormFeedback />
      </div>
      <BreakInterP />
      <TextP>
        <strong>Адрес расположения храма:</strong> Россия, Краснодарский край, Тихорецкий район, станица Фастовецкая,
        улица Ленина, дом 3-а
      </TextP>
      <BreakInterP />
      <div className={styles.placeMap}>
        <YandexMap />
      </div>
    </div>
  );
}

export default PageContacts;
