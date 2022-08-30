import React from 'react';

import styles from './iconDay.module.scss';

import './calendar_style_blue.css';
import { loadCalendar2r } from '../../../utils/apiCalendar';

import { EColor, Text } from '../../../shared/Text';

// Скрипт загрузки календаря
// const createLoadCalendar = () => {
//   const today = new Date(); // Определить текущую дату
//   let mm = today.getMonth() + 1; // Определить текущий месяц
//   let dd = today.getDate(); // Определить текущий день
//   let yy = today.getFullYear(); // Определить текущий год
//   let dt = 1; // Выводить дату в формате "григорианский/юлианский"
//   let hh = 1; // Выводить заголовок
//   let ll = 1; // Выводить жития святых
//   let tt = 1; // Выводить тропари
//   let ss = 1; // Выводить Евангельские чтения

//   let xmlHttp;

//   const scriptLoadCalendar = document.createElement('script');
//   scriptLoadCalendar.id = 'loadCalendar';
//   scriptLoadCalendar.type = 'text/javascript';
//   scriptLoadCalendar.innerHTML = `
//     function stateChanged2r() {
//       if (xmlHttp.readyState === 4) {
//         // 4 = "loaded"
//         if (xmlHttp.status === 200) {
//           // 200 = "OK"
//           document.getElementById('T1R').innerHTML = xmlHttp.responseText;
//         } else {
//           alert('Problem retrieving data: ' + xmlHttp.statusText);
//         }
//       }
//     }

//     function loadCalendar2r(mm, dd, yy, dt, hh, ll, tt, ss) {
//       xmlHttp = null;
//       if (window.XMLHttpRequest) {
//         // code for Firefox, Opera, IE7, etc.
//         xmlHttp = new XMLHttpRequest();
//       } else if (window.ActiveXObject) {
//         // code for IE6, IE5
//         xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
//       }

//       if (xmlHttp != null) {
//         let par = 'calendar/pppr.php';
//         par =
//           par +
//           '?month=' +
//           mm +
//           '&today=' +
//           dd +
//           '&year=' +
//           yy +
//           '&dt=' +
//           dt +
//           '&header=' +
//           hh +
//           '&lives=' +
//           ll +
//           '&trp=' +
//           tt +
//           '&scripture=' +
//           ss;
//         par = par + '&sid=' + Math.random();

//         xmlHttp.onreadystatechange = stateChanged2r;

//         xmlHttp.open('GET', par, true);
//         xmlHttp.send(null);
//       } else {
//         alert('Your browser does not support XMLHTTP.');
//       }
//     }

//     loadCalendar2r(${mm}, ${dd}, ${yy}, ${dt}, ${hh}, ${ll}, ${tt}, ${ss});
//   `;
//   document.head.append(scriptLoadCalendar);
// };

// Скрипт вызова 'loadCalendar' в элементе DOM id='T1R'
// const showCalendar = () => {
//   const today = new Date(); // Определить текущую дату
//   let mm = today.getMonth() + 1; // Определить текущий месяц
//   let dd = today.getDate(); // Определить текущий день
//   let yy = today.getFullYear(); // Определить текущий год
//   let dt = 1; // Выводить дату в формате "григорианский/юлианский"
//   let hh = 1; // Выводить заголовок
//   let ll = 1; // Выводить жития святых
//   let tt = 1; // Выводить тропари
//   let ss = 1; // Выводить Евангельские чтения

//   const scriptCalendar = document.createElement('script');
//   scriptCalendar.id = 'showCalendar';
//   scriptCalendar.type = 'text/javascript';
//   scriptCalendar.innerHTML = `
//     loadCalendar2r(${mm}, ${dd}, ${yy}, ${dt}, ${hh}, ${ll}, ${tt}, ${ss});
//   `;
//   document.head.append(scriptCalendar);
// };

export function IconDay() {
  // const [isCreateLoadCalendar, setIsCreateLoadCalendar] = React.useState(false);
  // const [isShowCalendar, setIsShowCalendar] = React.useState(false);

  React.useEffect(() => {
    const today = new Date(); // Определить текущую дату
    let mm = today.getMonth() + 1; // Определить текущий месяц
    let dd = today.getDate(); // Определить текущий день
    let yy = today.getFullYear(); // Определить текущий год
    let dt = 1; // Выводить дату в формате "григорианский/юлианский"
    let hh = 1; // Выводить заголовок
    let ll = 1; // Выводить жития святых
    let tt = 1; // Выводить тропари
    let ss = 1; // Выводить Евангельские чтения

    loadCalendar2r(mm, dd, yy, dt, hh, ll, tt, ss);
    // if (!isCreateLoadCalendar) {

    // if (!document.getElementById('loadCalendar')) loadCalendar2r(mm,dd,yy,dt,hh,ll,tt,ss);
    // if (!isCreateLoadCalendar) setIsCreateLoadCalendar(true);
    // }

    // if (isCreateLoadCalendar && !isShowCalendar) {
    //   if (!document.getElementById('showCalendar')) showCalendar();
    //   if (!isShowCalendar) setIsShowCalendar(true);
    // }

    // return () => {
    //   document.getElementById('showCalendar')?.remove();
    //   document.getElementById('loadCalendar')?.remove();
    // };
  }, []);

  return (
    <div className={styles.iconDay}>
      <Text
        As='h3'
        font={{ size: 14, lineHeight: '16px', weight: 700 }}
        color={EColor.grey63}
        upperCase
        parentClass={styles.iconDayTitle}
      >
        Икона дня
      </Text>
      <div id='T1R' />
    </div>
  );
}
