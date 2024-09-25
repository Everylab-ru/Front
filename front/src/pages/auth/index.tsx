import { Controller, SubmitHandler, useFormContext } from 'react-hook-form'
import { Button, Link, Text } from '@radix-ui/themes'
import { useNavigate } from 'react-router-dom'
import { SyntheticEvent, useState } from 'react'

import styles from './styles.module.scss'

import logoImage from '@/assets/images/logo.png'
import { RegisterType } from '@/pages/auth/register-page/schema.ts'
import { LoginType } from '@/pages/auth/login-page/schema.ts'
import backgroundImage from '@/assets/images/auth-background.webp'
import { CustomInput } from '@/shared/ui/components/CustomInput'
import { routes } from '@/app/routes.ts'
import OpenedEyeIcon from '@/assets/icons/opened-eye.svg'
import ClosedEyeIcon from '@/assets/icons/closed-eye.svg'

type AuthFormPropsType = {
  formTitle: string
  formType: 'login' | 'registration'
  submitCallback: (data: RegisterType | LoginType) => Promise<void>
  linkText: string
  linkPath: string
  buttonText: string
  isLoading: boolean
}

export const AuthForm = ({
  submitCallback,
  formType,
  formTitle,
  linkPath,
  linkText,
  buttonText,
  isLoading,
}: AuthFormPropsType) => {
  const navigate = useNavigate()

  const {
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useFormContext<LoginType & RegisterType>()

  const [isShowPass, setIsShowPass] = useState(false)
  const [isShowConfirmPass, setIsShowConfirmPass] = useState(false)

  const onSubmit: SubmitHandler<LoginType | RegisterType> = async (data) => {
    try {
      await submitCallback(data)

      reset()
    } catch (e) {
      console.log(e)
    }
  }

  const changeShowPass = (
    event: SyntheticEvent,
    passType: 'pass' | 'confirmPass',
  ) => {
    event.preventDefault()
    if (passType === 'pass') {
      setIsShowPass((prevState) => !prevState)
    } else {
      setIsShowConfirmPass((prevState) => !prevState)
    }
  }

  const onLinkClick = (event: SyntheticEvent) => {
    event.preventDefault()
    navigate(linkPath)
  }
  const onLogoClick = () => {
    navigate(routes.main)
  }

  return (
    <div className={styles.layout}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formContainer}>
              <div className={styles.logo} onClick={onLogoClick}>
                <img className={styles.logoImage} src={logoImage} alt="logo" />
              </div>
              <div className={styles.formContent}>
                <Text size={'5'}>{formTitle}</Text>
                <div className={styles.inputs}>
                  <Controller
                    name={'email'}
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <CustomInput
                        size={'3'}
                        error={errors.email?.message ?? ''}
                        placeholder="Почта"
                        type="email"
                        className={styles.input}
                        {...field}
                      />
                    )}
                  />
                  {formType === 'registration' && (
                    <Controller
                      name={'username'}
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <CustomInput
                          size={'3'}
                          error={errors.username?.message ?? ''}
                          placeholder="Имя пользователя"
                          type="text"
                          className={styles.input}
                          {...field}
                        />
                      )}
                    />
                  )}
                  <Controller
                    name={'password'}
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <CustomInput
                        size={'3'}
                        onEndIconClick={(e) => changeShowPass(e, 'pass')}
                        endIcon={
                          isShowPass ? <OpenedEyeIcon /> : <ClosedEyeIcon />
                        }
                        error={errors.password?.message ?? ''}
                        placeholder="Пароль"
                        type={isShowPass ? 'text' : 'password'}
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
                        <CustomInput
                          onEndIconClick={(e) =>
                            changeShowPass(e, 'confirmPass')
                          }
                          endIcon={
                            isShowConfirmPass ? (
                              <OpenedEyeIcon />
                            ) : (
                              <ClosedEyeIcon />
                            )
                          }
                          type={isShowConfirmPass ? 'text' : 'password'}
                          error={errors.confirmPassword?.message ?? ''}
                          size="3"
                          placeholder="Повторите пароль"
                          className={styles.input}
                          {...field}
                        />
                      )}
                    />
                  )}
                </div>
                <Button
                  loading={isLoading}
                  variant={'classic'}
                  size={'3'}
                  className={styles.button}
                >
                  {buttonText}
                </Button>
              </div>
              <div className={styles.linkContainer}>
                <Link
                  underline={'always'}
                  href={''}
                  onClick={onLinkClick}
                  size="3"
                >
                  {linkText}
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        className={styles.backgroundImageContainer}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
    </div>
  )
}
