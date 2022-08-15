import React from 'react';
import classNames from 'classnames';

import styles from './icon.module.scss';

export enum EIcons {
  vpravoslav = 'vpravoslav',
  vpravoslavBig = 'vpravoslav-big',
}
export type TRate = { size?: string; width?: string; height?: string };

interface IIconProps {
  name: EIcons;
  isActive?: boolean;
  rate?: TRate;
  rateMobile?: TRate;
  rateTablet?: TRate;
  rateLaptop?: TRate;
  rateDesktop?: TRate;
  topClass?: string;
}

export function Icon({
  name,
  isActive = true,
  rate,
  rateMobile,
  rateTablet,
  rateLaptop,
  rateDesktop,
  topClass,
}: IIconProps) {
  const propRate = !rate
    ? undefined
    : rate.size
    ? {
        ['--rateWidth' as any]: rate.size,
        ['--rateHeight' as any]: rate.size,
      }
    : {
        ['--rateWidth' as any]: rate.width ? rate.width : 'inherit',
        ['--rateHeight' as any]: rate.height ? rate.height : 'inherit',
      };
  const propRateMobile = !rateMobile
    ? undefined
    : rateMobile.size
    ? {
        ['--rateMobileWidth' as any]: rateMobile.size,
        ['--rateMobileHeight' as any]: rateMobile.size,
      }
    : {
        ['--rateMobileWidth' as any]: rateMobile.width ? rateMobile.width : 'inherit',
        ['--rateMobileHeight' as any]: rateMobile.height ? rateMobile.height : 'inherit',
      };
  const propRateTablet = !rateTablet
    ? undefined
    : rateTablet.size
    ? {
        ['--rateTabletWidth' as any]: rateTablet.size,
        ['--rateTabletHeight' as any]: rateTablet.size,
      }
    : {
        ['--rateTabletWidth' as any]: rateTablet.width ? rateTablet.width : 'inherit',
        ['--rateTabletHeight' as any]: rateTablet.height ? rateTablet.height : 'inherit',
      };
  const propRateLaptop = !rateLaptop
    ? undefined
    : rateLaptop.size
    ? {
        ['--rateLaptopWidth' as any]: rateLaptop.size,
        ['--rateLaptopHeight' as any]: rateLaptop.size,
      }
    : {
        ['--rateLaptopWidth' as any]: rateLaptop.width ? rateLaptop.width : 'inherit',
        ['--rateLaptopHeight' as any]: rateLaptop.height ? rateLaptop.height : 'inherit',
      };
  const propRateDesktop = !rateDesktop
    ? undefined
    : rateDesktop.size
    ? {
        ['--rateDesktopWidth' as any]: rateDesktop.size,
        ['--rateDesktopHeight' as any]: rateDesktop.size,
      }
    : {
        ['--rateDesktopWidth' as any]: rateDesktop.width ? rateDesktop.width : 'inherit',
        ['--rateDesktopHeight' as any]: rateDesktop.height ? rateDesktop.height : 'inherit',
      };
  const customStyles: React.CSSProperties = {
    ...propRate,
    ...propRateMobile,
    ...propRateTablet,
    ...propRateLaptop,
    ...propRateDesktop,
  };

  const active = name.includes('button-menu') ? (isActive ? '_active' : '_inactive') : '';
  const classes = classNames(
    styles.icon,
    styles[`icon-${name}`],
    { [styles[`icon-${name}${active}`]]: active },
    { [styles[`rate`]]: rate },
    { [styles[`rateMobile`]]: rateMobile },
    { [styles[`rateTablet`]]: rateTablet },
    { [styles[`rateLaptop`]]: rateLaptop },
    { [styles[`rateDesktop`]]: rateDesktop },
    topClass
  );

  return <div className={classes} style={customStyles} />;
}
