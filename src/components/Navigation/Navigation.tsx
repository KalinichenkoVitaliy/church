import React from 'react';

import styles from './navigation.module.scss';

import { LinkTo } from '../LinkTo';

export function Navigation() {
  return (
    <nav className={styles.navigation}>
      <LinkTo
        goTo='/primary'
        fontMobile={{ size: 12, lineHeight: '1', weight: 300 }}
        fontTablet={{ size: 12, lineHeight: '1', weight: 300 }}
        fontLaptop={{ size: 14, lineHeight: '1', weight: 300 }}
        fontDesktop={{ size: 14, lineHeight: '1', weight: 300 }}
        upperCase
        title='На главнуюю страницу'
        topClass={styles.animeLink}
      >
        Главная
      </LinkTo>
      <LinkTo
        goTo='/about-church'
        fontMobile={{ size: 12, lineHeight: '1', weight: 300 }}
        fontTablet={{ size: 12, lineHeight: '1', weight: 300 }}
        fontLaptop={{ size: 14, lineHeight: '1', weight: 300 }}
        fontDesktop={{ size: 14, lineHeight: '1', weight: 300 }}
        upperCase
        title='Подробнее о храме'
        topClass={styles.animeLink}
      >
        О храме
      </LinkTo>
      <LinkTo
        goTo='/clergy'
        fontMobile={{ size: 12, lineHeight: '1', weight: 300 }}
        fontTablet={{ size: 12, lineHeight: '1', weight: 300 }}
        fontLaptop={{ size: 14, lineHeight: '1', weight: 300 }}
        fontDesktop={{ size: 14, lineHeight: '1', weight: 300 }}
        upperCase
        title='Подробнее о духовенстве'
        topClass={styles.animeLink}
      >
        Духовенство
      </LinkTo>
      <LinkTo
        goTo='/schedule'
        fontMobile={{ size: 12, lineHeight: '1', weight: 300 }}
        fontTablet={{ size: 12, lineHeight: '1', weight: 300 }}
        fontLaptop={{ size: 14, lineHeight: '1', weight: 300 }}
        fontDesktop={{ size: 14, lineHeight: '1', weight: 300 }}
        upperCase
        title='Подробнее о расписание богослужений'
        topClass={styles.animeLink}
      >
        Расписание богослужений
      </LinkTo>
      <LinkTo
        goTo='/contacts'
        fontMobile={{ size: 12, lineHeight: '1', weight: 300 }}
        fontTablet={{ size: 12, lineHeight: '1', weight: 300 }}
        fontLaptop={{ size: 14, lineHeight: '1', weight: 300 }}
        fontDesktop={{ size: 14, lineHeight: '1', weight: 300 }}
        upperCase
        title='Контакты и адреса'
        topClass={styles.animeLink}
      >
        Контакты
      </LinkTo>
    </nav>
  );
}
