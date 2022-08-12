import React from 'react';
import { BrowserRouter } from 'react-router-dom';

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
