import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { loginSchema, LoginType } from './schema.ts'

import { AuthForm } from '@/pages/auth'
import { routes } from '@/app/routes.ts'

export const LoginPage = () => {
  const methods = useForm<LoginType>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  })

  const submitCallback = async (data: LoginType) => {
    console.log(data)
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
