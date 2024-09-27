import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { routes } from '@/app/routes.ts'
import { AuthForm } from '@/pages/auth'
import {
  registerSchema,
  RegisterType,
} from '@/pages/auth/register-page/schema.ts'
import { useAppDispatch } from '@/app/hooks.ts'
import { userThunks } from '@/entities/store/slices/user-slice'
import { LoginType } from '@/pages/auth/login-page/schema.ts'

export const RegisterPage = () => {
  const methods = useForm<RegisterType>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      username: '',
    },
    mode: 'onSubmit',
  })

  const dispatch = useAppDispatch()

  const submitCallback = async (data: RegisterType | LoginType) => {
    try {
      if ('username' in data) {
        await dispatch(
          userThunks.registerUser({
            email: data.email,
            password: data.password,
            username: data.username,
          }),
        )
          .unwrap()
          .then(() => {
            dispatch(userThunks.meUser()).unwrap()
          })

        methods.reset()
      }
    } catch (e) {
      console.error(e)
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
      />
    </FormProvider>
  )
}
