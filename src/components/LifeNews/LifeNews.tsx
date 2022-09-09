import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import styles from './lifeNews.module.scss';

import { TNotice, TRootState } from '../../types';
import {
  noticesSetIsReadedNews,
  noticesSetIsReadedShortNews,
  noticesSetNews,
  noticesSetShortNews,
} from '../../store/noticesSlice';

import { strYYYY_MM_DDtoDDMMYYYY } from '../../utils/lib';
import { readNotices, disassemblyContent, ENotice } from '../../utils/apiNotices';

import { TextIndentP, TextPNoticeWidth } from '../../utils/samples';
import { EColor, Text } from '../../shared/Text';

interface ILifeNewsProps {
  isAsside?: boolean;
  assideNumber?: number;
}

export function LifeNews({ isAsside, assideNumber }: ILifeNewsProps) {
  const dispatch = useDispatch();
  const isReaded = useSelector<TRootState, boolean>((state) =>
    isAsside ? state.noticesState.notices.isReadedShortNews : state.noticesState.notices.isReadedNews
  );
  const items = useSelector<TRootState, TNotice[]>((state) =>
    isAsside ? state.noticesState.notices.shortNews : state.noticesState.notices.news
  );

  const callBackOnReady = (notices: TNotice[]) => {
    if (isAsside) {
      dispatch(noticesSetShortNews({ shortNews: notices }));
      dispatch(noticesSetIsReadedShortNews({ isReadedShortNews: true }));
    } else {
      dispatch(noticesSetNews({ news: notices }));
      dispatch(noticesSetIsReadedNews({ isReadedNews: true }));
    }
  };

  React.useEffect(() => {
    readNotices({ typeNotice: ENotice.news, isAsside, assideNumber, onReady: callBackOnReady });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const textOnReading = 'Идёт загрузка событий ...';
  const textOnEmptyList = 'Список событий пуст';

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
    <div className={styles.lifeNews}>
      <Accordion allowMultipleExpanded allowZeroExpanded className={styles.accordion}>
        {items.map((item) => (
          <AccordionItem key={item.uuid} className={styles.accordion__item}>
            <AccordionItemHeading>
              <AccordionItemButton className={styles.accordion__button}>
                <TextPNoticeWidth>
                  <strong>{strYYYY_MM_DDtoDDMMYYYY(item.uuid) + ' г.'}</strong>
                  &ensp;&ndash;&ensp;
                  {item.title}
                </TextPNoticeWidth>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={styles.accordion__panel}>
              {item.content.map((bloc, index) =>
                disassemblyContent({ typeNotice: ENotice.news, blocId: item.uuid, blocData: bloc, index: index })
              )}
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
