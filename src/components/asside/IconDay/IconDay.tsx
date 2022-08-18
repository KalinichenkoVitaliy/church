import React from 'react';

import styles from './iconDay.module.scss';

import { EColor, Text } from '../../../shared/Text';

export function IconDay() {
  React.useEffect(() => {
    const elemEntered = document.getElementById('pravoslavie-icon');
    const script = document.createElement('script');
    script.id = 'scriptIconDay';
    script.src = 'https://script.pravoslavie.ru/cache/images=1&hrams=0&date=0818.ls';
    script.type = 'text/javascript';
    script.crossOrigin = 'anonymous';

    if (elemEntered) elemEntered.appendChild(script);

    return () => {
      if (elemEntered) elemEntered.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.iconDay}>
      <Text As='h3' font={{ weight: 700 }} color={EColor.grey63} upperCase>
        Икона дня
      </Text>
      <div id='pravoslavie-icon' />
    </div>
  );
}
