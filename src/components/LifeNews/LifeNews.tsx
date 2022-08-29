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
import { createNews, disassemblyContent, TNew } from '../../utils/apiNews';

import { TextPNewsWidth } from '../../utils/samples';

interface ILifeNewsProps {
  isAsside?: boolean;
}

export function LifeNews({ isAsside = false }: ILifeNewsProps) {
  const [items, setItems] = React.useState<TNew[]>([]);

  React.useEffect(() => {
    createNews({ isAsside: isAsside, onReady: setItems });
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
                <TextPNewsWidth>
                  <strong>{strYYYY_MM_DDtoDDMMYYYY(item.uuid) + ' г.'}</strong>
                  &ensp;&ndash;&ensp;
                  {item.title}
                </TextPNewsWidth>
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
