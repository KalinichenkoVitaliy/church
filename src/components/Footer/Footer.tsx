import React from 'react';

import styles from './footer.module.scss';

export function Footer() {
  return (
    <div className={styles.footer}>
      <a className={styles.link} href='http://prihod.ru' target='_blank' title='Приход.ру' rel='noreferrer'>
        Работает на Prihod.ru
      </a>
      {` при поддержке `}
      <a className={styles.link} href='http://ortox.ru' target='_blank' title='ORTOX.RU' rel='noreferrer'>
        ORTOX.RU
      </a>
    </div>
  );
}
