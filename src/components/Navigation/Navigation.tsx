import React from 'react';
import classNames from 'classnames';

import styles from './navigation.module.scss';

import { DoLinkTo } from '../../utils/samples';

type TState = {
  primary: boolean;
  about: boolean;
  sanctitys: boolean;
  clergy: boolean;
  schedule: boolean;
  life: boolean;
  contacts: boolean;
};
const cleanState: TState = {
  primary: false,
  about: false,
  sanctitys: false,
  clergy: false,
  schedule: false,
  life: false,
  contacts: false,
};

export function Navigation() {
  const [activeLink, setActiveLink] = React.useState(cleanState);

  const handleClickOnLink = (keyLink: string) => {
    const newState: TState = { ...cleanState };
    newState[keyLink as keyof TState] = true;
    setActiveLink(newState);
  };

  React.useEffect(() => {
    const namePage = document.location.pathname.slice(1);
    handleClickOnLink(namePage);
  }, []);

  const classPrimary = classNames(styles.animeLink, { [styles.activeLink]: activeLink.primary });
  const classAbout = classNames(styles.animeLink, { [styles.activeLink]: activeLink.about });
  const classSanctitys = classNames(styles.animeLink, { [styles.activeLink]: activeLink.sanctitys });
  const classClergy = classNames(styles.animeLink, { [styles.activeLink]: activeLink.clergy });
  const classSchedule = classNames(styles.animeLink, { [styles.activeLink]: activeLink.schedule });
  const classLife = classNames(styles.animeLink, { [styles.activeLink]: activeLink.life });
  const classContacts = classNames(styles.animeLink, { [styles.activeLink]: activeLink.contacts });

  return (
    <nav className={styles.navigation}>
      <DoLinkTo
        goTo='/primary'
        title='На главнуюю страницу'
        parentClass={classPrimary}
        onClick={() => handleClickOnLink('primary')}
      >
        Главная
      </DoLinkTo>
      <DoLinkTo
        goTo='/about'
        title='Подробнее о храме'
        parentClass={classAbout}
        onClick={() => handleClickOnLink('about')}
      >
        О храме
      </DoLinkTo>
      <DoLinkTo
        goTo='/sanctitys'
        title='Подробнее о святынях храма'
        parentClass={classSanctitys}
        onClick={() => handleClickOnLink('sanctitys')}
      >
        Святыни храма
      </DoLinkTo>
      <DoLinkTo
        goTo='/clergy'
        title='Подробнее о духовенстве'
        parentClass={classClergy}
        onClick={() => handleClickOnLink('clergy')}
      >
        Духовенство
      </DoLinkTo>
      <DoLinkTo
        goTo='/schedule'
        title='Подробнее о расписании богослужений'
        parentClass={classSchedule}
        onClick={() => handleClickOnLink('schedule')}
      >
        Расписание богослужений
      </DoLinkTo>
      <DoLinkTo
        goTo='/life'
        title='Подробнее о жизни прихода и его событиях'
        parentClass={classLife}
        onClick={() => handleClickOnLink('life')}
      >
        Приходская жизнь
      </DoLinkTo>
      <DoLinkTo
        goTo='/contacts'
        title='Контакты, адреса и обратная связь'
        parentClass={classContacts}
        onClick={() => handleClickOnLink('contacts')}
      >
        Контакты
      </DoLinkTo>
    </nav>
  );
}
