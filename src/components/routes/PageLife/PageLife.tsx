import React from 'react';

import styles from './pageLife.module.scss';

import { TextH2ACenter, TextH3, BreakAfterH2, BreakInterP } from '../../../utils/samples';

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
      <TextH2ACenter>Приходская жизнь</TextH2ACenter>
      <BreakAfterH2 />
      <TextH3>События:</TextH3>
      <BreakInterP />
      <LifeNews />
    </div>
  );
}

export default PageLife;
