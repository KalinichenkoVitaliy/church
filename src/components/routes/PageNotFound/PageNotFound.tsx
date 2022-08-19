import React from 'react';

import styles from './pageNotFound.module.scss';

import { EColor, Text } from '../../../shared/Text';

const documentTitle = getComputedStyle(document.documentElement).getPropertyValue('--documentTitle');

export function PageNotFound() {
  React.useEffect(() => {
    const newTitle = `Страница не найдена | ${documentTitle}`;
    document.title = newTitle;
    return () => {
      document.title = documentTitle;
    };
  }, []);

  return (
    <div className={styles.pageNotFound}>
      <Text
        As='h2'
        fontDesktop={{ size: 28, lineHeight: '34px', weight: 700 }}
        fontLaptop={{ size: 26, lineHeight: '32px', weight: 700 }}
        fontTablet={{ size: 24, lineHeight: '30px', weight: 700 }}
        fontMobile={{ size: 20, lineHeight: '24px', weight: 700 }}
        color={EColor.grey44}
      >
        Ошибка 404 — страница не найдена
      </Text>
    </div>
  );
}

export default PageNotFound;
