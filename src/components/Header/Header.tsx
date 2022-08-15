import React from 'react';

import styles from './header.module.scss';

import { EColor, Text } from '../../shared/Text';
import { Break } from '../../shared/Break';
import { Navigation } from '../Navigation';

export function Header() {
  return (
    <header className={styles.header}>
      <Text
        As='h1'
        fontMobile={{ size: 20, lineHeight: '24px', weight: 700 }}
        fontTablet={{ size: 24, lineHeight: '30px', weight: 700 }}
        fontLaptop={{ size: 26, lineHeight: '32px', weight: 700 }}
        fontDesktop={{ size: 28, lineHeight: '34px', weight: 700 }}
        color={EColor.blue19}
      >
        Свято-Никольский храм станицы Фастовецкой
      </Text>
      <Text As='h2' font={{ size: 13, lineHeight: '24px', weight: 400 }} color={EColor.blue19}>
        наш приходской сайт
      </Text>
      <Break stepMobile={8} stepTablet={8} stepLaptop={12} stepDesktop={12} top />
      <Navigation />
    </header>
  );
}
