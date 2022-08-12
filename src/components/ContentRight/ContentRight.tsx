import React from 'react';

import styles from './contentRight.module.scss';

import { Break } from '../../shared/Break';
import { EparchyInfo } from '../asside/EparchyInfo';
import { IconDay } from '../asside/IconDay';

export function ContentRight() {
  return (
    <div className={styles.contentRight}>
      <EparchyInfo />
      <Break stepMobile={15} stepTablet={20} stepLaptop={25} stepDesktop={30} top />
      <IconDay />
    </div>
  );
}
