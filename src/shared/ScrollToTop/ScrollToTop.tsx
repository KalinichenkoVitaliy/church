import React from 'react';
import classNames from 'classnames';

import styles from './scrollToTop.module.scss';

import { EIcons, Icon } from '../../shared/Icon';

export function ScrollToTop() {
  const [isShowArrowUp, setIsShowArrowUp] = React.useState(false);

  const handleClickOnButtonArrowUp = () => {
    if (classArrowUp.includes('buttonArrowUpShow')) {
      window.scrollBy({
        top: -window.pageYOffset,
        behavior: 'smooth',
      });
    }
  };
  const handleOnScrollAndResize = () => {
    const viewHeight = document.documentElement.clientHeight;
    const pageOffsetOfBottomView = window.pageYOffset;
    if (pageOffsetOfBottomView > viewHeight * 0.2) setIsShowArrowUp(true);
    else setIsShowArrowUp(false);
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleOnScrollAndResize);
    window.addEventListener('scroll', handleOnScrollAndResize);
    handleOnScrollAndResize();
    return () => {
      window.removeEventListener('scroll', handleOnScrollAndResize);
      window.removeEventListener('resize', handleOnScrollAndResize);
    };
  }, []);

  const classArrowUp = classNames(
    styles.buttonArrowUp,
    { [styles.buttonArrowUpShow]: isShowArrowUp },
    { [styles.buttonArrowUpHide]: !isShowArrowUp }
  );

  return (
    <div id='arrowUp' className={classArrowUp} title='На верх' onClick={handleClickOnButtonArrowUp}>
      <Icon
        name={EIcons.arrowUp}
        rateMobile={{ size: '28px' }}
        rateTablet={{ size: '24px' }}
        rateLaptop={{ size: '26px' }}
        rateDesktop={{ size: '28px' }}
      />
    </div>
  );
}
