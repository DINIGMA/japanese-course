import {type InferType, object, ref as yupRef, string} from 'yup';

export const registerSchema = object({
  name: string().required('Введите имя').min(3, 'Минимум 3 символа'),
  email: string().required('Email обязателен').email('Введите корректный email'),
  password: string().required('Введите пароль').min(8, 'Пароль должен быть минимум 8 символов'),
  confirmPassword: string()
    .required('Подтвердите пароль')
    .oneOf([yupRef('password')], 'Пароли не совпадают'),
  level: string(),
});

export type TRegisterSchema = InferType<typeof registerSchema>;