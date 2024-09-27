import * as yup from 'yup'

export const userInfoSchema = yup
  .object({
    email: yup
      .string()
      .required('Почта обязательна')
      .email('Некорректная почта'),
    username: yup.string().required('Никнейм обязателен'),
  })
  .required()

export type UserInfoType = yup.InferType<typeof userInfoSchema>
