import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import styles from './formFeedback.module.scss';

import { checkCharOnDigit, valueToPhone } from '../../utils/lib';

import { Button } from '../../shared/Button';

// const mailClient = new SMTPClient({
//   user: 'sendingmails@mail.ru',
//   password: 'SjSeEguNzJ9p16R05ckP',
//   host: 'smtp.mail.ru',
//   ssl: true,
// });

export function FormFeedback() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onBlur' });
  const [showValuePhone, setValuePhone] = React.useState('');

  const checkInputCharToDigit = (event: any) => {
    if (!checkCharOnDigit(event.charCode)) event.preventDefault();
  };
  const formatInputToPhone = (event: any) => {
    const showValuePhove = valueToPhone(event.target.value);
    setValuePhone(showValuePhove);
  };

  const formSubmit = (data: FieldValues, event?: React.BaseSyntheticEvent) => {
    alert(JSON.stringify(data));
    setValuePhone('');
    reset();
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(formSubmit)}>
      <label className={styles.formLabel}>
        <input
          {...register('inputName', {
            required: 'Поле обязательно к заполнению',
            minLength: {
              value: 2,
              message: 'Должно быть минимум 2 символа',
            },
          })}
          id='inputName'
          className={styles.formInput}
          type='text'
          placeholder='Введите ваше имя'
        />
        {errors.inputName && (
          <div className={styles.formError}>⚠ {errors.inputName.message?.toString() || 'Error!'}</div>
        )}
      </label>
      <label className={styles.formLabel}>
        <input
          {...register('inputTel', {
            required: 'Поле обязательно к заполнению',
            minLength: {
              value: 18,
              message: 'Заполните номер до конца',
            },
          })}
          id='inputTel'
          className={styles.formInput}
          type='tel'
          value={showValuePhone}
          placeholder='Укажите телефон: +7 (___) ___-__-__'
          onKeyPress={checkInputCharToDigit}
          onInput={formatInputToPhone}
        />
        {errors.inputTel && <div className={styles.formError}>⚠ {errors.inputTel.message?.toString() || 'Error!'}</div>}
      </label>
      <div className={styles.formText}>
        <textarea
          {...register('textComment', {
            required: 'Поле обязательно к заполнению',
            minLength: {
              value: 4,
              message: 'Минимум 4 символа',
            },
          })}
          id='textComment'
          className={styles.formTextArea}
          placeholder='Введите ваше сообщение'
        />
        {errors.textComment && (
          <div className={styles.formError}>⚠ {errors.textComment.message?.toString() || 'Error!'}</div>
        )}
      </div>
      <Button action='do' type='submit' title='Отправить сообщение' transmittedClass={styles.button}>
        Отправить
      </Button>
    </form>
  );
}
