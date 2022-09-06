import React from 'react';

import styles from './pageContacts.module.scss';

import { TextH2ACenter, TextPNoticeWidth, BreakAfterH2, BreakInterP } from '../../../utils/samples';

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
      <TextH2ACenter>Контакты</TextH2ACenter>
      <BreakAfterH2 />
      <TextPNoticeWidth>
        <strong>Телефон прихода:</strong>{' '}
        <a className={styles.linkTo} href='tel:+78619645627'>
          +7 (861-96) 4-56-27
        </a>
      </TextPNoticeWidth>
      <BreakInterP />
      <TextPNoticeWidth>
        <strong>Ящик электронной почты (email):</strong>{' '}
        <a className={styles.linkTo} href='mailto:xpam-fastov-ne@mail.ru'>
          xpam-fastov-ne@mail.ru
        </a>
      </TextPNoticeWidth>
      <BreakInterP />
      <div className={styles.placeForm}>
        <TextPNoticeWidth>Вы можете написать нам прямо здесь и мы вам обязательно ответим:</TextPNoticeWidth>
        <BreakInterP />
        <FormFeedback />
      </div>
      <BreakInterP />
      <TextPNoticeWidth>
        <strong>Адрес расположения храма:</strong> Россия, Краснодарский край, Тихорецкий район, станица Фастовецкая,
        улица Ленина, дом 3-а
      </TextPNoticeWidth>
      <BreakInterP />
      <div className={styles.placeMap}>
        <YandexMap />
      </div>
    </div>
  );
}

export default PageContacts;
