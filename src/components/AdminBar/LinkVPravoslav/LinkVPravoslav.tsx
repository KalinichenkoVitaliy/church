import React from 'react';
import { useMediaQuery } from 'react-responsive';

import styles from './linkVPravoslav.module.scss';

import { EIcons, Icon } from '../../../shared/Icon';
import { Break } from '../../../shared/Break';

const bpMaxWidthMobile = getComputedStyle(document.documentElement).getPropertyValue('--breakpointMaxWidthMobile');

export function LinkVPravoslav() {
  const isMobile = useMediaQuery({ query: `(max-width: ${bpMaxWidthMobile})` });

  const iconName = isMobile ? EIcons.vpravoslavBig : EIcons.vpravoslav;
  const iconWidth = isMobile ? 41 : 25;
  const iconHeight = isMobile ? 32 : 20;
  const textLink = isMobile
    ? 'В-Православии.рф'
    : 'В-Православии.рф - группа наших друзей - поддержите их простой подпиской!';

  return (
    <a
      className={styles.link}
      href='https://vk.com/vpravoslav'
      target='_blank'
      title='В Православии - Свобода и радость! Подписывайтесь! Интересные передачи о жизни священников и многое другое'
      rel='noreferrer'
    >
      <Icon name={iconName} width={iconWidth} height={iconHeight} />
      <Break step={6} />
      {textLink}
    </a>
  );
}
