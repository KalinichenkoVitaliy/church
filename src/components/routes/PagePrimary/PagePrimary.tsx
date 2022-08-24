import React from 'react';

import styles from './pagePrimary.module.scss';

import {
  TextH2ACenter,
  TextIndentPWidth,
  TextPNews,
  BreakAfterH2,
  BreakInterP,
  PictureMulti100TB,
} from '../../../utils/samples';
import { Cross } from '../../Cross';

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
      <TextH2ACenter>Главная</TextH2ACenter>
      <BreakAfterH2 />
      <div className={styles.picture}>
        <Cross />
        <PictureMulti100TB name='images/photos/primary/temple' alt='Фото храма' />
      </div>
      <TextIndentPWidth>
        Свято-Никольский приход существует с ноября 1998 года. За это время приход сформировался. В храм пришло много
        молодых людей, приносят и приводят много детей.
      </TextIndentPWidth>
      <TextIndentPWidth>
        В Свято-Никольском храме станицы Фастовецкой регулярно совершаются богослужения в субботние, воскресные и
        праздничные дни. Возглашаются проповеди, проводятся встречи с учителями и учениками. Каждый четверг в 9:00
        служится акафист святителю Николаю.
      </TextIndentPWidth>
      <TextIndentPWidth>
        На приходе действуют две воскресные образовательные группы – взрослая и детская. Учащиеся детской воскресной
        группы в Рождество и Пасху ставят театрализованные представления, посвященные этим великим праздникам.
      </TextIndentPWidth>
      <TextIndentPWidth>
        Со средней общеобразовательной школой №3 станицы Фастовецкой заключен договор о сотрудничестве, на основании
        которого в школе изучается предмет ОПК (ведёт преподаватель Бугаева Е.А.), где протоиерей Валерий Бочарников и
        иерей Александр Васильев проводят беседы с учащимися и учителями школы. В проповедях священники рассказывают о
        сектантских лжеучениях, а в притворе Свято-Никольского храма на специальном стенде размещена информация о сектах
        и о недопустимости абортов.
      </TextIndentPWidth>
      <TextIndentPWidth>
        Несколько раз в год духовенство прихода и прихожане совершают паломничества по святым местам России.
      </TextIndentPWidth>
      <TextIndentPWidth>
        Приход Свято-Никольского храма станицы Фастовецкой всегда принимает самое живое участие во всех
        благотворительных акциях и совместных социальных проектах. На территории Фастовецкого сельского поселения
        находится дом-интернат для пожилых людей. Отец Валерий, со дня основания Прихода, активно сотрудничает с этим
        социальным учреждением. В Рождество Христово, Пасху, Преображение Господне, Богоявление в доме-интернате
        совершаются водосвятные молебны, возглашаются проповеди, ведутся беседы с насельниками и персоналом. По желанию
        священники безвозмездно совершают для них требы. В Пасху и Рождество пожилым людям раздаются подарки, освящённые
        куличи и яйца. Священниками храма в районной больнице №2 для малоимущих больных безвозмездно совершаются требы,
        проводятся беседы с больными и медицинским персоналом.
      </TextIndentPWidth>
      <TextIndentPWidth>
        При Свято-Никольском храме действует пункт по приёму и раздаче вещей для малообеспеченных семей.
      </TextIndentPWidth>
      <TextIndentPWidth>
        На цели благотворительности приход Свято-Никольского храма станицы Фастовецкой принимает пожертвования как
        непосредственно в храме, так и по перечислениям. Вот реквизиты для безналичных перечислений:
      </TextIndentPWidth>
      <BreakInterP />
      <TextPNews>
        <strong>Получатель:</strong> ПРАВОСЛАВНЫЙ ПРИХОД СВЯТО-НИКОЛЬСКОГО ХРАМА СТ. ФАСТОВЕЦКОЙ ТИХОРЕЦКОГО РАЙОНА К.К.
        ТИХОРЕЦКОЙ ЕПАРХИИ
      </TextPNews>
      <TextPNews>
        <strong>ИНН:</strong> 2354006941
      </TextPNews>
      <TextPNews>
        <strong>КПП:</strong> 235401001
      </TextPNews>
      <TextPNews>
        <strong>Расчётный счёт:</strong> 40703810200070000018
      </TextPNews>
      <TextPNews>
        <strong>Банк:</strong> КБ "Кубань Кредит" ООО г. Краснодар
      </TextPNews>
      <TextPNews>
        <strong>БИК банка:</strong> 040349722
      </TextPNews>
      <TextPNews>
        <strong>Корреспондентский счёт:</strong> 30101810200000000722
      </TextPNews>
    </div>
  );
}

export default PagePrimary;
