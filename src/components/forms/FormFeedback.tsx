import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './formFeedback.module.scss';
import apiKeys from '../../utils/apikeys';

import { checkCharOnDigit, valueToPhone } from '../../utils/lib';

import { Button } from '../../shared/Button';

// const mailClient = new SMTPClient({
//   user: 'sendingmails@mail.ru',
//   password: 'SjSeEguNzJ9p16R05ckP',
//   host: 'smtp.mail.ru',
//   ssl: true,
// });

export function FormFeedback() {
  const form = React.useRef(null);
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
    event?.preventDefault();
    notifySending();
    console.log('form.current:', form.current);

    if (form && form.current) {
      emailjs.sendForm(apiKeys.SERVICE_ID, apiKeys.TEMPLATE_ID, form.current, apiKeys.PUBLIC_KEY).then(
        (result) => {
          console.log('result:', result);
          console.log('result.text:', result.text);
          notifySended();
        },
        (error) => {
          console.log('error:', error);
          console.log('error.text:', error.text);
          notifyError(error.text);
        }
      );
    }

    // alert(JSON.stringify(data));
    setValuePhone('');
    reset();
  };

  const notifySending = () => toast('Сообщение отправляется ...', { type: 'info' });
  const notifySended = () => toast('Сообщение успешно отправлено!', { type: 'success', autoClose: false });
  const notifyError = (message: any) =>
    toast(`Ошибка отправки сообщения: ${message}`, { type: 'error', autoClose: false });

  const refErrorPhone: any = errors.inputTel ? errors.inputTel.ref : undefined;
  const isPhoneFull = refErrorPhone?.value.length === 18;

  return (
    <form className={styles.form} onSubmit={handleSubmit(formSubmit)} ref={form}>
      <label className={styles.formLabel}>
        Имя:
        <div className={styles.formLabelGroup + ' ' + styles.formLabelGroupInput}>
          <input
            {...register('user_name', {
              required: 'Поле обязательно к заполнению',
              minLength: {
                value: 2,
                message: 'Должно быть минимум 2 символа',
              },
            })}
            id='user_name'
            className={styles.formInput}
            type='text'
            name='user_name'
            placeholder='введите ваше имя'
          />
          {errors.user_name && (
            <div className={styles.formError}>⚠ {errors.user_name.message?.toString() || 'Error!'}</div>
          )}
        </div>
      </label>
      <label className={styles.formLabel}>
        Телефонный номер:
        <div className={styles.formLabelGroup + ' ' + styles.formLabelGroupInput}>
          <input
            {...register('user_tel', {
              required: 'Поле обязательно к заполнению',
              minLength: {
                value: 18,
                message: 'Заполните номер до конца',
              },
              // pattern: {
              //   value: /^\+[\d]{1}\ \([\d]{3}\)\ [\d]{3}-[\d]{2}-[\d]{2}$/,
              //   message: 'Укажите правильный номер',
              // },
            })}
            id='user_tel'
            className={styles.formInput}
            type='tel'
            name='user_tel'
            value={showValuePhone}
            placeholder='+7 (___) ___-__-__'
            onKeyPress={checkInputCharToDigit}
            onInput={formatInputToPhone}
            onPaste={formatInputToPhone}
          />
          {errors.user_tel && !isPhoneFull && (
            <div className={styles.formError}>⚠ {errors.user_tel.message?.toString() || 'Error!'}</div>
          )}
        </div>
      </label>
      <label className={styles.formLabel}>
        Сообщение:
        <div className={styles.formLabelGroup}>
          <textarea
            {...register('user_message', {
              required: 'Поле обязательно к заполнению',
              minLength: {
                value: 4,
                message: 'Минимум 4 символа',
              },
            })}
            id='user_message'
            name='user_message'
            className={styles.formTextArea}
            placeholder='введите ваше сообщение'
          />
          {errors.user_message && (
            <div className={styles.formError}>⚠ {errors.user_message.message?.toString() || 'Error!'}</div>
          )}
        </div>
      </label>
      <Button action='do' type='submit' title='Отправить сообщение' transmittedClass={styles.button}>
        Отправить
      </Button>
    </form>
  );
}
