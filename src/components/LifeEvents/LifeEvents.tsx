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

import files from '../../assets/news/news.json';

// import { EAling, Text } from '../../shared/Text';
// import { Break } from '../../shared/Break';

type TNew = {
  uuid: string;
  title: React.ReactNode;
  content: React.ReactNode;
};

export function LifeEvents() {
  const [items, setItems] = React.useState<TNew[]>([]);

  // React.useEffect(() => {
  //   console.log('files:', files);
  //   // let delayTimeout = 200;
  //   const accumItems: TNew[] = [];

  //   for (let i = 0; i < files.length; i++) {
  //     // const runAxios = async () => {
  //     //   const prom = await axios.get(files[i]).then((res) => {
  //     //     return res;
  //     //   });
  //     //   const data = await prom;
  //     //   return data;
  //     // };
  //     // axios
  //     //   .get(files[i])
  //     //   .then((res) => {
  //     //     console.log('axios - res.data', res.data);
  //     //     accumItems.push(res.data);
  //     //   })
  //     //   .catch((err) => console.log('axios - err', err));
  //     // delayTimeout += 200;
  //   }

  //   // setTimeout(() => {
  //   //   console.log('accumItems', accumItems);
  //   //   setItems(
  //   //     accumItems.sort((n1, n2) => {
  //   //       if (n1.uuid < n2.uuid) return 1;
  //   //       if (n1.uuid > n2.uuid) return -1;
  //   //       return 0;
  //   //     })
  //   //   );
  //   // }, delayTimeout);
  // }, []);
  console.log('files:', files);

  console.log('LifeEvents');

  return (
    <div className={styles.lifeEvents}>
      <Accordion allowZeroExpanded className={styles.accordion}>
        {items.map((item) => (
          <AccordionItem key={item.uuid} className={styles.accordion__item}>
            <AccordionItemHeading>
              <AccordionItemButton className={styles.accordion__button}>
                {item.uuid + '. ' + item.title}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={styles.accordion__panel}>{item.content}</AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
