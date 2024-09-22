import * as yup from 'yup'

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .required('Почта обязательна')
      .email('Некорректная почта'),
    password: yup
      .string()
      .required('Пароль обязателен')
      .min(6, 'Пароль должен быть не короче 6 символов'),
  })
  .required()

export type LoginType = yup.InferType<typeof loginSchema>
