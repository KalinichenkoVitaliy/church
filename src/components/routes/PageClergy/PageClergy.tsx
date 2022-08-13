import React from 'react';

import styles from './pageClergy.module.scss';

import { EAling, Text } from '../../../shared/Text';
import { Break } from '../../../shared/Break';
import { Picture } from '../../../shared/Picture';

const documentTitle = getComputedStyle(document.documentElement).getPropertyValue('--documentTitle');

export function PageClergy() {
  React.useEffect(() => {
    const newTitle = `Духовенство | ${documentTitle}`;
    document.title = newTitle;
  }, []);

  return (
    <div className={styles.pageClergy}>
      <Text
        As='h2'
        fontMobile={{ size: 16, lineHeight: '20px', weight: 500 }}
        fontTablet={{ size: 20, lineHeight: '24px', weight: 500 }}
        fontLaptop={{ size: 24, lineHeight: '28px', weight: 500 }}
        fontDesktop={{ size: 26, lineHeight: '30px', weight: 500 }}
        textAling={EAling.center}
      >
        Духовенство: биография настоятеля и штата
      </Text>
      <Break stepMobile={8} stepTablet={10} stepLaptop={14} stepDesktop={18} top />
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '20px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '23px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '27px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '29px', weight: 300 }}
        textAling={EAling.justify}
      >
        <Picture
          name='images/photos/clergy/pater-valeriy'
          alt='Фото отца Валерия'
          sizeMobile={{ width: 100, height: 150 }}
          sizeTablet={{ width: 120, height: 180 }}
          sizeLaptop={{ width: 150, height: 225 }}
          sizeDesktop={{ width: 200, height: 300 }}
          marginMobile='0 0 0 10px'
          marginTablet='0 0 0 15px'
          marginLaptop='0 0 5px 20px'
          marginDesktop='0 0 5px 30px'
          aling='right'
        />
        &emsp;&emsp;&emsp;Настоятель Свято-Никольского храма протоиерей <strong>Валерий Николаевич Бочарников</strong>{' '}
        родился 3 февраля 1974 года в городе Чарджоу Туркменской республики. В 1977 году семья вернулась на родину в
        станицу Кавказскую. В 1981 году пошёл в школу №3 станицы Кавказской, в которой окончил 8 классов. 1989 году
        поступил в ПТУ №15 г. Кропоткин, которое закончил в 1992 году по специальности помощник машиниста электровоза.
      </Text>
      <Break stepMobile={8} stepTablet={10} stepLaptop={14} stepDesktop={18} top />
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '20px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '23px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '27px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '29px', weight: 300 }}
        textAling={EAling.justify}
      >
        &emsp;&emsp;&emsp;В 1993 году поступил в Юридический техникум г. Кропоткин и одновременно стал нести послушание
        алтарника в Свято-Никольском храме станицы Кавказской. Не окончив техникум поступил в 1995 году в Ставропольскую
        духовную семинарию. В 1998 году женился на Яновской Оксане Евгеньевне 1973 г.р. В этом же году 8 октября был
        рукоположен в сан диакона, а 18 октября в сан иерея и был переведён на заочное отделение. После прохождения
        богослужебной практики в Покровском храме г. Кропоткин, 7 ноября 1998 года получил указ нести послушание
        настоятеля в станице Фастовецкой. 17 марта 1999 года родилась дочь Мария Бочарникова, 12 декабря 2002 года
        родился сын Бочарников Николай. С 2003 года нёс послушание помощника благочинного по образованию и катехизации.
        С 30 мая 2014 года и по 25 декабря 2017 года исполнял обязанности благочинного Тихорецкого церковного округа.
      </Text>
      <Break stepMobile={8} stepTablet={10} stepLaptop={14} stepDesktop={18} top />
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '20px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '23px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '27px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '29px', weight: 300 }}
        textAling={EAling.justify}
      >
        <Picture
          name='images/photos/clergy/pater-aleksandr'
          alt='Фото отца Александра'
          sizeMobile={{ width: 100, height: 150 }}
          sizeTablet={{ width: 120, height: 180 }}
          sizeLaptop={{ width: 150, height: 225 }}
          sizeDesktop={{ width: 200, height: 300 }}
          marginMobile='0 0 0 10px'
          marginTablet='0 0 0 15px'
          marginLaptop='0 0 5px 20px'
          marginDesktop='0 0 5px 30px'
          aling='right'
        />
        &emsp;&emsp;&emsp;Иерей <strong>Александр Владимирович Васильев</strong> служит штатным священником в
        Свято-Никольском храме станицы Фастовецкой с декабря 2010 года. Родился 6 декабря 1977 года в г. Нальчик КБР. В
        1985 году пошёл в школу №6 г. Нальчик. По окончании которой в 1995 году поступил в Ставропольскую духовную
        семинарию. В 1996 году был призван в армию для прохождения службы в ПВО г. Астрахани. В 1998 году женился на
        Кармазиной Раисе Петровне 1977 г.р. Имеет двух сыновей: Васильев Александр (1 августа 1999 г.р.) и Васильев
        Даниил (28 декабря 2000 г.р.). В декабре этого года рукоположен в сан диакона. В мае 1999 года рукоположен в сан
        священника.
      </Text>
      <Break stepMobile={8} stepTablet={10} stepLaptop={14} stepDesktop={18} top />
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '20px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '23px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '27px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '29px', weight: 300 }}
        textAling={EAling.justify}
      >
        &emsp;&emsp;&emsp;В мае 1999 года назначен настоятелем Михаило-Архангельского храма станицы Засовской Лабинского
        района. В сентябре 1999 года назначен штатным священником Рождества-Богородичного храма посёлка Мостовской и по
        совместительству настоятелем Михаило-Архангельского храма станицы Засовской и Иоанно-Богословского храма станицы
        Каладжинской. С марта 2000 года освобождён от обязанностей штатного священника храма посёлка Мостовской. В июне
        2000 года освобождён от обязанностей и.о. настоятеля храма станицы Каладжинской. С июня 2003 года освобождён от
        должности настоятеля храма станицы Засовской и назначен настоятелем Свято-Успенского храма села Унароково
        Мостовского района и по совместительству штатным священником Свято-Никольского храма г. Лабинска. В марте 2005
        года добровольно зачислен за штат. С мая 2005 года, будучи за штатом, несёт требные послушания и совершает
        богослужения в Свято-Никольском храме г. Лабинска. В июле 2007 года назначен настоятелем Свято-Казанского храма
        села Ковалёвское Новокубанского района. В октябре 2007 года назначен штатным священником храма Рождества
        Богородицы станицы Новопокровской и по совместительству настоятелем Свято-Покровского храма станицы Терновской
        Тихорецкого района. В мае 2009 года назначен штатным священником Свято-Покровского храма г. Новокубанска. С 1
        декабря 2010 года переведён штатным священником в Свято-Никольский храм станицы Фастовецкой Тихорецкого района,
        где и несёт послушание священника по настоящее время.
      </Text>
    </div>
  );
}
