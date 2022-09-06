import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './shortNews.module.scss';

import { TRootState } from '../../../types';
import { pagesSetActive } from '../../../store/pagesSlice';

import { EColor, Text } from '../../../shared/Text';
import { DoLinkTo } from '../../../utils/samples';
import { LifeNews } from '../../LifeNews';
import { Break } from '../../../shared/Break';

export function ShortNews() {
  const dispatch = useDispatch();
  const isLife = useSelector<TRootState, boolean>((state) => state.pagesState.pages.life);

  return isLife ? null : (
    <div className={styles.shortNews}>
      <Text
        As='h3'
        font={{ size: 14, lineHeight: '16px', weight: 700 }}
        color={EColor.grey63}
        upperCase
        parentClass={styles.shortNewsTitle}
      >
        Свежие события:
      </Text>
      <LifeNews isAsside assideNumber={5} />
      <Break step={6} top />
      <DoLinkTo
        goTo='/life'
        title='Все события жизни прихода'
        parentClass={styles.shortNewsLink}
        onClick={() => dispatch(pagesSetActive({ namePage: 'life' }))}
      >
        {`Все события >>`}
      </DoLinkTo>
    </div>
  );
}
