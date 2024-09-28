import { Controller, useFormContext } from 'react-hook-form'
import { HoverCard, Text } from '@radix-ui/themes'

import styles from '@/pages/add-new-work-page/styles.module.scss'
import { WorkType } from '@/pages/add-new-work-page/schema.ts'
import { FileInput } from '@/shared/ui/components/FileInput'
import InfoSVG from '@/assets/icons/info.svg?react'

export const WorkFile = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<WorkType>()

  return (
    <>
      <Controller
        name={'file'}
        control={control}
        rules={{ required: true }}
        render={({ field }) => {
          const onFileSelectedHandler = (file: File) => {
            field.onChange(file)
          }

          return (
            <FileInput
              trigger={
                <div className={styles.fileContainer}>
                  <div className={styles.file}>
                    <div className={styles.info}>
                      <HoverCard.Root>
                        <HoverCard.Trigger>
                          <div>
                            <InfoSVG />
                          </div>
                        </HoverCard.Trigger>
                        <HoverCard.Content maxWidth="300px">
                          Файл не должен быть размером более 300МБ
                        </HoverCard.Content>
                      </HoverCard.Root>
                    </div>
                    <div className={styles.title}>Выберите файл</div>
                  </div>
                  {!errors.file?.message && field.value && (
                    <Text size={'2'} className={styles.caption}>
                      {field.value.name}
                    </Text>
                  )}
                  {errors.file?.message && (
                    <Text size={'2'} color={'red'} className={styles.caption}>
                      {errors.file?.message}
                    </Text>
                  )}
                </div>
              }
              onFileSelected={onFileSelectedHandler}
            />
          )
        }}
      />
    </>
  )
}
