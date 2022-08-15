import React from 'react';

import styles from './pageContacts.module.scss';

import { EAling, Text } from '../../../shared/Text';
import { Break } from '../../../shared/Break';
import { FormFeedback } from '../../forms';

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
      <Text
        As='h2'
        fontMobile={{ size: 16, lineHeight: '20px', weight: 500 }}
        fontTablet={{ size: 20, lineHeight: '24px', weight: 500 }}
        fontLaptop={{ size: 24, lineHeight: '28px', weight: 500 }}
        fontDesktop={{ size: 26, lineHeight: '30px', weight: 500 }}
        textAling={EAling.center}
      >
        Контакты
      </Text>
      <Break stepMobile={12} stepTablet={14} stepLaptop={18} stepDesktop={22} top />
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '20px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '23px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '27px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '29px', weight: 300 }}
      >
        <strong>Телефон прихода:</strong>{' '}
        <a className={styles.linkTo} href='tel:+78619645627'>
          +7 (861-96) 4-56-27
        </a>
      </Text>
      <Break stepMobile={12} stepTablet={14} stepLaptop={16} stepDesktop={18} top />
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '20px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '23px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '27px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '29px', weight: 300 }}
      >
        <strong>Ящик электронной почты (email):</strong>{' '}
        <a className={styles.linkTo} href='mailto:xpam-fastov-ne@mail.ru'>
          xpam-fastov-ne@mail.ru
        </a>
      </Text>
      <Break stepMobile={12} stepTablet={14} stepLaptop={16} stepDesktop={18} top />
      <div className={styles.placeForm}>
        <Text
          As='p'
          fontMobile={{ size: 14, lineHeight: '20px', weight: 500 }}
          fontTablet={{ size: 15, lineHeight: '23px', weight: 500 }}
          fontLaptop={{ size: 17, lineHeight: '27px', weight: 500 }}
          fontDesktop={{ size: 19, lineHeight: '29px', weight: 500 }}
        >
          Вы можете написать нам прямо здесь и мы вам обязательно ответим:
        </Text>
        <Break stepMobile={12} stepTablet={14} stepLaptop={16} stepDesktop={18} top />
        <FormFeedback />
      </div>
      <Break stepMobile={12} stepTablet={14} stepLaptop={16} stepDesktop={18} top />
    </div>
  );
}
