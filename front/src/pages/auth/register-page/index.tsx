import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { routes } from '@/app/routes.ts';
import { AuthForm } from '@/pages/auth';
import { registerSchema, RegisterType } from '@/pages/auth/register-page/schema.ts';
import { LoginType } from '@/pages/auth/login-page/schema.ts';

export const RegisterPage = () => {
  const methods = useForm<RegisterType>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const submitCallback = async (data: RegisterType | LoginType) => {
    console.log(data);
  };

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
  );
};
