import React from 'react';

import styles from './pageSchedule.module.scss';

import { EAling, Text } from '../../../shared/Text';
import { Break } from '../../../shared/Break';

const documentTitle = getComputedStyle(document.documentElement).getPropertyValue('--documentTitle');

export function PageSchedule() {
  React.useEffect(() => {
    const newTitle = `Расписание богослужений | ${documentTitle}`;
    document.title = newTitle;
    return () => {
      document.title = documentTitle;
    };
  }, []);

  return (
    <div className={styles.pageSchedule}>
      <Text
        As='h2'
        fontMobile={{ size: 16, lineHeight: '20px', weight: 500 }}
        fontTablet={{ size: 20, lineHeight: '24px', weight: 500 }}
        fontLaptop={{ size: 24, lineHeight: '28px', weight: 500 }}
        fontDesktop={{ size: 26, lineHeight: '30px', weight: 500 }}
        textAling={EAling.center}
      >
        Расписание богослужений
      </Text>
      <Break stepMobile={12} stepTablet={14} stepLaptop={18} stepDesktop={22} top />
      <Text
        As='h3'
        fontMobile={{ size: 14, lineHeight: '18px', weight: 700 }}
        fontTablet={{ size: 16, lineHeight: '20px', weight: 700 }}
        fontLaptop={{ size: 18, lineHeight: '22px', weight: 700 }}
        fontDesktop={{ size: 20, lineHeight: '24px', weight: 700 }}
      >
        Ежемесячные регулярные богослужения:
      </Text>
      <Break stepMobile={2} stepTablet={4} stepLaptop={8} stepDesktop={10} top />
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '20px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '23px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '27px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '29px', weight: 300 }}
      >
        <strong>Последнее воскресенье месяца</strong> &ndash; Благодарственный молебен Господу
      </Text>
      <Break stepMobile={12} stepTablet={14} stepLaptop={18} stepDesktop={22} top />
      <Text
        As='h3'
        fontMobile={{ size: 14, lineHeight: '18px', weight: 700 }}
        fontTablet={{ size: 16, lineHeight: '20px', weight: 700 }}
        fontLaptop={{ size: 18, lineHeight: '22px', weight: 700 }}
        fontDesktop={{ size: 20, lineHeight: '24px', weight: 700 }}
      >
        Еженедельные регулярные богослужения:
      </Text>
      <Break stepMobile={2} stepTablet={4} stepLaptop={8} stepDesktop={10} top />
      {/* <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '20px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '23px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '27px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '29px', weight: 300 }}
      >
        <strong>Понедельник</strong> &ndash; нет богослужений
      </Text> */}
      {/* <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '20px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '23px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '27px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '29px', weight: 300 }}
      >
        <strong>Вторник</strong> &ndash; нет богослужений
      </Text> */}
      {/* <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '20px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '23px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '27px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '29px', weight: 300 }}
      >
        <strong>Среда</strong> &ndash; нет богослужений
      </Text> */}
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '20px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '23px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '27px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '29px', weight: 300 }}
      >
        <strong>Четверг: 9:00</strong> &ndash; Молебен с акафистом святителю Николаю Чудотворцу
      </Text>
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '20px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '23px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '27px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '29px', weight: 300 }}
      >
        <strong>Пятница: 16:00</strong> &ndash; Вечернее богослужение (в случае отсутствия в течении седмицы праздничных
        богослужений)
      </Text>
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '20px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '23px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '27px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '29px', weight: 300 }}
      >
        <strong>Суббота: 8:00</strong> &ndash; Утреннее богослужение (в случае отсутствия в течении седмицы праздничных
        богослужений)
      </Text>
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '20px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '23px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '27px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '29px', weight: 300 }}
      >
        &emsp;&emsp;&emsp;&emsp;&emsp;<strong>сразу после литургии или в 9:00</strong> &ndash; Панихида по усопшим
      </Text>
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '20px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '23px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '27px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '29px', weight: 300 }}
      >
        &emsp;&emsp;&emsp;&emsp;&emsp;<strong>16:00</strong> &ndash; Вечернее богослужение
      </Text>
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '20px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '23px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '27px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '29px', weight: 300 }}
      >
        <strong>Воскресенье: 8:00</strong> &ndash; Утреннее богослужение
      </Text>
      <Break stepMobile={2} stepTablet={4} stepLaptop={8} stepDesktop={10} top />
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '20px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '23px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '27px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '29px', weight: 300 }}
        indent
        textAling={EAling.justify}
      >
        Кроме того, в седмицу совершается, как правило, 4 богослужения (иногда 6). Если в течение седмицы случается
        двунадесятый праздник, великий праздник, а так же праздник чтимой иконы Пресвятой Богородицы или же чтимого
        святого, богослужение совершается среди седмицы, аще нет, богослужение правится в пятницу вечером (зачастую это
        либо шестеричная, либо славословная, реже без знака или полиелейная служба). Ориентиром служит книга
        Богослужебные указания на текущий год и предпочтение отдаётся службам с наиболее высоким знакам, а так же
        русским святым.
      </Text>
      <Break stepMobile={12} stepTablet={14} stepLaptop={18} stepDesktop={22} top />
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '20px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '23px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '27px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '29px', weight: 300 }}
        indent
        textAling={EAling.justify}
      >
        Первую и последнюю седмицы Великого поста уставные богослужения совершаются ежедневно. Полиелейные службы, а так
        же обязательно отправляется служба св. Марии Египетской и Суббота Акафиста. На первой и последней седмице, а так
        же на Мариином стоянии читается канон св. Андрея Критского. На Светлой седмице богослужения совершаются с
        воскресенья вечера (Великая вечерня) до Светлой среды (Литургия) В эти дни обязательно совершается Крестный ход
        вокруг храма. Следующее богослужение совершается на Светлой седмицы в пятницу.
      </Text>
    </div>
  );
}

export default PageSchedule;
