import React from 'react';
import classNames from 'classnames';

import styles from './scrollToTop.module.scss';

export function ScrollToTop() {
  const [isShowArrowUp, setIsShowArrowUp] = React.useState(false);

  const handleClickOnButtonArrowUp = (event: React.BaseSyntheticEvent) => {
    if (classArrowUp.includes('Show')) {
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
    styles.svgArrowUp,
    { [styles.svgArrowUpShow]: isShowArrowUp },
    { [styles.svgArrowUpHide]: !isShowArrowUp }
  );

  return (
    <div className={styles.arrowUp}>
      <svg
        id='svgArrowUp'
        className={classArrowUp}
        viewBox='0 0 200 200'
        strokeLinecap='round'
        strokeLinejoin='round'
        fillRule='evenodd'
        xmlns='http://www.w3.org/2000/svg'
        onClick={handleClickOnButtonArrowUp}
      >
        <circle cx='99.6575' cy='99.6575' fill='rgba(0, 0, 0, 0.5)' r='98.2677' />
        <path
          d='M103.4427 88.3189l39.685 20.7874m-45.36-20.7874l-39.685 20.7874'
          stroke='rgba(255, 255, 255, 0.6)'
          strokeLinecap='square'
          strokeWidth='14'
        />
      </svg>
    </div>
  );
}
