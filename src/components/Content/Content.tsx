import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import classNames from 'classnames';

import styles from './content.module.scss';

import { ContentLeft } from '../ContentLeft';
import { ContentRight } from '../ContentRight';
import { PagePrimary } from '../routes/PagePrimary';
import { PageAboutChurch } from '../routes/PageAboutChurch';
import { PageClergy } from '../routes/PageClergy';
import { PageSchedule } from '../routes/PageSchedule';
import { PageLife } from '../routes/PageLife';
import { PageContacts } from '../routes/PageContacts';
import { PageNotFound } from '../routes/PageNotFound';
import { EIcons, Icon } from '../../shared/Icon';

export function Content() {
  const [isShowArrowUp, setIsShowArrowUp] = React.useState(false);

  const handleClickOnButtonArrowUp = () => {
    if (classArrowUp.includes('buttonArrowUpShow')) {
      window.scrollBy({
        top: -window.pageYOffset,
        behavior: 'smooth',
      });
    }
  };
  const handleOnScrollDocument = () => {
    const viewHeight = document.documentElement.clientHeight;
    const pageOffsetOfBottomView = window.pageYOffset;
    if (pageOffsetOfBottomView > viewHeight * 0.2) setIsShowArrowUp(true);
    else setIsShowArrowUp(false);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleOnScrollDocument);
    handleOnScrollDocument();
    return () => {
      window.removeEventListener('scroll', handleOnScrollDocument);
    };
  }, []);

  const classArrowUp = classNames(
    styles.buttonArrowUp,
    { [styles.buttonArrowUpShow]: isShowArrowUp },
    { [styles.buttonArrowUpHide]: !isShowArrowUp }
  );

  return (
    <main className={styles.content}>
      <section className={styles.left}>
        <ContentLeft>
          <Routes>
            <Route path='/' element={<Navigate to={'/primary'} replace />} />
            <Route path='/primary' element={<PagePrimary />} />
            <Route path='/about-church' element={<PageAboutChurch />} />
            <Route path='/clergy' element={<PageClergy />} />
            <Route path='/schedule' element={<PageSchedule />} />
            <Route path='/life' element={<PageLife />} />
            <Route path='/contacts' element={<PageContacts />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </ContentLeft>
      </section>
      <aside className={styles.right}>
        <ContentRight />
      </aside>
      <div id='arrowUp' className={classArrowUp} title='На верх' onClick={handleClickOnButtonArrowUp}>
        <Icon name={EIcons.arrowUp} size={18} />
      </div>
    </main>
  );
}
