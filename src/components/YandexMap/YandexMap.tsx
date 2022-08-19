import React from 'react';

import styles from './yandexMap.module.scss';

// Скрипт подключение API Яндекс-карты
const connectApiYandexMap = () => {
  const scriptConnectMap = document.createElement('script');
  scriptConnectMap.id = 'connectYandexMap';
  scriptConnectMap.type = 'text/javascript';
  scriptConnectMap.src = 'https://api-maps.yandex.ru/2.1/?apikey=ваш API-ключ&lang=ru_RU';
  document.head.append(scriptConnectMap);
};
if (!document.getElementById('connectYandexMap')) connectApiYandexMap();

// Скрипт отрисовки карты в элементе DOM id='map'
const initYandexMap = () => {
  const scriptInitMap = document.createElement('script');
  scriptInitMap.id = 'initYandexMap';
  scriptInitMap.type = 'text/javascript';
  scriptInitMap.innerHTML = `
  function init() {
    myMap = new ymaps.Map(
      'yandexMap', 
      {
        center: [45.92157107593139,40.15702191667173],
        zoom: 15,
      },
    );
    myMap.geoObjects.add(
      new ymaps.GeoObject({
        geometry: {
          type: 'Point',
          coordinates: [45.92153738093781,40.15648547486874],
        },
      })
    );
  }
  `;
  document.head.append(scriptInitMap);
};

// Скрипт отрисовки карты в элементе DOM id='map'
const showYandexMap = () => {
  const scriptShowMap = document.createElement('script');
  scriptShowMap.id = 'showYandexMap';
  scriptShowMap.type = 'text/javascript';
  scriptShowMap.innerHTML = `
  timeoutId1 = setInterval(() => {
    if (typeof ymaps !== 'undefined') {
      clearTimeout(timeoutId1);
      timeoutId2 = setInterval(() => {
        if (typeof ymaps.Map !== 'undefined') {
          clearTimeout(timeoutId2);
          ymaps.ready(init);
        }
      }, 100);
    }
  }, 100);
  `;
  document.head.append(scriptShowMap);
};

export function YandexMap() {
  const [isInitYandexMap, setIsInitYandexMap] = React.useState(false);
  const [isShowYandexMap, setIsShowYandexMap] = React.useState(false);

  React.useEffect(() => {
    let myMap: undefined, timeoutId1: undefined, timeoutId2: undefined;

    if (!isInitYandexMap) {
      if (!document.getElementById('initYandexMap')) initYandexMap();
      if (!isInitYandexMap) setIsInitYandexMap(true);
    }

    if (isInitYandexMap && !isShowYandexMap) {
      if (!document.getElementById('showYandexMap')) showYandexMap();
      if (!isShowYandexMap) setIsShowYandexMap(true);
    }

    return () => {
      document.getElementById('showYandexMap')?.remove();
      document.getElementById('initYandexMap')?.remove();

      if (!myMap || !timeoutId1 || !timeoutId2) {
        myMap = undefined;
        timeoutId1 = undefined;
        timeoutId2 = undefined;
      }
    };
  }, [isInitYandexMap, isShowYandexMap]);

  return <div id='yandexMap' className={styles.map} />;
}
