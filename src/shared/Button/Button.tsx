import React from 'react';
import classNames from 'classnames';

import styles from './button.module.scss';

// type TAction = 'do' | 'delete' | 'break';
type TAction = 'do';
type TType = 'button' | 'submit' | 'reset' | undefined;
type TActive = true | false;

interface IButton {
  action: TAction;
  children?: React.ReactNode;
  type?: TType;
  active?: TActive;
  title?: string;
  transmittedClass?: string;
  onClick?: () => void;
}
const NOOP = () => {};

export function Button({
  action,
  children = '',
  type = 'button',
  active = true,
  title = '',
  transmittedClass,
  onClick = NOOP,
}: IButton) {
  const classes = classNames(
    styles.button,
    styles[`action-${action}`],
    { [styles[`actived`]]: active },
    { [styles[`disabled`]]: !active },
    transmittedClass
  );

  return (
    <button
      className={classes}
      type={type}
      title={active ? title : ''}
      onClick={active ? onClick : NOOP}
      disabled={!active}
    >
      {children}
    </button>
  );
}
