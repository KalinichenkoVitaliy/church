import React from 'react';

import styles from './pageSchedule.module.scss';

import { TextIndentP, TextP, TextH2, TextH3, BreakAfterH2, BreakAfterH3 } from '../../../utils/samples';

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
      <TextH2>Расписание богослужений</TextH2>
      <BreakAfterH2 />
      <TextH3>Ежемесячные регулярные богослужения:</TextH3>
      <BreakAfterH3 />
      <TextP>
        <strong>Последнее воскресенье месяца</strong> &ndash; Благодарственный молебен Господу
      </TextP>
      <BreakAfterH2 />
      <TextH3>Еженедельные регулярные богослужения:</TextH3>
      <BreakAfterH3 />
      {/* <TextP><strong>Понедельник</strong> &ndash; нет богослужений</TextP> */}
      {/* <TextP><strong>Вторник</strong> &ndash; нет богослужений</TextP> */}
      {/* <TextP><strong>Среда</strong> &ndash; нет богослужений</TextP> */}
      <TextP>
        <strong>Четверг: 9:00</strong> &ndash; Молебен с акафистом святителю Николаю Чудотворцу
      </TextP>
      <TextP>
        <strong>Пятница: 16:00</strong> &ndash; Вечернее богослужение (в случае отсутствия в течении седмицы праздничных
        богослужений)
      </TextP>
      <TextP>
        <strong>Суббота: 8:00</strong> &ndash; Утреннее богослужение (в случае отсутствия в течении седмицы праздничных
        богослужений)
      </TextP>
      <TextP>
        &emsp;&emsp;&emsp;&emsp;&emsp;<strong>сразу после литургии или в 9:00</strong> &ndash; Панихида по усопшим
      </TextP>
      <TextP>
        &emsp;&emsp;&emsp;&emsp;&emsp;<strong>16:00</strong> &ndash; Вечернее богослужение
      </TextP>
      <TextP>
        <strong>Воскресенье: 8:00</strong> &ndash; Утреннее богослужение
      </TextP>
      <BreakAfterH3 />
      <TextIndentP>
        Кроме того, в седмицу совершается, как правило, 4 богослужения (иногда 6). Если в течение седмицы случается
        двунадесятый праздник, великий праздник, а так же праздник чтимой иконы Пресвятой Богородицы или же чтимого
        святого, богослужение совершается среди седмицы, аще нет, богослужение правится в пятницу вечером (зачастую это
        либо шестеричная, либо славословная, реже без знака или полиелейная служба). Ориентиром служит книга
        Богослужебные указания на текущий год и предпочтение отдаётся службам с наиболее высоким знакам, а так же
        русским святым.
      </TextIndentP>
      <TextIndentP>
        Первую и последнюю седмицы Великого поста уставные богослужения совершаются ежедневно. Полиелейные службы, а так
        же обязательно отправляется служба св. Марии Египетской и Суббота Акафиста. На первой и последней седмице, а так
        же на Мариином стоянии читается канон св. Андрея Критского. На Светлой седмице богослужения совершаются с
        воскресенья вечера (Великая вечерня) до Светлой среды (Литургия) В эти дни обязательно совершается Крестный ход
        вокруг храма. Следующее богослужение совершается на Светлой седмицы в пятницу.
      </TextIndentP>
    </div>
  );
}

export default PageSchedule;
