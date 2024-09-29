import { Button, Text } from '@radix-ui/themes'
import { useNavigate } from 'react-router-dom'

import styles from './styles.module.scss'

import { routes } from '@/app/routes.ts'

export const NotLoggedInPage = () => {
  const navigate = useNavigate()

  const onLoginClick = () => {
    navigate(routes.login)
  }

  return (
    <div className={styles.page}>
      <Text>Для действий на этой странице вам необходимо войти в аккаунт</Text>
      <Button onClick={onLoginClick}>Войти в аккаунт</Button>
    </div>
  )
}
