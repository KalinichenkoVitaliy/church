import React from 'react';

import styles from './yandexMap.module.scss';

// Скрипт подключение API Яндекс-карты
const connectApiYandexMap = () => {
  const scriptYandexMap = document.createElement('script');
  scriptYandexMap.id = 'scriptYandexMap';
  scriptYandexMap.type = 'text/javascript';
  scriptYandexMap.src = 'https://api-maps.yandex.ru/2.1/?apikey=ваш API-ключ&lang=ru_RU';
  document.head.append(scriptYandexMap);
};
connectApiYandexMap();

// Скрипт отрисовки карты в элементе DOM id='map'
let myMap, timeoutId1, timeoutId2;
const renderYandexMap = () => {
  const scriptRenderYandexMap = document.createElement('script');
  scriptRenderYandexMap.id = 'scriptRenderYandexMap';
  scriptRenderYandexMap.type = 'text/javascript';
  scriptRenderYandexMap.innerHTML = `
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
  document.head.append(scriptRenderYandexMap);
};

export function YandexMap() {
  React.useEffect(() => {
    const elemScriptRenderYandexMap = document.getElementById('scriptRenderYandexMap');
    if (document.getElementById('scriptYandexMap') && !elemScriptRenderYandexMap) {
      renderYandexMap();
    }
    return () => {
      elemScriptRenderYandexMap?.remove();
      myMap = undefined;
      timeoutId1 = undefined;
      timeoutId2 = undefined;
      timeoutId1 = myMap;
      timeoutId2 = timeoutId1;
      myMap = timeoutId2;
    };
  }, []);

  return <div id='yandexMap' className={styles.map} />;
}
