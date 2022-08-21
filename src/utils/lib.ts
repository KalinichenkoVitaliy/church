/**
 * Функция проверки введённого символа на допустимость для цифровых полей
 * @param inCod - число, код символа
 * @returns {boolean}
 */
export function checkCharOnDigit(inCod: number) {
  const DIGIT = { min: 48, max: 57 };
  // проверка кода введённого символа
  const isGoodChar = DIGIT.min <= inCod && inCod <= DIGIT.max;
  return isGoodChar;
}

/**
 * Функция проверки введённого символа на допустимость для числовых полей с точкой
 * @param inCod - число, код символа
 * @returns {boolean}
 */
export function checkCharOnFloat(inCod: number) {
  const DOT = 46;
  const DIGIT = { min: 48, max: 57 };
  // проверка кода введённого символа
  const isGoodChar = inCod === DOT || (DIGIT.min <= inCod && inCod <= DIGIT.max);
  return isGoodChar;
}

/**
 * Функция преобразования строки чисел или номера телефона в форматированный телефонный номер
 * @param inValue - строка, значение поля ввода телефонного номера
 * @returns string
 */
export function valueToPhone(inValue: string) {
  // const regexpTel = /^\+[\d]{1}\ \([\d]{3}\)\ [\d]{3}-[\d]{2}-[\d]{2}$/; // "+7 (999) 999-99-99"
  let inValueStr = inValue;
  let valueShow = '';

  inValueStr = inValueStr.trim();
  if (inValueStr) {
    if (inValueStr.slice(0, 3) !== '+7 ') inValueStr = '+7 ' + inValueStr;
    const strVal = inValueStr.replace(/\D/g, '');
    const codCountry = strVal.slice(0, 1);
    const codRegion = strVal.slice(1, 4);
    const numPart1 = strVal.slice(4, 7);
    const numPart2 = strVal.slice(7, 9);
    const numPart3 = strVal.slice(9, 11);
    if (codRegion) {
      valueShow = `+${codCountry} (${codRegion}`;
      if (codRegion.length === 3) {
        if (numPart1) {
          valueShow = valueShow + `) ${numPart1}`;
          if (numPart1.length === 3) {
            if (numPart2) {
              valueShow = valueShow + `-${numPart2}`;
              if (numPart2.length === 2) if (numPart3) valueShow = valueShow + `-${numPart3}`;
            }
          }
        }
      }
    }
  }

  // isValid = regexpTel.test(valueShow);
  return valueShow;
}

/**
 * Функция форматирования строки типа "2013-12-19" в строку типа "19.12.2013"
 * @param inStr - строка
 * @returns string
 */
export function strYYYY_MM_DDtoDDMMYYYY(inStr: string) {
  let outStr = inStr.slice(8, 10) + '.' + inStr.slice(5, 7) + '.' + inStr.slice(0, 4);
  return outStr;
}

/**
 * Функция преобразования строки типа "2013-12-19" в число типа "20131219"
 * @param inStr - строка
 * @returns number
 */
export function strYYYY_MM_DDtoNumber(inStr: string) {
  const outStr = inStr.replaceAll('-', '');
  return parseInt(outStr);
}

/**
 * Функция проверки получаемой строки на соответствие именования папки новости
 * @param inStr
 * @returns boolean
 */
export function isFolderNews(inStr: string) {
  // eslint-disable-next-line no-useless-escape
  const maskNameFolderNews = /^\d{4}\-\d{2}\-\d{2}$/;
  return inStr.match(maskNameFolderNews) !== null;
}
