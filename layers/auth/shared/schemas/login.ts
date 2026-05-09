import {type InferType, object, string} from 'yup';

export const loginSchema = object({
  email: string()
    .required('Email обязателен')
    .email('Введите корректный email'),

  password: string()
    .required('Введите пароль'),
});

export type TLoginSchema = InferType<typeof loginSchema>;
