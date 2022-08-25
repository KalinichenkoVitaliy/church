import React from 'react';
import { useMediaQuery } from 'react-responsive';

import styles from './contentRight.module.scss';

import { Break } from '../../shared/Break';
import { EparchyInfo } from '../asside/EparchyInfo';
import { ShortNews } from '../asside/ShortNews';
// import { IconDay } from '../asside/IconDay';

const bpMinWidthLaptop = getComputedStyle(document.documentElement).getPropertyValue('--breakpointMinWidthLaptop');

export function ContentRight() {
  const isLaptopDesktop = useMediaQuery({ query: `(min-width: ${bpMinWidthLaptop})` });

  return (
    <div className={styles.contentRight}>
      <EparchyInfo />
      <Break stepMobile={15} stepTablet={20} stepLaptop={25} stepDesktop={30} top />
      {/* <IconDay />
      <Break stepMobile={15} stepTablet={20} stepLaptop={25} stepDesktop={30} top /> */}
      {isLaptopDesktop && <ShortNews />}
    </div>
  );
}
