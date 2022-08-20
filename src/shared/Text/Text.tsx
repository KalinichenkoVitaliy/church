import React from 'react';
import classNames from 'classnames';

import styles from './text.module.scss';

export type TFontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export type TFontSize = { size?: number; lineHeight?: string; weight?: TFontWeight };
export enum EColor {
  fullblack = '#000000',
  black23 = '#444444',
  black27 = '#272727',
  white = '#ffffff',
  green = '#00ce03',
  greyED = '#ededed',
  greyEE = '#eeeeee',
  greyCC = ' #cccccc',
  grey9F = '#9f9f9f',
  grey6A = '#6a6a6a',
  grey63 = '#636363',
  grey44 = '#444444',
  grey32 = '#32373c',
  greyBlue = '#21759b',
  blue14 = '#14baF5',
  blue19 = '#197af6',
  golub70 = '#70c9d3',
  golub00 = '#00b9eb',
}
export enum EDecoration {
  inherit = 'inherit',
  lineThrough = 'line-through',
  none = 'none',
  overline = 'overline',
  underline = 'underline',
}
export enum EAling {
  auto = 'auto',
  center = 'center',
  justify = 'justify',
  left = 'left',
  right = 'right',
  start = 'start',
  end = 'end',
  inherit = 'inherit',
}
export enum ECursor {
  auto = 'auto',
  default = 'default',
  crosshair = 'crosshair',
  help = 'help',
  move = 'move',
  pointer = 'pointer',
  progress = 'progress',
  text = 'text',
  wait = 'wait',
  nResize = 'n-resize',
  neResize = 'ne-resize',
  eResize = 'e-resize',
  seResize = 'se-resize',
  sResize = 's-resize',
  swResize = 'sw-resize',
  wResize = 'w-resize',
  nwResize = 'nw-resize',
  inherit = 'inherit',
}

export interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';
  children?: React.ReactNode;
  font?: TFontSize;
  fontMobile?: TFontSize;
  fontTablet?: TFontSize;
  fontLaptop?: TFontSize;
  fontDesktop?: TFontSize;
  color?: EColor;
  indent?: boolean;
  inline?: boolean;
  upperCase?: boolean;
  textDecoration?: EDecoration;
  textAling?: EAling;
  cursor?: ECursor;
  title?: string;
  parentClass?: string;
  onClick?: () => void;
}
const NOOP = () => {};

export function Text({
  As = 'span',
  children,
  font,
  fontMobile,
  fontTablet,
  fontLaptop,
  fontDesktop,
  color,
  indent = false,
  inline = false,
  upperCase = false,
  textDecoration,
  textAling,
  cursor,
  title,
  parentClass,
  onClick = NOOP,
}: ITextProps) {
  const propFont = font
    ? {
        ['--fontWeight' as any]: font.weight ? font.weight : 'inherit',
        ['--fontSize' as any]: font.size ? `${font.size}px` : 'inherit',
        ['--fontLineHeight' as any]: font.lineHeight ? font.lineHeight : 'inherit',
      }
    : undefined;
  const propFontMobile = fontMobile
    ? {
        ['--fontMobileWeight' as any]: fontMobile.weight ? fontMobile.weight : 'inherit',
        ['--fontMobileSize' as any]: fontMobile.size ? `${fontMobile.size}px` : 'inherit',
        ['--fontMobileLineHeight' as any]: fontMobile.lineHeight ? fontMobile.lineHeight : 'inherit',
      }
    : undefined;
  const propFontTablet = fontTablet
    ? {
        ['--fontTabletWeight' as any]: fontTablet.weight ? fontTablet.weight : 'inherit',
        ['--fontTabletSize' as any]: fontTablet.size ? `${fontTablet.size}px` : 'inherit',
        ['--fontTabletLineHeight' as any]: fontTablet.lineHeight ? fontTablet.lineHeight : 'inherit',
      }
    : undefined;
  const propFontLaptop = fontLaptop
    ? {
        ['--fontLaptopWeight' as any]: fontLaptop.weight ? fontLaptop.weight : 'inherit',
        ['--fontLaptopSize' as any]: fontLaptop.size ? `${fontLaptop.size}px` : 'inherit',
        ['--fontLaptopLineHeight' as any]: fontLaptop.lineHeight ? fontLaptop.lineHeight : 'inherit',
      }
    : undefined;
  const propFontDesktop = fontDesktop
    ? {
        ['--fontDesktopWeight' as any]: fontDesktop.weight ? fontDesktop.weight : 'inherit',
        ['--fontDesktopSize' as any]: fontDesktop.size ? `${fontDesktop.size}px` : 'inherit',
        ['--fontDesktopLineHeight' as any]: fontDesktop.lineHeight ? fontDesktop.lineHeight : 'inherit',
      }
    : undefined;
  const propColor = color ? { ['--color' as any]: color } : undefined;
  const propDecoration = textDecoration ? { ['--decoration' as any]: textDecoration } : undefined;
  const propAling = textAling ? { ['--aling' as any]: textAling } : undefined;
  const propCursor = cursor ? { ['--cursor' as any]: cursor } : undefined;
  const customStyles: React.CSSProperties = {
    ...propFont,
    ...propFontMobile,
    ...propFontTablet,
    ...propFontLaptop,
    ...propFontDesktop,
    ...propColor,
    ...propDecoration,
    ...propAling,
    ...propCursor,
  };

  const classes = classNames(
    styles.text,
    { [styles[`font`]]: font },
    { [styles[`fontMobile`]]: fontMobile },
    { [styles[`fontTablet`]]: fontTablet },
    { [styles[`fontLaptop`]]: fontLaptop },
    { [styles[`fontDesktop`]]: fontDesktop },
    { [styles.inline]: inline },
    { [styles.upperCase]: upperCase },
    { [styles.textDecoration]: textDecoration },
    { [styles.textAling]: textAling },
    { [styles.cursor]: cursor },
    { [styles.color]: color },
    parentClass
  );

  return (
    <As className={classes} style={customStyles} title={title} onClick={onClick}>
      {As === 'p' && indent ? <span>&emsp;&emsp;&emsp;</span> : ''}
      {children}
    </As>
  );
}
