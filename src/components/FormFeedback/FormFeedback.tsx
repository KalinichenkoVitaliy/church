import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { send } from 'emailjs-com';
import apiKeys from '../../utils/apiMail';

import styles from './formFeedback.module.scss';

import { checkCharOnDigit, valueToPhone } from '../../utils/lib';

import { Button } from '../../shared/Button';

let isSending = false;

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
    event?.preventDefault();
    if (isSending) return;
    isSending = true;

    const toastIdSending = toast.loading('Сообщение отправляется ...');
    send(
      apiKeys.SERVICE_ID,
      apiKeys.TEMPLATE_ID,
      {
        from_name: 'supppochta@gmail.com',
        to_name: 'xpam-fastov-ne@mail.ru',
        message: data,
        reply_to: 'kalinichenkovv@mail.ru',
      },
      apiKeys.PUBLIC_KEY
    )
      .then((response) => {
        toast.dismiss(toastIdSending);
        toast('Сообщение успешно отправлено !', { type: 'success', autoClose: 15000 });
        setValuePhone('');
        reset();
        isSending = false;
      })
      .catch((error) => {
        toast.dismiss(toastIdSending);
        toast(`Ошибка отправки сообщения: ${error.text}`, { type: 'error', autoClose: 15000 });
        isSending = false;
      });
  };

  const refErrorPhone: any = errors.inputTel ? errors.inputTel.ref : undefined;
  const isPhoneFull = refErrorPhone?.value.length === 18;

  return (
    <form id='formFeedback' className={styles.form} onSubmit={handleSubmit(formSubmit)}>
      <label className={styles.formLabel}>
        Имя*:
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
        Телефонный номер*:
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
        E-mail*:
        <div className={styles.formLabelGroup + ' ' + styles.formLabelGroupInput}>
          <input
            {...register('user_mail', {
              required: 'Поле обязательно к заполнению',
              pattern: {
                // eslint-disable-next-line no-useless-escape
                value: /^[A-Za-z0-9_\-\.]+\@[A-Za-z0-9_\-\.]+\.[A-Za-z]{2,4}$/,
                message: 'Укажите верный e-mail',
              },
            })}
            id='user_mail'
            className={styles.formInput}
            type='text'
            name='user_mail'
            placeholder='укажите ваш e-mail'
          />
          {errors.user_mail && (
            <div className={styles.formError}>⚠ {errors.user_mail.message?.toString() || 'Error!'}</div>
          )}
        </div>
      </label>
      <label className={styles.formLabel}>
        Сообщение*:
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
