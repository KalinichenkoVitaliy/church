import React from 'react';
import classNames from 'classnames';

import styles from './navigation.module.scss';

import { LinkTo } from '../LinkTo';

type TState = {
  primary: boolean;
  about: boolean;
  clergy: boolean;
  schedule: boolean;
  life: boolean;
  contacts: boolean;
};
const cleanState: TState = {
  primary: false,
  about: false,
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
  const classClergy = classNames(styles.animeLink, { [styles.activeLink]: activeLink.clergy });
  const classSchedule = classNames(styles.animeLink, { [styles.activeLink]: activeLink.schedule });
  const classLife = classNames(styles.animeLink, { [styles.activeLink]: activeLink.life });
  const classContacts = classNames(styles.animeLink, { [styles.activeLink]: activeLink.contacts });

  return (
    <nav className={styles.navigation}>
      <LinkTo
        goTo='/primary'
        fontMobile={{ size: 12, lineHeight: '1', weight: 300 }}
        fontTablet={{ size: 12, lineHeight: '1', weight: 300 }}
        fontLaptop={{ size: 14, lineHeight: '1', weight: 300 }}
        fontDesktop={{ size: 14, lineHeight: '1', weight: 300 }}
        upperCase
        title='На главнуюю страницу'
        topClass={classPrimary}
        onClick={() => {
          handleClickOnLink('primary');
        }}
      >
        Главная
      </LinkTo>
      <LinkTo
        goTo='/about'
        fontMobile={{ size: 12, lineHeight: '1', weight: 300 }}
        fontTablet={{ size: 12, lineHeight: '1', weight: 300 }}
        fontLaptop={{ size: 14, lineHeight: '1', weight: 300 }}
        fontDesktop={{ size: 14, lineHeight: '1', weight: 300 }}
        upperCase
        title='Подробнее о храме'
        topClass={classAbout}
        onClick={() => {
          handleClickOnLink('about');
        }}
      >
        О храме
      </LinkTo>
      <LinkTo
        goTo='/clergy'
        fontMobile={{ size: 12, lineHeight: '1', weight: 300 }}
        fontTablet={{ size: 12, lineHeight: '1', weight: 300 }}
        fontLaptop={{ size: 14, lineHeight: '1', weight: 300 }}
        fontDesktop={{ size: 14, lineHeight: '1', weight: 300 }}
        upperCase
        title='Подробнее о духовенстве'
        topClass={classClergy}
        onClick={() => {
          handleClickOnLink('clergy');
        }}
      >
        Духовенство
      </LinkTo>
      <LinkTo
        goTo='/schedule'
        fontMobile={{ size: 12, lineHeight: '1', weight: 300 }}
        fontTablet={{ size: 12, lineHeight: '1', weight: 300 }}
        fontLaptop={{ size: 14, lineHeight: '1', weight: 300 }}
        fontDesktop={{ size: 14, lineHeight: '1', weight: 300 }}
        upperCase
        title='Подробнее о расписание богослужений'
        topClass={classSchedule}
        onClick={() => {
          handleClickOnLink('schedule');
        }}
      >
        Расписание богослужений
      </LinkTo>
      <LinkTo
        goTo='/life'
        fontMobile={{ size: 12, lineHeight: '1', weight: 300 }}
        fontTablet={{ size: 12, lineHeight: '1', weight: 300 }}
        fontLaptop={{ size: 14, lineHeight: '1', weight: 300 }}
        fontDesktop={{ size: 14, lineHeight: '1', weight: 300 }}
        upperCase
        title='Подробнее о расписание богослужений'
        topClass={classLife}
        onClick={() => {
          handleClickOnLink('life');
        }}
      >
        Приходская жизнь
      </LinkTo>
      <LinkTo
        goTo='/contacts'
        fontMobile={{ size: 12, lineHeight: '1', weight: 300 }}
        fontTablet={{ size: 12, lineHeight: '1', weight: 300 }}
        fontLaptop={{ size: 14, lineHeight: '1', weight: 300 }}
        fontDesktop={{ size: 14, lineHeight: '1', weight: 300 }}
        upperCase
        title='Контакты, адреса и обратная связь'
        topClass={classContacts}
        onClick={() => {
          handleClickOnLink('contacts');
        }}
      >
        Контакты
      </LinkTo>
    </nav>
  );
}
