import React from 'react';
import classNames from 'classnames';

import styles from './break.module.scss';

interface IBreakProps {
  step?: number;
  stepMobile?: number;
  stepTablet?: number;
  stepLaptop?: number;
  stepDesktop?: number;
  inline?: boolean;
  top?: boolean;
}

export function Break({
  step,
  stepMobile,
  stepTablet,
  stepLaptop,
  stepDesktop,
  inline = false,
  top = false,
}: IBreakProps) {
  const propStep = step ? { ['--step' as any]: `${step}px` } : undefined;
  const propStepMobile = stepMobile ? { ['--stepMobile' as any]: `${stepMobile}px` } : undefined;
  const propStepTablet = stepTablet ? { ['--stepTablet' as any]: `${stepTablet}px` } : undefined;
  const propStepLaptop = stepLaptop ? { ['--stepLaptop' as any]: `${stepLaptop}px` } : undefined;
  const propStepDesktop = stepDesktop ? { ['--stepDesktop' as any]: `${stepDesktop}px` } : undefined;
  const customStyles: React.CSSProperties = {
    ...propStep,
    ...propStepMobile,
    ...propStepTablet,
    ...propStepLaptop,
    ...propStepDesktop,
  };

  const classes = classNames(
    { [styles[`step`]]: step },
    { [styles[`stepMobile`]]: stepMobile },
    { [styles[`stepTablet`]]: stepTablet },
    { [styles[`stepLaptop`]]: stepLaptop },
    { [styles[`stepDesktop`]]: stepDesktop },
    { [styles.inline]: inline },
    { [styles.top]: top }
  );

  return <div className={classes} style={customStyles} />;
}
