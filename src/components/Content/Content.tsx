import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import styles from './content.module.scss';

import { ContentLeft } from '../ContentLeft';
import { ContentRight } from '../ContentRight';
import { ScrollToTop } from '../../shared/ScrollToTop';

const PagePrimary = React.lazy(() => import('../routes/PagePrimary/PagePrimary'));
const PageAbout = React.lazy(() => import('../routes/PageAbout/PageAbout'));
const PageSanctitys = React.lazy(() => import('../routes/PageSanctitys/PageSanctitys'));
const PageClergy = React.lazy(() => import('../routes/PageClergy/PageClergy'));
const PageSchedule = React.lazy(() => import('../routes/PageSchedule/PageSchedule'));
const PageLife = React.lazy(() => import('../routes/PageLife/PageLife'));
const PageAdverts = React.lazy(() => import('../routes/PageAdverts/PageAdverts'));
const PageContacts = React.lazy(() => import('../routes/PageContacts/PageContacts'));
const PageNotFound = React.lazy(() => import('../routes/PageNotFound/PageNotFound'));

export function Content() {
  return (
    <main className={styles.content}>
      <section className={styles.left}>
        <ContentLeft>
          <Routes>
            <Route path='/' element={<Navigate to={'/primary'} replace />} />
            <Route
              path='/primary'
              element={
                <React.Suspense fallback={<h2>Идёт загрузка страницы ...</h2>}>
                  <PagePrimary />
                </React.Suspense>
              }
            />
            <Route
              path='/about'
              element={
                <React.Suspense fallback={<h2>Идёт загрузка страницы ...</h2>}>
                  <PageAbout />
                </React.Suspense>
              }
            />
            <Route
              path='/sanctitys'
              element={
                <React.Suspense fallback={<h2>Идёт загрузка страницы ...</h2>}>
                  <PageSanctitys />
                </React.Suspense>
              }
            />
            <Route
              path='/clergy'
              element={
                <React.Suspense fallback={<h2>Идёт загрузка страницы ...</h2>}>
                  <PageClergy />
                </React.Suspense>
              }
            />
            <Route
              path='/schedule'
              element={
                <React.Suspense fallback={<h2>Идёт загрузка страницы ...</h2>}>
                  <PageSchedule />
                </React.Suspense>
              }
            />
            <Route
              path='/lifenews'
              element={
                <React.Suspense fallback={<h2>Идёт загрузка страницы ...</h2>}>
                  <PageLife />
                </React.Suspense>
              }
            />
            <Route
              path='/lifeadverts'
              element={
                <React.Suspense fallback={<h2>Идёт загрузка страницы ...</h2>}>
                  <PageAdverts />
                </React.Suspense>
              }
            />
            <Route
              path='/contacts'
              element={
                <React.Suspense fallback={<h2>Идёт загрузка страницы ...</h2>}>
                  <PageContacts />
                </React.Suspense>
              }
            />
            <Route
              path='*'
              element={
                <React.Suspense fallback={<h2>Идёт загрузка страницы ...</h2>}>
                  <PageNotFound />
                </React.Suspense>
              }
            />
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
