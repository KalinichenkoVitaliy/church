import React from 'react';
import axios from 'axios';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import styles from './lifeEvents.module.scss';

// import { EAling, Text } from '../../shared/Text';
// import { Break } from '../../shared/Break';

type TNew = {
  uuid: string;
  title: React.ReactNode;
  content: React.ReactNode;
};

export function LifeEvents() {
  console.log('LifeEvents run');

  // const [items, setItems] = React.useState<TNew[]>([]);
  const items: TNew[] = [];

  // const news = [
  //   {
  //     uuid: '2017-09-18',
  //     title: (
  //       <Text
  //         fontMobile={{ size: 13, lineHeight: '18px', weight: 400 }}
  //         fontTablet={{ size: 14, lineHeight: '20px', weight: 400 }}
  //         fontLaptop={{ size: 15, lineHeight: '24px', weight: 400 }}
  //         fontDesktop={{ size: 16, lineHeight: '26px', weight: 300 }}
  //         textAling={EAling.justify}
  //       >
  //         2017-09-18. Пример заголовка события 1. Пример заголовка события 1. Пример заголовка события 1. Пример
  //         заголовка события 1
  //       </Text>
  //     ),
  //     content: (
  //       <Text
  //         As='p'
  //         fontMobile={{ size: 13, lineHeight: '18px', weight: 400 }}
  //         fontTablet={{ size: 14, lineHeight: '20px', weight: 400 }}
  //         fontLaptop={{ size: 15, lineHeight: '24px', weight: 400 }}
  //         fontDesktop={{ size: 16, lineHeight: '26px', weight: 300 }}
  //         textAling={EAling.justify}
  //       >
  //         Пример текста события 1. Пример текста события 1. Пример текста события 1. Пример текста события 1. Пример
  //         текста события 1
  //       </Text>
  //     ),
  //   },
  //   {
  //     uuid: '2017-09-19',
  //     title: (
  //       <Text
  //         fontMobile={{ size: 13, lineHeight: '18px', weight: 400 }}
  //         fontTablet={{ size: 14, lineHeight: '20px', weight: 400 }}
  //         fontLaptop={{ size: 15, lineHeight: '24px', weight: 400 }}
  //         fontDesktop={{ size: 16, lineHeight: '26px', weight: 300 }}
  //         textAling={EAling.justify}
  //       >
  //         2017-09-19. Пример заголовка события 2
  //       </Text>
  //     ),
  //     content: (
  //       <Text
  //         As='p'
  //         fontMobile={{ size: 13, lineHeight: '18px', weight: 400 }}
  //         fontTablet={{ size: 14, lineHeight: '20px', weight: 400 }}
  //         fontLaptop={{ size: 15, lineHeight: '24px', weight: 400 }}
  //         fontDesktop={{ size: 16, lineHeight: '26px', weight: 300 }}
  //         textAling={EAling.justify}
  //       >
  //         Пример текста события 2
  //       </Text>
  //     ),
  //   },
  // ];

  React.useEffect(() => {
    axios
      .get('/news/2017-09-19.json')
      .then((res) => {
        console.log('axios - res.data', res.data);
        items.push(res.data);
      })
      .catch((err) => console.log('axios - err', err));
  }, []);

  // const listNews = items.map((item) => (
  //   <AccordionItem key={item.uuid} className={styles.accordion__item}>
  //     <AccordionItemHeading>
  //       <AccordionItemButton className={styles.accordion__button}>{item.title}</AccordionItemButton>
  //     </AccordionItemHeading>
  //     <AccordionItemPanel className={styles.accordion__panel}>{item.content}</AccordionItemPanel>
  //   </AccordionItem>
  // ));
  console.log('items', items);

  return (
    <div className={styles.lifeEvents}>
      <Accordion allowZeroExpanded className={styles.accordion}>
        {/* {listNews} */}
      </Accordion>
    </div>
  );
}
