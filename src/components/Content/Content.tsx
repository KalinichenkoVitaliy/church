import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import styles from './content.module.scss';

import { ContentLeft } from '../ContentLeft';
import { ContentRight } from '../ContentRight';
import { PagePrimary } from '../routes/PagePrimary';
import { PageAbout } from '../routes/PageAbout';
import { PageClergy } from '../routes/PageClergy';
import { PageSchedule } from '../routes/PageSchedule';
import { PageLife } from '../routes/PageLife';
import { PageContacts } from '../routes/PageContacts';
import { PageNotFound } from '../routes/PageNotFound';
import { ScrollToTop } from '../../shared/ScrollToTop';

export function Content() {
  console.log('Content run');

  return (
    <main className={styles.content}>
      <section className={styles.left}>
        <ContentLeft>
          <Routes>
            <Route path='/' element={<Navigate to={'/primary'} replace />} />
            <Route path='/primary' element={<PagePrimary />} />
            <Route path='/about' element={<PageAbout />} />
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
      <ScrollToTop />
    </main>
  );
}
