import React from 'react';

import styles from './pageCntacts.module.scss';

const documentTitle = getComputedStyle(document.documentElement).getPropertyValue('--documentTitle');

export function PageContacts() {
  React.useEffect(() => {
    const newTitle = `Контакты и адреса | ${documentTitle}`;
    document.title = newTitle;
    return () => {
      document.title = documentTitle;
    };
  }, []);

  return <div className={styles.pagePageContacts}>PageContacts</div>;
}
