import React from 'react';

import styles from './pageAboutChurch.module.scss';

const documentTitleMain = getComputedStyle(document.documentElement).getPropertyValue('--documentTitleMain');

export function PageAboutChurch() {
  React.useEffect(() => {
    const newTitle = `О храме | ${documentTitleMain}`;
    document.title = newTitle;
  }, []);

  return <div className={styles.pageAboutChurch}>PageAboutChurch</div>;
}
