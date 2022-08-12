import React from 'react';

import styles from './contentLeft.module.scss';

interface IContentLeftProps {
  children?: React.ReactNode;
}

export function ContentLeft({ children }: IContentLeftProps) {
  return <div className={styles.contentLeft}>{children}</div>;
}
