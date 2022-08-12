import React from 'react';

import styles from './header.module.scss';

import { LinkTo } from '../LinkTo';
import { EColor, Text } from '../../shared/Text';
import { Break } from '../../shared/Break';
import { Navigation } from '../Navigation';

export function Header() {
  return (
    <header className={styles.header}>
      <LinkTo
        As='h1'
        goTo='/'
        fontMobile={{ size: 20, lineHeight: '24px', weight: 700 }}
        fontTablet={{ size: 24, lineHeight: '30px', weight: 700 }}
        fontLaptop={{ size: 26, lineHeight: '32px', weight: 700 }}
        fontDesktop={{ size: 28, lineHeight: '34px', weight: 700 }}
        topClass={styles.animeTitle}
        title='На главную страницу'
      >
        Свято-Никольский храм станицы Фастовецкой
      </LinkTo>
      <Text As='h2' font={{ size: 13, lineHeight: '24px', weight: 400 }} color={EColor.green}>
        наш приходской сайт
      </Text>
      <Break stepMobile={18} stepTablet={20} stepLaptop={22} stepDesktop={24} top />
      <Navigation />
    </header>
  );
}
