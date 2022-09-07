import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './assideNews.module.scss';

import { TNotice, TRootState } from '../../../types';
import { pagesSetActive } from '../../../store/pagesSlice';

import { EColor, Text } from '../../../shared/Text';
import { BreakInterAssides, DoLinkTo } from '../../../utils/samples';
import { LifeNews } from '../../LifeNews';
import { Break } from '../../../shared/Break';

export function AssideNews() {
  const dispatch = useDispatch();
  const isLife = useSelector<TRootState, boolean>((state) => state.pagesState.pages.life);
  const items = useSelector<TRootState, TNotice[]>((state) => state.noticesState.notices.shortNews);

  return isLife ? null : (
    <>
      <div className={styles.assideNews}>
        <Text
          As='h3'
          font={{ size: 14, lineHeight: '16px', weight: 700 }}
          color={EColor.grey63}
          upperCase
          parentClass={styles.assideNewsTitle}
        >
          Свежие события:
        </Text>
        <LifeNews isAsside assideNumber={5} />
        {items?.length > 0 && <Break step={6} top />}
        <DoLinkTo
          goTo='/life'
          title='Все события жизни прихода'
          parentClass={styles.assideNewsLink}
          onClick={() => dispatch(pagesSetActive({ namePage: 'life' }))}
        >
          {`Все события >>`}
        </DoLinkTo>
      </div>
      <BreakInterAssides />
    </>
  );
}
