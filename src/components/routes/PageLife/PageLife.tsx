import React from 'react';

import styles from './pageLife.module.scss';

import { BreakAfterH2, BreakInterP, TextH2, TextH3 } from '../../../utils/samples';

import { LifeNews } from '../../LifeNews';

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
      <TextH2>Приходская жизнь</TextH2>
      <BreakAfterH2 />
      <TextH3>События:</TextH3>
      <BreakInterP />
      <LifeNews />
    </div>
  );
}

export default PageLife;
