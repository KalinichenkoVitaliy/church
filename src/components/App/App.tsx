import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import styles from './app.module.scss';

import { AdminBar } from '../AdminBar';
import { Container } from '../Container';
import { Header } from '../Header';
import { Content } from '../Content';
import { Footer } from '../Footer';

function App() {
  return (
    <div className={styles.app}>
      <AdminBar />
      <ToastContainer className={styles.toastContainer} toastClassName={styles.toast} autoClose={false} />
      <BrowserRouter>
        <Container>
          <Header />
          <Content />
          <Footer />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
