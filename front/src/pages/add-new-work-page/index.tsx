import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '@radix-ui/themes'
import toast from 'react-hot-toast'

import styles from './styles.module.scss'

import { workSchema, WorkType } from '@/pages/add-new-work-page/schema.ts'
import { WorkInputs } from '@/pages/add-new-work-page/components/WorkInputs'
import { WorkSelects } from '@/pages/add-new-work-page/components/WorkSelects'
import { WorkFile } from '@/pages/add-new-work-page/components/WorkFile'
import { useAppDispatch } from '@/app/hooks.ts'
import { userThunks } from '@/entities/store/slices/user-slice'

export const AddNewWorkPage = () => {
  const dispatch = useAppDispatch()

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

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods

  const onSubmit: SubmitHandler<WorkType> = async (data) => {
    try {
      await dispatch(
        userThunks.addProduct({
          header: data.title,
          description: data.description,
          price: Number(data.price),
          productTypeId: Number(data.workType),
        }),
      ).unwrap()

      toast.success('Работа успешно размещена')

      reset()
    } catch (e) {
      console.error(e)
      toast.error('Произошла ошибка, попробуйте ещё раз')
    }
  }

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <WorkInputs />
        <div className={styles.otherCharacteristics}>
          <WorkSelects />
          <WorkFile />
          <Button
            loading={isSubmitting}
            className={styles.button}
            variant={'soft'}
          >
            Разместить работу
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
