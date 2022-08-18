import React from 'react';

import styles from './eparchyInfo.module.scss';

import { Text } from '../../../shared/Text';

export function EparchyInfo() {
  return (
    <div className={styles.eparchyInfo}>
      <Text As='p' font={{ lineHeight: '2', weight: 700 }} parentClass={styles.title}>
        Храм Николая Чудотворца
      </Text>
      <Text As='p'>Страница прихода</Text>
      <Text As='p'>
        {`Русская Православная Церковь, Кубанская митрополия, `}
        <a className={styles.link} href='http://tiheparh.cerkov.ru/' target='_blank' rel='noreferrer'>
          Тихорецкая епархия
        </a>
        {`, `}
        <a className={styles.link} href='http://tikhoretsk.blagochin.ru/' target='_blank' rel='noreferrer'>
          Тихорецкое благочиние
        </a>
      </Text>
    </div>
  );
}
