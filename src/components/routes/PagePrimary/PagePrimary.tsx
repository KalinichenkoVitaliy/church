import React from 'react';

import styles from './pagePrimary.module.scss';

const documentTitle = getComputedStyle(document.documentElement).getPropertyValue('--documentTitle');

export function PagePrimary() {
  React.useEffect(() => {
    const newTitle = `Главная | ${documentTitle}`;
    document.title = newTitle;
    return () => {
      document.title = documentTitle;
    };
  }, []);

  return <div className={styles.pagePrimary}>PagePrimary</div>;
}
