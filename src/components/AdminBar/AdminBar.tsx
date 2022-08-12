import React from 'react';

import styles from './adminbar.module.scss';

import { LinkVPravoslav } from './LinkVPravoslav';

export function AdminBar() {
  return (
    <div className={styles.adminbar}>
      <LinkVPravoslav />
    </div>
  );
}
