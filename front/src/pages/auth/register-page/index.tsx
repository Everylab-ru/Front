import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

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
  const navigate = useNavigate()

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

        toast.success('Вы успешно зарегистрировались')

        navigate(routes.main)

        methods.reset()
      }
    } catch (e) {
      console.error(e)

      toast.error('Что-то пошло не так')
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
