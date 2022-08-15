import React from 'react';
import { Link } from 'react-router-dom';

import styles from './linkTo.module.scss';

import { EColor, ECursor, EDecoration, TFontSize, Text } from '../../shared/Text';

interface ILinkToProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';
  goTo: string;
  children?: React.ReactNode;
  font?: TFontSize;
  fontMobile?: TFontSize;
  fontTablet?: TFontSize;
  fontLaptop?: TFontSize;
  fontDesktop?: TFontSize;
  color?: EColor;
  upperCase?: boolean;
  textDecoration?: EDecoration;
  cursor?: ECursor;
  title?: string;
  parentClass?: string;
  onClick?: () => void;
}
const NOOP = () => {};

export function LinkTo({
  As,
  goTo = `/`,
  children,
  font,
  fontMobile,
  fontTablet,
  fontLaptop,
  fontDesktop,
  color,
  upperCase,
  textDecoration,
  cursor,
  title,
  parentClass,
  onClick = NOOP,
}: ILinkToProps) {
  return (
    <Link to={goTo} className={styles.linkTo}>
      <Text
        As={As}
        font={font}
        fontMobile={fontMobile}
        fontTablet={fontTablet}
        fontLaptop={fontLaptop}
        fontDesktop={fontDesktop}
        color={color}
        upperCase={upperCase}
        textDecoration={textDecoration}
        cursor={cursor}
        title={title}
        parentClass={parentClass}
        onClick={onClick}
      >
        {children}
      </Text>
    </Link>
  );
}
