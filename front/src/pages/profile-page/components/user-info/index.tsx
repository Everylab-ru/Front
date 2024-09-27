import { Button, Text } from '@radix-ui/themes'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMemo } from 'react'

import styles from './styles.module.scss'

import { CustomInput } from '@/shared/ui/components/CustomInput'
import { userInfoSchema, UserInfoType } from '@/pages/profile-page/schema.ts'
import { UserType } from '@/entities/store/slices/user-slice/types.ts'

type UserInfoPropsType = {
  user: UserType
}

export const UserInfo = ({ user }: UserInfoPropsType) => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<UserInfoType>({
    resolver: yupResolver(userInfoSchema),
    defaultValues: {
      email: user.email,
      username: user.username,
    },
    mode: 'onSubmit',
  })

  const email = watch('email')
  const username = watch('username')

  const isCanSave = useMemo(() => {
    return email !== user.email || username !== user.username
  }, [email, username])

  const onSubmit: SubmitHandler<UserInfoType> = async (data) => {
    try {
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={styles.userInfo}>
      <Text size={'6'}>Информация</Text>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.infoFields}>
          <div className={styles.field}>
            <Text size={'4'}>Почта:</Text>{' '}
            <Controller
              name={'email'}
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <CustomInput
                  error={errors.email?.message ?? ''}
                  className={styles.input}
                  {...field}
                />
              )}
            />
          </div>
          <div className={styles.field}>
            <Text size={'4'}>Никнейм:</Text>{' '}
            <Controller
              name={'username'}
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <CustomInput
                  error={errors.username?.message ?? ''}
                  className={styles.input}
                  {...field}
                />
              )}
            />
          </div>
        </div>
        <Button disabled={!isCanSave}>Сохранить</Button>
      </form>
    </div>
  )
}
