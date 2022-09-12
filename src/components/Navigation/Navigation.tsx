import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import styles from './navigation.module.scss';

import { TPages, TRootState } from '../../types';
import { pagesSetActive } from '../../store/pagesSlice';

import { DoLinkToUpper } from '../../utils/samples';

export function Navigation() {
  const dispatch = useDispatch();
  const pages = useSelector<TRootState, TPages>((state) => state.pagesState.pages);

  const handleClickOnLink = (namePage: string) => {
    dispatch(pagesSetActive({ namePage }));
  };

  React.useEffect(() => {
    const namePage = window.location.pathname.replaceAll('/', '');
    handleClickOnLink(namePage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const classPrimary = classNames(styles.animeLink, { [styles.activeLink]: pages.primary });
  const classAbout = classNames(styles.animeLink, { [styles.activeLink]: pages.about });
  const classSanctitys = classNames(styles.animeLink, { [styles.activeLink]: pages.sanctitys });
  const classClergy = classNames(styles.animeLink, { [styles.activeLink]: pages.clergy });
  const classSchedule = classNames(styles.animeLink, { [styles.activeLink]: pages.schedule });
  const classLifeNews = classNames(styles.animeLink, { [styles.activeLink]: pages.lifenews });
  const classLifeAdverts = classNames(styles.animeLink, { [styles.activeLink]: pages.lifeadverts });
  const classContacts = classNames(styles.animeLink, { [styles.activeLink]: pages.contacts });

  return (
    <nav className={styles.navigation}>
      <DoLinkToUpper
        goTo='/primary'
        title='На главнуюю страницу'
        parentClass={classPrimary}
        onClick={() => handleClickOnLink('primary')}
      >
        Главная
      </DoLinkToUpper>
      <DoLinkToUpper
        goTo='/about'
        title='Подробнее о храме'
        parentClass={classAbout}
        onClick={() => handleClickOnLink('about')}
      >
        О храме
      </DoLinkToUpper>
      <DoLinkToUpper
        goTo='/sanctitys'
        title='Подробнее о святынях храма'
        parentClass={classSanctitys}
        onClick={() => handleClickOnLink('sanctitys')}
      >
        Святыни храма
      </DoLinkToUpper>
      <DoLinkToUpper
        goTo='/clergy'
        title='Подробнее о духовенстве'
        parentClass={classClergy}
        onClick={() => handleClickOnLink('clergy')}
      >
        Духовенство
      </DoLinkToUpper>
      <DoLinkToUpper
        goTo='/schedule'
        title='Подробнее о расписании богослужений'
        parentClass={classSchedule}
        onClick={() => handleClickOnLink('schedule')}
      >
        Расписание богослужений
      </DoLinkToUpper>
      <DoLinkToUpper
        goTo='/lifenews'
        title='Подробнее о жизни прихода и его событиях'
        parentClass={classLifeNews}
        onClick={() => handleClickOnLink('lifenews')}
      >
        Приходская жизнь
      </DoLinkToUpper>
      <DoLinkToUpper
        goTo='/lifeadverts'
        title='Объявления для прихожан и посетителей'
        parentClass={classLifeAdverts}
        onClick={() => handleClickOnLink('lifeadverts')}
      >
        Объявления
      </DoLinkToUpper>
      <DoLinkToUpper
        goTo='/contacts'
        title='Контакты, адреса и обратная связь'
        parentClass={classContacts}
        onClick={() => handleClickOnLink('contacts')}
      >
        Контакты
      </DoLinkToUpper>
    </nav>
  );
}
