import React from 'react';

import styles from './pageCntacts.module.scss';

import { EAling, Text } from '../../../shared/Text';
import { Break } from '../../../shared/Break';
// import { Picture } from '../../../shared/Picture';

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
    </div>
  );
}
