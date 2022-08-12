import React from 'react';
import classNames from 'classnames';

import styles from './icon.module.scss';

export enum EIcons {
  vpravoslav = 'vpravoslav',
  vpravoslavBig = 'vpravoslav-big',
}

interface IIconProps {
  name: EIcons;
  isActive?: boolean;
  size?: number;
  width?: number;
  height?: number;
  topClass?: string;
}

export function Icon({ name, isActive = true, size = 0, width = size, height = width, topClass }: IIconProps) {
  let iconWidth, iconHeight;
  if (size > 0) iconWidth = iconHeight = size;
  else {
    iconWidth = width;
    iconHeight = height;
  }
  const customStyles =
    iconWidth > 0 && iconHeight > 0
      ? {
          width: iconWidth,
          height: iconHeight,
        }
      : undefined;

  const active = name.includes('button-menu') ? (isActive ? '_active' : '_inactive') : '';
  const classes = classNames(
    styles.icon,
    styles[`icon-${name}`],
    { [styles[`icon-${name}${active}`]]: active },
    topClass
  );

  return <div className={classes} style={customStyles} />;
}
