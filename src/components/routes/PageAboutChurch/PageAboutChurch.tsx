import React from 'react';

import styles from './pageAboutChurch.module.scss';

import { EAling, Text } from '../../../shared/Text';
import { Break } from '../../../shared/Break';
import { Picture } from '../../../shared/Picture';

const documentTitle = getComputedStyle(document.documentElement).getPropertyValue('--documentTitle');

export function PageAboutChurch() {
  React.useEffect(() => {
    const newTitle = `О храме | ${documentTitle}`;
    document.title = newTitle;
  }, []);

  return (
    <div className={styles.pageAboutChurch}>
      <Text
        As='h2'
        fontMobile={{ size: 16, lineHeight: '20px', weight: 500 }}
        fontTablet={{ size: 20, lineHeight: '24px', weight: 500 }}
        fontLaptop={{ size: 24, lineHeight: '28px', weight: 500 }}
        fontDesktop={{ size: 26, lineHeight: '30px', weight: 500 }}
        textAling={EAling.center}
      >
        О храме
      </Text>
      <Break stepMobile={12} stepTablet={14} stepLaptop={18} stepDesktop={22} top />
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '18px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '21px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '25px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '27px', weight: 300 }}
        textAling={EAling.justify}
      >
        &emsp;&emsp;&emsp;На старинных картах местность, где находиться станица Фастовецкая называлось «Урочище
        Курганов». По Указу Екатерины II от 30 июня 1792 года царское правительство приступило к заселению земель
        добровольцами из Центральных губерний Российской империи.
      </Text>
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '18px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '21px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '25px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '27px', weight: 300 }}
        textAling={EAling.justify}
      >
        &emsp;&emsp;&emsp;В 1829 году на территорию Урочища Курганов переселились крестьяне Воронежской губернии
        Коротоякского уезда в количестве 116 душ. Позже они дали название местной степной речке «Тихая» и обозначили
        свой населённый пункт как село Тихорецкое.
      </Text>
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '18px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '21px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '25px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '27px', weight: 300 }}
        textAling={EAling.justify}
      >
        &emsp;&emsp;&emsp;Несмотря на тяжёлый быт первых переселенцев, их души стремились к общению с Богом. В селе
        начался сбор денег на постройку церкви. Строительство церкви обошлось селянам в 20000 рублей серебром. В 1839
        году деревянная Свято-Никольская церковь, построенная на самом высоком месте села, была открыта. По своей
        архитектуре она напоминала современную Свято-Успенскую церковь города Тихорецка.
      </Text>
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '18px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '21px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '25px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '27px', weight: 300 }}
        textAling={EAling.justify}
      >
        &emsp;&emsp;&emsp;В 1898 году была открыта вторая церковь Александра Невского, но главной и наиболее чтимой была
        Свято-Никольская. Причт церкви состоял из двух священников – о.Николая Инжавенского и о.Алексия Лаванова, одного
        диакона и двух псаломщиков. Станичники любили храм и жертвовали церковную утварь и иконы. Здесь хранились
        дарственные знамёна российских императоров, вручённые за героические подвиги казаков. Церковь была центром
        общественной, политической и идеологической жизни, вокруг неё формируется торговый и образовательный центры.
      </Text>
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '18px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '21px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '25px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '27px', weight: 300 }}
        textAling={EAling.justify}
      >
        &emsp;&emsp;&emsp;После революции церковь стала считаться презренным объектом буржуазной культуры, той самой,
        которая мешала строить «светлое будущее». Население перестало посещать храм, а вскоре его закрыли совсем из-за
        отсутствия Прихода.
      </Text>
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '18px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '21px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '25px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '27px', weight: 300 }}
        textAling={EAling.justify}
      >
        &emsp;&emsp;&emsp;По инициативе местных коммунистов в 1930 году село Тихорецкое переименовано в честь местного
        революционера С.П. Фастовца.
      </Text>
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '18px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '21px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '25px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '27px', weight: 300 }}
        textAling={EAling.justify}
      >
        &emsp;&emsp;&emsp;Между 1935 и 1939 годами здание двух станичных церквей сломали для нужд капитального
        строительства в свиносовхозе «Большевик». Храмы разобрали так «успешно», что наше поколение не находило следов
        их существования. Разгром довершило строительство футбольного поля в 50-х года ХХ века. Тогда в забытые склепы
        умерших священников провалился трактор. Содержимое склепов было разграблено, парчевые ризы население применяло
        как средство для оккультных обрядов, останки выбросили пионеры, а сами склепы сравняли с землёй.
      </Text>
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '18px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '21px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '25px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '27px', weight: 300 }}
        textAling={EAling.justify}
      >
        &emsp;&emsp;&emsp;Несколько позже энтузиасты из числа местных жителей дважды пытались открыть приход и только в
        90-е годы что-то стало «перестраиваться» в душах людей. Нашлись энтузиасты и в Фастовецкой: супруги Бутенко и
        О.В. Вебер пришли на приём к главе местной администрации Арсентьеву В.Т. с предложением открыть церковный приход
        и встретили горячую поддержку.
      </Text>
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '18px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '21px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '25px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '27px', weight: 300 }}
        textAling={EAling.justify}
      >
        &emsp;&emsp;&emsp;Настоятель Свято-Успенского храма города Тихорецка протоиерей Пётр Дашевский благословил
        благое начинание. По Указу Архиепископа Екатеринодарского и Новороссийского 7 ноября 1998 года был открыт приход
        Свято-Никольской церкви станицы Фастовецкой, где с первых дней и поныне настоятелем является о. Валерий
        Бочарников.
      </Text>
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '18px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '21px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '25px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '27px', weight: 300 }}
        textAling={EAling.justify}
      >
        &emsp;&emsp;&emsp;Под церковь местная община казаков отдала часть своего здания и первое Богослужение состоялось
        в Рождество Христово 1999 года. Так стала возрождаться духовная жизнь в станице Фастовецкой. Многие окрестились,
        повенчались, в последний путь людей теперь «провожала» молитва священника, а не духовой оркестр. «Закипела»
        жизнь на приходе. До закрытия телекомпании, на местном Фастовецком телевидении действовала православная передача
        «Православный час», в которой священник отвечал на все интересующие вопросы, рассказывал о праздниках
        Православной церкви, транслировались православные фильмы. Организуются ежегодные паломнические поездки по святым
        местам: Задонск, Сергиев Посад, Оптина Пустынь, Псково-Печёрский монастырь, Изборск, Дивеево, Санаксары,
        Санкт-Петербург, о.Валаам, Ставрополь, Минеральные воды и др.
      </Text>
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '18px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '21px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '25px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '27px', weight: 300 }}
        textAling={EAling.justify}
      >
        &emsp;&emsp;&emsp;В очередной раз, побывав в Фастовецкой губернатор Краснодарского края А.Н. Ткачёв заметил, что
        в станице не звонят церковные колокола. Александр Николаевич со своим отцом Николаем Ивановичем решили помочь в
        возведении нового каменного храма. Видя такую поддержку в возведении храма, жители станицы, предприниматели и
        главы крестьянско-фермерских хозяйств ускорили сбор денежных средств.
      </Text>
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '18px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '21px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '25px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '27px', weight: 300 }}
        textAling={EAling.justify}
      >
        &emsp;&emsp;&emsp;26 сентября 2004 года при большом стечении народа в присутствии главы администрации МО
        Тихорецкий район П.Н. Максимовских, зам. главы О.Н. Жигулиной и главы сельского поселения Арсентьева В.Т. отцом
        Валерием был отслужен молебен на воздвижение Храма и установлен деревянный крест.
      </Text>
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '18px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '21px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '25px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '27px', weight: 300 }}
        textAling={EAling.justify}
      >
        &emsp;&emsp;&emsp;20 февраля 2005 года состоялась закладка камня в основание будущего Свято-Никольского храма:
      </Text>
      <Picture
        name='images/photos/aboutchurch/2005-02-20_zakladka-kamnya'
        alt='Фото газеты о закладке камня'
        sizeMobile={{ width: '100%', height: 'auto' }}
        sizeTablet={{ width: '100%', height: 'auto' }}
        sizeLaptop={{ width: '100%', height: 'auto' }}
        sizeDesktop={{ width: '100%', height: 'auto' }}
        marginMobile='0 0 8px 0'
        marginTablet='0 0 8px 0'
        marginLaptop='0 0 10px 0'
        marginDesktop='0 0 10px 0'
      />
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '18px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '21px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '25px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '27px', weight: 300 }}
        textAling={EAling.justify}
      >
        &emsp;&emsp;&emsp;С Божией помощью и молитвами началось строительство храма:
      </Text>
      <Picture
        name='images/photos/aboutchurch/2006-07-01_building-1'
        alt='Фото строительства храма №1'
        sizeMobile={{ width: '100%', height: 'auto' }}
        sizeTablet={{ width: '100%', height: 'auto' }}
        sizeLaptop={{ width: '100%', height: 'auto' }}
        sizeDesktop={{ width: '100%', height: 'auto' }}
        marginMobile='3px 0 8px 0'
        marginTablet='3px 0 8px 0'
        marginLaptop='3px 0 10px 0'
        marginDesktop='0 0 10px 0'
      />
      <Picture
        name='images/photos/aboutchurch/2006-07-01_building-2'
        alt='Фото строительства храма №2'
        sizeMobile={{ width: '49%', height: 'auto' }}
        sizeTablet={{ width: '49%', height: 'auto' }}
        sizeLaptop={{ width: '49%', height: 'auto' }}
        sizeDesktop={{ width: '49%', height: 'auto' }}
        marginMobile='3px 0 8px 0'
        marginTablet='3px 0 8px 0'
        marginLaptop='3px 0 10px 0'
        marginDesktop='0 0 10px 0'
        aling='left'
      />
      <Picture
        name='images/photos/aboutchurch/2006-07-01_building-3'
        alt='Фото строительства храма №3'
        sizeMobile={{ width: '49%', height: 'auto' }}
        sizeTablet={{ width: '49%', height: 'auto' }}
        sizeLaptop={{ width: '49%', height: 'auto' }}
        sizeDesktop={{ width: '49%', height: 'auto' }}
        marginMobile='3px 0 8px 0'
        marginTablet='3px 0 8px 0'
        marginLaptop='3px 0 10px 0'
        marginDesktop='0 0 10px 0'
        aling='right'
      />
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '18px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '21px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '25px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '27px', weight: 300 }}
        textAling={EAling.justify}
      >
        &emsp;&emsp;&emsp;20 октября 2007 года Митрополитом Екатеринодарским и Кубанским Исидором совершилось
        торжественное освящение колоколов:
      </Text>
      <Picture
        name='images/photos/aboutchurch/2007-10-20_osvyashenie-kolokolov-1'
        alt='Фото освящения колоколов'
        sizeMobile={{ width: '100%', height: 'auto' }}
        sizeTablet={{ width: '100%', height: 'auto' }}
        sizeLaptop={{ width: '100%', height: 'auto' }}
        sizeDesktop={{ width: '100%', height: 'auto' }}
        marginMobile='0 0 8px 0'
        marginTablet='0 0 8px 0'
        marginLaptop='0 0 10px 0'
        marginDesktop='0 0 10px 0'
      />
      <Picture
        name='images/photos/aboutchurch/2007-10-20_osvyashenie-kolokolov-2'
        alt='Фото главного колокола'
        sizeMobile={{ width: '100%', height: 'auto' }}
        sizeTablet={{ width: '100%', height: 'auto' }}
        sizeLaptop={{ width: '100%', height: 'auto' }}
        sizeDesktop={{ width: '100%', height: 'auto' }}
        marginMobile='0 0 8px 0'
        marginTablet='0 0 8px 0'
        marginLaptop='0 0 10px 0'
        marginDesktop='0 0 10px 0'
      />
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '18px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '21px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '25px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '27px', weight: 300 }}
        textAling={EAling.justify}
      >
        &emsp;&emsp;&emsp;Строительство храма продолжалось:
      </Text>
      <Picture
        name='images/photos/aboutchurch/2007-08-01_building-4'
        alt='Фото строительства храма №4'
        sizeMobile={{ width: '100%', height: 'auto' }}
        sizeTablet={{ width: '100%', height: 'auto' }}
        sizeLaptop={{ width: '100%', height: 'auto' }}
        sizeDesktop={{ width: '100%', height: 'auto' }}
        marginMobile='3px 0 8px 0'
        marginTablet='3px 0 8px 0'
        marginLaptop='3px 0 10px 0'
        marginDesktop='0 0 10px 0'
      />
      <Picture
        name='images/photos/aboutchurch/2007-08-01_building-5'
        alt='Фото строительства храма №5'
        sizeMobile={{ width: '100%', height: 'auto' }}
        sizeTablet={{ width: '100%', height: 'auto' }}
        sizeLaptop={{ width: '100%', height: 'auto' }}
        sizeDesktop={{ width: '100%', height: 'auto' }}
        marginMobile='3px 0 8px 0'
        marginTablet='3px 0 8px 0'
        marginLaptop='3px 0 10px 0'
        marginDesktop='0 0 10px 0'
      />
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '18px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '21px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '25px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '27px', weight: 300 }}
        textAling={EAling.justify}
      >
        &emsp;&emsp;&emsp;5 октября 2008 года Владыка Исидор освятил храм в честь Святителя Николая Чудотворца. Так в
        станице появился главный праздник – престольный, который празднуется 19/6 декабря:
      </Text>
      <Picture
        name='images/photos/aboutchurch/2008-10-05_osvyashenie-hrama-1'
        alt='Фото газеты об освящении храма'
        sizeMobile={{ width: '100%', height: 'auto' }}
        sizeTablet={{ width: '100%', height: 'auto' }}
        sizeLaptop={{ width: '100%', height: 'auto' }}
        sizeDesktop={{ width: '100%', height: 'auto' }}
        marginMobile='0 0 8px 0'
        marginTablet='0 0 8px 0'
        marginLaptop='0 0 10px 0'
        marginDesktop='0 0 10px 0'
      />
      <Picture
        name='images/photos/aboutchurch/2008-10-05_osvyashenie-hrama-2'
        alt='Фото освящения храма №1'
        sizeMobile={{ width: '100%', height: 'auto' }}
        sizeTablet={{ width: '100%', height: 'auto' }}
        sizeLaptop={{ width: '100%', height: 'auto' }}
        sizeDesktop={{ width: '100%', height: 'auto' }}
        marginMobile='0 0 8px 0'
        marginTablet='0 0 8px 0'
        marginLaptop='0 0 10px 0'
        marginDesktop='0 0 10px 0'
      />
      <Picture
        name='images/photos/aboutchurch/2008-10-05_osvyashenie-hrama-3'
        alt='Фото освящения храма №2'
        sizeMobile={{ width: '100%', height: 'auto' }}
        sizeTablet={{ width: '100%', height: 'auto' }}
        sizeLaptop={{ width: '100%', height: 'auto' }}
        sizeDesktop={{ width: '100%', height: 'auto' }}
        marginMobile='0 0 8px 0'
        marginTablet='0 0 8px 0'
        marginLaptop='0 0 10px 0'
        marginDesktop='0 0 10px 0'
      />
      <Text
        As='p'
        fontMobile={{ size: 14, lineHeight: '18px', weight: 400 }}
        fontTablet={{ size: 15, lineHeight: '21px', weight: 400 }}
        fontLaptop={{ size: 17, lineHeight: '25px', weight: 400 }}
        fontDesktop={{ size: 19, lineHeight: '27px', weight: 300 }}
        textAling={EAling.justify}
      >
        &emsp;&emsp;&emsp;Величественно и торжественно возвышается наш храм в центре станицы, звонят колокола, призывая
        людей к молитве, ослепительно сверкают в небе золотые купола:
      </Text>
      <Picture
        name='images/photos/aboutchurch/2018-03-17_hram'
        alt='Фото храма'
        sizeMobile={{ width: '100%', height: 'auto' }}
        sizeTablet={{ width: '100%', height: 'auto' }}
        sizeLaptop={{ width: '100%', height: 'auto' }}
        sizeDesktop={{ width: '100%', height: 'auto' }}
        marginMobile='3px 0 8px 0'
        marginTablet='3px 0 8px 0'
        marginLaptop='3px 0 10px 0'
        marginDesktop='0 0 10px 0'
      />
    </div>
  );
}
