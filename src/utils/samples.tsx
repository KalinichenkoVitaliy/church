import { EAling, ITextProps, Text } from '../shared/Text';
import { Break } from '../shared/Break';
import { IPictureProps, Picture } from '../shared/Picture';

export function TextH2({ children }: ITextProps) {
  return (
    <Text
      As='h2'
      fontMobile={{ size: 16, lineHeight: '20px', weight: 500 }}
      fontTablet={{ size: 20, lineHeight: '24px', weight: 500 }}
      fontLaptop={{ size: 24, lineHeight: '28px', weight: 500 }}
      fontDesktop={{ size: 26, lineHeight: '30px', weight: 500 }}
      textAling={EAling.center}
    >
      {children}
    </Text>
  );
}

export function TextH3({ children }: ITextProps) {
  return (
    <Text
      As='h3'
      fontMobile={{ size: 14, lineHeight: '18px', weight: 700 }}
      fontTablet={{ size: 16, lineHeight: '20px', weight: 700 }}
      fontLaptop={{ size: 18, lineHeight: '22px', weight: 700 }}
      fontDesktop={{ size: 20, lineHeight: '24px', weight: 700 }}
    >
      {children}
    </Text>
  );
}

export function TextSpanNews({ children }: ITextProps) {
  return (
    <Text
      As='span'
      fontMobile={{ size: 13, lineHeight: '17px', weight: 400 }}
      fontTablet={{ size: 14, lineHeight: '18px', weight: 400 }}
      fontLaptop={{ size: 14, lineHeight: '18px', weight: 400 }}
      fontDesktop={{ size: 15, lineHeight: '20px', weight: 300 }}
    >
      {children}
    </Text>
  );
}

export function TextP({ children }: ITextProps) {
  return (
    <Text
      As='p'
      fontMobile={{ size: 14, lineHeight: '18px', weight: 400 }}
      fontTablet={{ size: 15, lineHeight: '21px', weight: 400 }}
      fontLaptop={{ size: 17, lineHeight: '25px', weight: 400 }}
      fontDesktop={{ size: 19, lineHeight: '27px', weight: 300 }}
      textAling={EAling.justify}
    >
      {children}
    </Text>
  );
}

export function TextPNews({ children }: ITextProps) {
  return (
    <Text
      As='p'
      fontMobile={{ size: 13, lineHeight: '17px', weight: 400 }}
      fontTablet={{ size: 14, lineHeight: '18px', weight: 400 }}
      fontLaptop={{ size: 14, lineHeight: '18px', weight: 400 }}
      fontDesktop={{ size: 15, lineHeight: '20px', weight: 300 }}
      textAling={EAling.justify}
    >
      {children}
    </Text>
  );
}

export function TextIndentP({ children }: ITextProps) {
  return (
    <Text
      As='p'
      fontMobile={{ size: 14, lineHeight: '18px', weight: 400 }}
      fontTablet={{ size: 15, lineHeight: '21px', weight: 400 }}
      fontLaptop={{ size: 17, lineHeight: '25px', weight: 400 }}
      fontDesktop={{ size: 19, lineHeight: '27px', weight: 300 }}
      indent
      textAling={EAling.justify}
    >
      {children}
    </Text>
  );
}

export function TextIndentPNews({ children }: ITextProps) {
  return (
    <Text
      As='p'
      fontMobile={{ size: 13, lineHeight: '17px', weight: 400 }}
      fontTablet={{ size: 14, lineHeight: '18px', weight: 400 }}
      fontLaptop={{ size: 14, lineHeight: '18px', weight: 400 }}
      fontDesktop={{ size: 15, lineHeight: '20px', weight: 300 }}
      indent
      textAling={EAling.justify}
    >
      {children}
    </Text>
  );
}

export function PictureMulti100TB({ name, alt }: IPictureProps) {
  return (
    <Picture
      name={name}
      alt={alt}
      sizeMobile={{ width: '100%', height: 'auto' }}
      sizeTablet={{ width: '100%', height: 'auto' }}
      sizeLaptop={{ width: '100%', height: 'auto' }}
      sizeDesktop={{ width: '100%', height: 'auto' }}
      marginMobile='4px 0 8px 0'
      marginTablet='4px 0 8px 0'
      marginLaptop='5px 0 10px 0'
      marginDesktop='5px 0 10px 0'
    />
  );
}

export function PictureOnce100TB({ name, alt }: IPictureProps) {
  return (
    <Picture
      name={name}
      alt={alt}
      size={{ width: '100%', height: 'auto' }}
      marginMobile='4px 0 8px 0'
      marginTablet='4px 0 8px 0'
      marginLaptop='5px 0 10px 0'
      marginDesktop='5px 0 10px 0'
    />
  );
}

export function PictureMultiLeft49TB({ name, alt }: IPictureProps) {
  return (
    <Picture
      name={name}
      alt={alt}
      sizeMobile={{ width: '49%', height: 'auto' }}
      sizeTablet={{ width: '49%', height: 'auto' }}
      sizeLaptop={{ width: '49%', height: 'auto' }}
      sizeDesktop={{ width: '49%', height: 'auto' }}
      marginMobile='4px 0 8px 0'
      marginTablet='4px 0 8px 0'
      marginLaptop='5px 0 10px 0'
      marginDesktop='5px 0 10px 0'
      aling='left'
    />
  );
}

export function PictureMultiRight49TB({ name, alt }: IPictureProps) {
  return (
    <Picture
      name={name}
      alt={alt}
      sizeMobile={{ width: '49%', height: 'auto' }}
      sizeTablet={{ width: '49%', height: 'auto' }}
      sizeLaptop={{ width: '49%', height: 'auto' }}
      sizeDesktop={{ width: '49%', height: 'auto' }}
      marginMobile='4px 0 8px 0'
      marginTablet='4px 0 8px 0'
      marginLaptop='5px 0 10px 0'
      marginDesktop='5px 0 10px 0'
      aling='right'
    />
  );
}

export function PictureMultiPhoto({ name, alt }: IPictureProps) {
  return (
    <Picture
      name={name}
      alt={alt}
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
  );
}

export function BreakAfterH2() {
  return <Break stepMobile={12} stepTablet={14} stepLaptop={18} stepDesktop={22} top />;
}

export function BreakAfterH3() {
  return <Break stepMobile={2} stepTablet={4} stepLaptop={8} stepDesktop={10} top />;
}

export function BreakInterP() {
  return <Break stepMobile={8} stepTablet={10} stepLaptop={14} stepDesktop={18} top />;
}
