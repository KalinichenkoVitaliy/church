import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import styles from './lifeNews.module.scss';

import { strYYYY_MM_DDtoDDMMYYYY } from '../../utils/lib';
import { readNotices, disassemblyContent, TFile, ENotice } from '../../utils/apiFiles';

import { TextPNoticeWidth } from '../../utils/samples';

interface ILifeNewsProps {
  isAsside?: boolean;
  assideNumber?: number;
}

export function LifeNews({ isAsside, assideNumber }: ILifeNewsProps) {
  const [items, setItems] = React.useState<TFile[]>([]);

  React.useEffect(() => {
    readNotices({ typeNotice: ENotice.news, isAsside, assideNumber, onReady: setItems });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !items.length ? (
    <h3>Идёт загрузка событий ...</h3>
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
              {item.content.map((bloc, index) => disassemblyContent(item.uuid, bloc, index))}
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
