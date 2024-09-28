import * as yup from 'yup'
import { mixed } from 'yup'

export const workSchema = yup
  .object({
    title: yup.string().required('Название обязательно'),
    description: yup.string().required('Описание обязательно'),
    price: yup.string().required('Стоимость обязательна'),
    workType: yup.string().required('Тип работы обязателен'),
    university: yup.string().required('Университет обязателен'),
    faculty: yup.string().required('Факультет обязателен'),
    file: mixed<File>()
      .required('Файл обязателен')
      .test('is-valid-size', 'Максимальный размер файла 300МБ', (value) => {
        return value ? value.size <= 300000000 : false
      }),
    /*.test(
        'is-valid-type',
        'Неверный формат файла. Допустимы только PDF или DOCX',
        (value) => {
          return value
            ? [
                'application/pdf',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
              ].includes(value.type)
            : false
        },
      ),*/
  })
  .required()

export type WorkType = yup.InferType<typeof workSchema>
