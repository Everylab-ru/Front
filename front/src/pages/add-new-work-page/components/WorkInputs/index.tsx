import { Text } from '@radix-ui/themes'
import { Controller, useFormContext } from 'react-hook-form'

import styles from '@/pages/add-new-work-page/styles.module.scss'
import { CustomInput } from '@/shared/ui/components/CustomInput'
import { CustomTextArea } from '@/shared/ui/components/CustomTextArea'
import { WorkType } from '@/pages/add-new-work-page/schema.ts'
import {
  descriptionExamples,
  titleExamples,
} from '@/pages/add-new-work-page/constants'

const randomDescriptionExample =
  descriptionExamples[Math.floor(Math.random() * descriptionExamples.length)]

const randomTitleExample =
  titleExamples[Math.floor(Math.random() * titleExamples.length)]

export const WorkInputs = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<WorkType>()

  return (
    <div className={styles.titleDescriptionPrice}>
      <div className={styles.block}>
        <Text size={'6'}>Название работы</Text>
        <Controller
          name={'title'}
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <CustomInput
              error={errors.title?.message ?? ''}
              placeholder={`Введите название, например: ${randomTitleExample}`}
              {...field}
            />
          )}
        />
      </div>
      <div className={styles.block}>
        <Text size={'6'}>Описание работы</Text>
        <Controller
          name={'description'}
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <CustomTextArea
              rows={10}
              placeholder={`Введите описание, например: ${randomDescriptionExample}`}
              error={errors.description?.message ?? ''}
              {...field}
            />
          )}
        />
      </div>
      <div className={styles.block}>
        <Text size={'6'}>Стоимость работы</Text>
        <div className={styles.priceInputContainer}>
          <Controller
            name={'price'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <CustomInput
                type={'number'}
                className={styles.priceInput}
                placeholder={'Введите стоимость...'}
                error={errors.price?.message ?? ''}
                {...field}
              />
            )}
          />
          <Text>бел. руб.</Text>
        </div>
      </div>
    </div>
  )
}
