import React from 'react';

import styles from './pagePrimary.module.scss';

import { EAling, Text } from '../../../shared/Text';
import { Break } from '../../../shared/Break';
import { Picture } from '../../../shared/Picture';

const documentTitle = getComputedStyle(document.documentElement).getPropertyValue('--documentTitle');

export function PagePrimary() {
  React.useEffect(() => {
    const newTitle = `Главная | ${documentTitle}`;
    document.title = newTitle;
    return () => {
      document.title = documentTitle;
    };
  }, []);

  return (
    <div className={styles.pagePrimary}>
      <Text
        As='h2'
        fontMobile={{ size: 16, lineHeight: '20px', weight: 500 }}
        fontTablet={{ size: 20, lineHeight: '24px', weight: 500 }}
        fontLaptop={{ size: 24, lineHeight: '28px', weight: 500 }}
        fontDesktop={{ size: 26, lineHeight: '30px', weight: 500 }}
        textAling={EAling.center}
      >
        Главная
      </Text>
      <Break stepMobile={12} stepTablet={14} stepLaptop={18} stepDesktop={22} top />
      <Picture
        name='images/photos/primary/temple'
        alt='Фото храма'
        sizeMobile={{ width: '100%', height: 'auto' }}
        sizeTablet={{ width: '100%', height: 'auto' }}
        sizeLaptop={{ width: '100%', height: 'auto' }}
        sizeDesktop={{ width: '100%', height: 'auto' }}
      />
      <Break stepMobile={12} stepTablet={14} stepLaptop={18} stepDesktop={22} top />
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '18px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '21px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '25px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '27px', weight: 300 }}
        textAling={EAling.justify}
      >
        &emsp;&emsp;&emsp;В Свято-Никольском храме станицы Фастовецкой регулярно совершаются богослужения в субботние,
        воскресные и праздничные дни. Каждый четверг в 10:00 служится акафист святителю Николаю или иконе Божией Матери
        Прибавление ума. Возглашаются проповеди, проводятся встречи с учителями и учениками.
      </Text>
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '18px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '21px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '25px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '27px', weight: 300 }}
        textAling={EAling.justify}
      >
        &emsp;&emsp;&emsp;Приход Свято-Никольского храма станицы Фастовецкой всегда принимает самое живое участие во
        всех благотворительных акциях и совместных социальных проектах. На территории Фастовецкого сельского поселения
        находится дом-интернат для пожилых людей. Отец Валерий, со дня основания Прихода, активно сотрудничает с этим
        социальным учреждением. В Рождество Христово, Пасху, Преображение Господне, Богоявление в доме-интернате
        совершаются водосвятные молебны, возглашаются проповеди, ведутся беседы с насельниками и персоналом. По желанию
        священники безвозмездно совершают для них требы. В Пасху и Рождество пожилым людям раздаются подарки, освящённые
        куличи и яйца. Священниками храма в районной больнице № 2 для малоимущих больных безвозмездно совершаются требы,
        проводятся беседы с больными и медицинским персоналом.
      </Text>
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '18px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '21px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '25px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '27px', weight: 300 }}
        textAling={EAling.justify}
      >
        &emsp;&emsp;&emsp;При Свято-Никольском храме действует пункт по приему и раздаче вещей для малообеспеченных
        семей.
      </Text>
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '18px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '21px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '25px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '27px', weight: 300 }}
        textAling={EAling.justify}
      >
        &emsp;&emsp;&emsp;На приходе действуют две воскресные образовательные группы –взрослая и детская. Учащиеся
        детской воскресной группы в Рождество и Пасху ставят театрализованные представления, посвященные этим великим
        праздникам.
      </Text>
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '18px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '21px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '25px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '27px', weight: 300 }}
        textAling={EAling.justify}
      >
        &emsp;&emsp;&emsp;Со средней общеобразовательной школой №3 станицы Фастовецкой заключен договор о
        сотрудничестве, на основании которого в школе изучается предмет ОПК, который ведет преподаватель Бугаева Е.А.
        Протоиерей Валерий Бочарников и иерей Александр Васильев проводят беседы с учащимися и учителями школы.
      </Text>
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '18px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '21px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '25px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '27px', weight: 300 }}
        textAling={EAling.justify}
      >
        &emsp;&emsp;&emsp;В проповедях священники рассказывают о сектантских лжеучениях, а в притворе Свято-Никольского
        храма на специальном стенде размещена информация о сектах и о недопустимости абортов.
      </Text>
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '18px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '21px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '25px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '27px', weight: 300 }}
        textAling={EAling.justify}
      >
        &emsp;&emsp;&emsp;Свято-Никольский приход существует 16 лет. За это время приход сформировался. В храм пришли
        молодые люди - учителя, врачи, предприниматели.
      </Text>
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '18px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '21px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '25px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '27px', weight: 300 }}
        textAling={EAling.justify}
      >
        &emsp;&emsp;&emsp;Несколько раз в год духовенство прихода и прихожане совершают паломничества по святым местам
        России.
      </Text>
    </div>
  );
}
