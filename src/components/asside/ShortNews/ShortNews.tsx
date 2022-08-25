import React from 'react';

import styles from './shortNews.module.scss';

import { EColor, Text } from '../../../shared/Text';
import { LifeNews } from '../../LifeNews';

export function ShortNews() {
  return (
    <div className={styles.shortNews}>
      <Text
        As='h3'
        font={{ size: 14, lineHeight: '30px', weight: 700 }}
        color={EColor.grey63}
        upperCase
        parentClass={styles.shortNewsTitle}
      >
        Свежие события:
      </Text>
      <LifeNews isAsside />
    </div>
  );
}
