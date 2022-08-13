import React from 'react';

import styles from './pageLife.module.scss';

import { EAling, Text } from '../../../shared/Text';
import { Break } from '../../../shared/Break';
// import { Picture } from '../../../shared/Picture';

const documentTitle = getComputedStyle(document.documentElement).getPropertyValue('--documentTitle');

export function PageLife() {
  React.useEffect(() => {
    const newTitle = `Приходская жизнь | ${documentTitle}`;
    document.title = newTitle;
    return () => {
      document.title = documentTitle;
    };
  }, []);

  return (
    <div className={styles.pageLife}>
      <Text
        As='h2'
        fontMobile={{ size: 16, lineHeight: '20px', weight: 500 }}
        fontTablet={{ size: 20, lineHeight: '24px', weight: 500 }}
        fontLaptop={{ size: 24, lineHeight: '28px', weight: 500 }}
        fontDesktop={{ size: 26, lineHeight: '30px', weight: 500 }}
        textAling={EAling.center}
      >
        Приходская жизнь
      </Text>
      <Break stepMobile={12} stepTablet={14} stepLaptop={18} stepDesktop={22} top />
    </div>
  );
}
