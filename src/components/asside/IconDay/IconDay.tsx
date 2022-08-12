import React from 'react';

import styles from './iconDay.module.scss';

import { EColor, Text } from '../../../shared/Text';

export function IconDay() {
  React.useEffect(() => {
    // const script = document.createElement('script');
    // script.src = 'http://script.pravoslavie.ru/icon.php';
    // script.type = 'text/javascript';
    // script.crossOrigin = 'anonymous';
    // const elemEntered = document.getElementById('pravoslavie-icon');
    // if (elemEntered) elemEntered.appendChild(script);
    // return () => {
    //   if (elemEntered) elemEntered.removeChild(script);
    // };
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
