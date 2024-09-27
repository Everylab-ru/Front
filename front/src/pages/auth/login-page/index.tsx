import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { loginSchema, LoginType } from './schema.ts'

import { AuthForm } from '@/pages/auth'
import { routes } from '@/app/routes.ts'
import { useAppDispatch } from '@/app/hooks.ts'
import { userThunks } from '@/entities/store/slices/user-slice'

export const LoginPage = () => {
  const dispatch = useAppDispatch()

  const methods = useForm<LoginType>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  })

  const submitCallback = async (data: LoginType) => {
    try {
      await dispatch(userThunks.loginUser(data))
        .unwrap()
        .then(() => {
          dispatch(userThunks.meUser()).unwrap()
        })

      methods.reset()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <FormProvider {...methods}>
      <AuthForm
        formTitle={'Вход в Everylab'}
        formType={'login'}
        submitCallback={submitCallback}
        linkPath={routes.register}
        linkText={'Нет аккаунта? Зарегистрироваться'}
        buttonText={'Войти'}
      />
    </FormProvider>
  )
}
