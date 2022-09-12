import React from 'react';

import styles from './pageAdverts.module.scss';

import { TextH2ACenter, TextH3, BreakAfterH2, BreakInterP } from '../../../utils/samples';

import { LifeAdverts } from '../../LifeAdverts';

const documentTitle = getComputedStyle(document.documentElement).getPropertyValue('--documentTitle');

export function PageAdverts() {
  React.useEffect(() => {
    const newTitle = `Объявления | ${documentTitle}`;
    document.title = newTitle;
    return () => {
      document.title = documentTitle;
    };
  }, []);

  return (
    <div className={styles.pageLife}>
      <TextH2ACenter>Объявления для прихожан и посетителей</TextH2ACenter>
      <BreakAfterH2 />
      <TextH3>Действующие объявления:</TextH3>
      <BreakInterP />
      <LifeAdverts isActiveAdverts />
      <BreakAfterH2 />
      <TextH3>Архивные объявления:</TextH3>
      <BreakInterP />
      <LifeAdverts />
    </div>
  );
}

export default PageAdverts;
