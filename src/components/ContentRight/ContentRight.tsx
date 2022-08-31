import React from 'react';
import { useMediaQuery } from 'react-responsive';

import styles from './contentRight.module.scss';

import { BreakInterAssides } from '../../utils/samples';
import { EparchyInfo } from '../asside/EparchyInfo';
import { ShortNews } from '../asside/ShortNews';
// import { IconDay } from '../asside/IconDay';

const bpMinWidthLaptop = getComputedStyle(document.documentElement).getPropertyValue('--breakpointMinWidthLaptop');

export function ContentRight() {
  const isLaptopDesktop = useMediaQuery({ query: `(min-width: ${bpMinWidthLaptop})` });

  return (
    <div className={styles.contentRight}>
      <EparchyInfo />
      <BreakInterAssides />
      {/* <IconDay /> */}
      {/* <BreakInterAssides /> */}
      {isLaptopDesktop && <ShortNews />}
    </div>
  );
}
