import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import styles from './picture.module.scss';

const bpMaxWidthMobile = getComputedStyle(document.documentElement).getPropertyValue('--breakpointMaxWidthMobile');
const bpMinWidthTablet = getComputedStyle(document.documentElement).getPropertyValue('--breakpointMinWidthTablet');
const bpMaxWidthTablet = getComputedStyle(document.documentElement).getPropertyValue('--breakpointMaxWidthTablet');
const bpMinWidthLaptop = getComputedStyle(document.documentElement).getPropertyValue('--breakpointMinWidthLaptop');
const bpMaxWidthLaptop = getComputedStyle(document.documentElement).getPropertyValue('--breakpointMaxWidthLaptop');
const bpMinWidthDesktop = getComputedStyle(document.documentElement).getPropertyValue('--breakpointMinWidthDesktop');

export type TImageSize = { width: number | string; height: number | string };
export type TMagrin = number | string;
export type TAling = 'left' | 'right' | 'none' | 'inherit';

export interface IPictureProps {
  name: string;
  alt?: string;
  size?: TImageSize;
  sizeMobile?: TImageSize;
  sizeTablet?: TImageSize;
  sizeLaptop?: TImageSize;
  sizeDesktop?: TImageSize;
  margin?: TMagrin;
  marginMobile?: TMagrin;
  marginTablet?: TMagrin;
  marginLaptop?: TMagrin;
  marginDesktop?: TMagrin;
  aling?: TAling;
  alingMobile?: TAling;
  alingTablet?: TAling;
  alingLaptop?: TAling;
  alingDesktop?: TAling;
}

export function Picture({
  name,
  alt = '',
  size,
  sizeMobile,
  sizeTablet,
  sizeLaptop,
  sizeDesktop,
  margin,
  marginMobile,
  marginTablet,
  marginLaptop,
  marginDesktop,
  aling,
  alingMobile,
  alingTablet,
  alingLaptop,
  alingDesktop,
}: IPictureProps) {
  const isMobile = useMediaQuery({ query: `(max-width: ${bpMaxWidthMobile})` });
  const isTablet = useMediaQuery({ query: `(min-width: ${bpMinWidthTablet}) and (max-width: ${bpMaxWidthTablet})` });
  const isLaptop = useMediaQuery({ query: `(min-width: ${bpMinWidthLaptop}) and (max-width: ${bpMaxWidthLaptop})` });
  const isDesktop = useMediaQuery({ query: `(min-width: ${bpMinWidthDesktop})` });

  let imageSrc: string = '';
  let endingImgName: string = '';
  let imageWidth: number | string = 0;
  let imageHeight: number | string = 0;
  let imageMargin: TMagrin = 0;
  let imageAling: TAling = 'none';

  if (size) {
    imageWidth = size.width;
    imageHeight = size.height;
  }
  if (margin) imageMargin = margin;
  if (aling) imageAling = aling;
  if (isMobile) {
    if (sizeMobile) {
      endingImgName = '-mobile';
      imageWidth = sizeMobile.width;
      imageHeight = sizeMobile.height;
    }
    if (marginMobile) imageMargin = marginMobile;
    if (alingMobile) imageAling = alingMobile;
  }
  if (isTablet) {
    if (sizeTablet) {
      endingImgName = '-tablet';
      imageWidth = sizeTablet.width;
      imageHeight = sizeTablet.height;
    }
    if (marginTablet) imageMargin = marginTablet;
    if (alingTablet) imageAling = alingTablet;
  }
  if (isLaptop) {
    if (sizeLaptop) {
      endingImgName = '-laptop';
      imageWidth = sizeLaptop.width;
      imageHeight = sizeLaptop.height;
    }
    if (marginLaptop) imageMargin = marginLaptop;
    if (alingLaptop) imageAling = alingLaptop;
  }
  if (isDesktop) {
    if (sizeDesktop) {
      endingImgName = '-desktop';
      imageWidth = sizeDesktop.width;
      imageHeight = sizeDesktop.height;
    }
    if (marginDesktop) imageMargin = marginDesktop;
    if (alingDesktop) imageAling = alingDesktop;
  }

  imageSrc = `${name}${endingImgName}.webp`;

  return (
    <LazyLoadImage
      className={styles.picture}
      src={imageSrc}
      alt={alt}
      width={imageWidth}
      height={imageHeight}
      style={{ float: imageAling, margin: imageMargin }}
      visibleByDefault={true}
      effect={'blur'}
    />
  );
}
