import React from 'react';
import { useMediaQuery } from 'react-responsive';

import styles from './linkVPravoslav.module.scss';

import { EIcons, Icon } from '../../../shared/Icon';
import { Break } from '../../../shared/Break';

const bpMaxWidthMobile = getComputedStyle(document.documentElement).getPropertyValue('--breakpointMaxWidthMobile');

export function LinkVPravoslav() {
  const isMobile = useMediaQuery({ query: `(max-width: ${bpMaxWidthMobile})` });

  const iconName = isMobile ? EIcons.vpravoslavBig : EIcons.vpravoslav;
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
      <Icon
        name={iconName}
        rateMobile={{ width: '41px', height: '32px' }}
        rateTablet={{ width: '25px', height: '20px' }}
        rateLaptop={{ width: '25px', height: '20px' }}
        rateDesktop={{ width: '25px', height: '20px' }}
      />
      <Break step={6} />
      {textLink}
    </a>
  );
}
