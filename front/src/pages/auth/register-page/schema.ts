import * as yup from 'yup';

export const registerSchema = yup
  .object({
    email: yup.string().required('Логин обязателен'),
    password: yup.string().required('Пароль обязателен').min(6, 'Пароль должен быть не короче 6 символов'),
    confirmPassword: yup
      .string()
      .required('Поле обязательно')
      .min(6, 'Пароль должен быть не короче 6 символов')
      .oneOf([yup.ref('password')], 'Пароли должны совпадать'),
  })
  .required();

export type RegisterType = yup.InferType<typeof registerSchema>;
