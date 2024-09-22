import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'

import { routes } from '@/app/routes.ts'
import { AuthForm } from '@/pages/auth'
import {
  registerSchema,
  RegisterType,
} from '@/pages/auth/register-page/schema.ts'
import { LoginType } from '@/pages/auth/login-page/schema.ts'
import { useAppDispatch } from '@/app/hooks.ts'
import { userThunks } from '@/entities/store/slices/user-slice'

export const RegisterPage = () => {
  const methods = useForm<RegisterType>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useAppDispatch()

  const submitCallback = async (data: RegisterType | LoginType) => {
    try {
      setIsLoading(true)

      dispatch(
        userThunks.registerUser({ email: data.email, password: data.password }),
      ).unwrap()
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <FormProvider {...methods}>
      <AuthForm
        formTitle={'Регистрация в Everylab'}
        formType={'registration'}
        submitCallback={submitCallback}
        linkPath={routes.login}
        linkText={'Уже есть аккаунт? Войти'}
        buttonText={'Зарегистрироваться'}
        isLoading={isLoading}
      />
    </FormProvider>
  )
}
