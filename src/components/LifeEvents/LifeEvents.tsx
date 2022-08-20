import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import styles from './lifeEvents.module.scss';

import { toDDMMYYYY } from '../../utils/lib';
import { createNews, disassemblyContent, TNew } from '../../utils/news';

import { EAling, Text } from '../../shared/Text';

export function LifeEvents() {
  const [items, setItems] = React.useState<TNew[]>([]);

  React.useEffect(() => {
    createNews({ onReady: setItems });
  }, []);

  return (
    <div className={styles.lifeEvents}>
      <Accordion allowMultipleExpanded allowZeroExpanded className={styles.accordion}>
        {items.map((item) => (
          <AccordionItem key={item.uuid} className={styles.accordion__item}>
            <AccordionItemHeading>
              <AccordionItemButton className={styles.accordion__button}>
                <Text
                  fontMobile={{ size: 13, lineHeight: '17px', weight: 400 }}
                  fontTablet={{ size: 14, lineHeight: '18px', weight: 400 }}
                  fontLaptop={{ size: 14, lineHeight: '18px', weight: 400 }}
                  fontDesktop={{ size: 15, lineHeight: '20px', weight: 300 }}
                  textAling={EAling.justify}
                >
                  <strong>{toDDMMYYYY(item.uuid) + ' г. - '}</strong>
                  {item.title}
                </Text>
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
