import React from 'react';
import classNames from 'classnames';

import styles from './cross.module.scss';

export function Cross() {
  const arrayCross: React.ReactNode[] = [];

  for (let i = 1; i <= 36; i++) {
    const classStar = classNames(styles.star, styles[`star${i}`]);
    const star: React.ReactNode = (
      <div key={i} id={i.toString()} className={classStar}>
        &#10037;
      </div>
    );
    arrayCross.push(star);
  }

  return <>{arrayCross}</>;
}
