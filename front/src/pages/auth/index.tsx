import { Controller, SubmitHandler, useFormContext } from 'react-hook-form';
import { Button, Link, Text, TextField } from '@radix-ui/themes';
import { useNavigate } from 'react-router-dom';
import { SyntheticEvent } from 'react';

import styles from './styles.module.scss';

import logoImage from '@/assets/images/logo.png';
import { RegisterType } from '@/pages/auth/register-page/schema.ts';
import { LoginType } from '@/pages/auth/login-page/schema.ts';
import backgroundImage from '@/assets/images/auth-background.webp';

type AuthFormPropsType = {
  formTitle: string;
  formType: 'login' | 'registration';
  submitCallback: (data: LoginType | RegisterType) => Promise<void>;
  linkText: string;
  linkPath: string;
  buttonText: string;
};

export const AuthForm = ({
  submitCallback,
  formType,
  formTitle,
  linkPath,
  linkText,
  buttonText,
}: AuthFormPropsType) => {
  const navigate = useNavigate();

  const {
    reset,
    handleSubmit,
    control,
    // formState: { errors, isSubmitting },
  } = useFormContext<LoginType & RegisterType>();

  const onSubmit: SubmitHandler<LoginType | RegisterType> = async (data) => {
    try {
      await submitCallback(data);

      reset();
    } catch (e) {
      console.log(e);
    }
  };

  const onLinkClick = (event: SyntheticEvent) => {
    event.preventDefault();
    navigate(linkPath);
  };

  return (
    <div className={styles.layout}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formContainer}>
              <img className={styles.logo} src={logoImage} alt="logo" />
              <div className={styles.formContent}>
                <Text size={'5'}>{formTitle}</Text>
                <div className={styles.inputs}>
                  <Controller
                    name={'email'}
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField.Root size={'3'} placeholder="Логин" className={styles.input} {...field} />
                    )}
                  />
                  <Controller
                    name={'password'}
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField.Root
                        type={'password'}
                        size={'3'}
                        placeholder="Пароль"
                        className={styles.input}
                        {...field}
                      />
                    )}
                  />
                  {formType === 'registration' && (
                    <Controller
                      name={'confirmPassword'}
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <TextField.Root
                          type={'password'}
                          size={'3'}
                          placeholder="Повторите пароль"
                          className={styles.input}
                          {...field}
                        />
                      )}
                    />
                  )}
                </div>
                <Button variant={'classic'} size={'3'} className={styles.button}>
                  {buttonText}
                </Button>
              </div>
              <Link className={styles.link} underline={'always'} href={''} onClick={onLinkClick} size="3">
                {linkText}
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.backgroundImageContainer} style={{ backgroundImage: `url(${backgroundImage})` }} />
    </div>
  );
};
