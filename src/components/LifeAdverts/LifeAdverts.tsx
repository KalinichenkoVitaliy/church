import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import styles from './lifeAdverts.module.scss';

import { TNotice, TRootState } from '../../types';
import {
  noticesSetActiveAdverts,
  noticesSetInactiveAdverts,
  noticesSetIsReadedActiveAdverts,
  noticesSetIsReadedInactiveAdverts,
  noticesSetIsReadedShortActiveAdverts,
  noticesSetShortActiveAdverts,
} from '../../store/noticesSlice';

import { readNotices, disassemblyContent, ENotice } from '../../utils/apiNotices';

import { TextIndentP, TextPNoticeWidth } from '../../utils/samples';
import { EColor, Text } from '../../shared/Text';

interface IActiveAdvertsProps {
  isActiveAdverts?: boolean;
  isAsside?: boolean;
  assideNumber?: number;
}

export function LifeAdverts({ isActiveAdverts, isAsside, assideNumber }: IActiveAdvertsProps) {
  const dispatch = useDispatch();
  const isReaded = useSelector<TRootState, boolean>((state) =>
    isAsside
      ? state.noticesState.notices.isReadedShortActiveAdverts
      : isActiveAdverts
      ? state.noticesState.notices.isReadedActiveAdverts
      : state.noticesState.notices.isReadedInactiveAdverts
  );
  const items = useSelector<TRootState, TNotice[]>((state) =>
    isAsside
      ? state.noticesState.notices.shortActiveAdverts
      : isActiveAdverts
      ? state.noticesState.notices.activeAdverts
      : state.noticesState.notices.inactiveAdverts
  );

  const callBackOnReady = (notices: TNotice[]) => {
    if (isAsside) {
      dispatch(noticesSetShortActiveAdverts({ shortActiveAdverts: notices }));
      dispatch(noticesSetIsReadedShortActiveAdverts({ isReadedShortActiveAdverts: true }));
    } else if (isActiveAdverts) {
      dispatch(noticesSetActiveAdverts({ activeAdverts: notices }));
      dispatch(noticesSetIsReadedActiveAdverts({ isReadedActiveAdverts: true }));
    } else {
      dispatch(noticesSetInactiveAdverts({ inactiveAdverts: notices }));
      dispatch(noticesSetIsReadedInactiveAdverts({ isReadedInactiveAdverts: true }));
    }
  };

  React.useEffect(() => {
    readNotices({ typeNotice: ENotice.adverts, isAsside, assideNumber, isActiveAdverts, onReady: callBackOnReady });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const textOnReading = isActiveAdverts
    ? 'Идёт загрузка действующих объявлений ...'
    : 'Идёт загрузка архивных объявлений ...';
  const textOnEmptyList = isActiveAdverts ? 'Список действующих объявлений пуст' : 'Список архивных объявлений пуст';

  return !isReaded ? (
    <>
      {isAsside ? (
        <Text As='p' font={{ size: 14, lineHeight: '16px', weight: 400 }} color={EColor.grey63}>
          {textOnReading}
        </Text>
      ) : (
        <TextIndentP>{textOnReading}</TextIndentP>
      )}
    </>
  ) : !items?.length ? (
    <>{isAsside ? null : <TextIndentP>{textOnEmptyList}</TextIndentP>}</>
  ) : (
    <div className={styles.lifeAdverts}>
      <Accordion allowMultipleExpanded allowZeroExpanded className={styles.accordion}>
        {items.map((item) => (
          <AccordionItem key={item.uuid} className={styles.accordion__item}>
            <AccordionItemHeading>
              <AccordionItemButton className={styles.accordion__button}>
                <TextPNoticeWidth>{item.title}</TextPNoticeWidth>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={styles.accordion__panel}>
              {item.content.map((bloc, index) =>
                disassemblyContent({ typeNotice: ENotice.adverts, blocId: item.uuid, blocData: bloc, index: index })
              )}
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
