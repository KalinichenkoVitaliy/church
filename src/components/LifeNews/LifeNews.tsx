import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import styles from './lifeNews.module.scss';

import { toDDMMYYYY } from '../../utils/lib';
import { createNews, disassemblyContent, TNew } from '../../utils/news';

import { TextSpanNews } from '../../utils/samples';

export function LifeNews() {
  const [items, setItems] = React.useState<TNew[]>([]);

  React.useEffect(() => {
    createNews({ onReady: setItems });
  }, []);

  return (
    <div className={styles.lifeNews}>
      <Accordion allowMultipleExpanded allowZeroExpanded className={styles.accordion}>
        {items.map((item) => (
          <AccordionItem key={item.uuid} className={styles.accordion__item}>
            <AccordionItemHeading>
              <AccordionItemButton className={styles.accordion__button}>
                <TextSpanNews>
                  <strong>{toDDMMYYYY(item.uuid) + ' г. - '}</strong>
                  {item.title}
                </TextSpanNews>
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
