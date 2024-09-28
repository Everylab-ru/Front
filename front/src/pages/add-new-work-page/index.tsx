import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '@radix-ui/themes'

import styles from './styles.module.scss'

import { workSchema, WorkType } from '@/pages/add-new-work-page/schema.ts'
import { WorkInputs } from '@/pages/add-new-work-page/components/WorkInputs'
import { WorkSelects } from '@/pages/add-new-work-page/components/WorkSelects'
import { WorkFile } from '@/pages/add-new-work-page/components/WorkFile'

export const AddNewWorkPage = () => {
  const methods = useForm<WorkType>({
    resolver: yupResolver(workSchema),
    defaultValues: {
      title: '',
      description: '',
      price: '',
      workType: '',
      faculty: '',
      university: '',
      file: undefined,
    },
    mode: 'onSubmit',
  })

  const { handleSubmit } = methods

  const onSubmit: SubmitHandler<WorkType> = async (data) => {
    console.log(data)
  }

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <WorkInputs />
        <div className={styles.otherCharacteristics}>
          <WorkSelects />
          <WorkFile />
          <Button className={styles.button} variant={'soft'}>
            Разместить работу
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
