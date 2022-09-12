import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './assideAdverts.module.scss';

import { TNotice, TRootState } from '../../../types';
import { pagesSetActive } from '../../../store/pagesSlice';

import { EColor, Text } from '../../../shared/Text';
import { BreakInterAssides, DoLinkTo } from '../../../utils/samples';
import { LifeAdverts } from '../../LifeAdverts';
import { Break } from '../../../shared/Break';

export function AssideAdverts() {
  const dispatch = useDispatch();
  const isAdverts = useSelector<TRootState, boolean>((state) => state.pagesState.pages.lifeadverts);
  const items = useSelector<TRootState, TNotice[]>((state) => state.noticesState.notices.shortActiveAdverts);

  return isAdverts ? null : (
    <>
      <div className={styles.assideAdverts}>
        <Text
          As='h3'
          font={{ size: 14, lineHeight: '16px', weight: 700 }}
          color={EColor.grey63}
          upperCase
          parentClass={styles.assideAdvertsTitle}
        >
          Свежие объявления:
        </Text>
        <LifeAdverts isActiveAdverts isAsside assideNumber={3} />
        {items?.length > 0 && <Break step={6} top />}
        <DoLinkTo
          goTo='/lifeadverts'
          title='Все объявления для прихожан и посетителей'
          parentClass={styles.assideAdvertsLink}
          onClick={() => dispatch(pagesSetActive({ namePage: 'lifeadverts' }))}
        >
          {`Все объявления >>`}
        </DoLinkTo>
      </div>
      <BreakInterAssides />
    </>
  );
}
