import { Avatar, Link, Text } from '@radix-ui/themes'
import { useNavigate } from 'react-router-dom'
import { SyntheticEvent } from 'react'

import styles from './styles.module.scss'

import logo from '@/assets/images/logo.png'
import { useAppSelector } from '@/app/hooks.ts'
import {
  selectorIsLoggedIn,
  selectorUser,
} from '@/entities/store/slices/user-slice'
import { routes } from '@/app/routes.ts'

export const Header = () => {
  const navigate = useNavigate()

  const isLoggedIn = useAppSelector(selectorIsLoggedIn)
  const user = useAppSelector(selectorUser)

  const onLinkClick = (event: SyntheticEvent) => {
    event.preventDefault()
    navigate(routes.login)
  }

  const onLogoClick = () => {
    navigate(routes.main)
  }

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <img
            onClick={onLogoClick}
            className={styles.logo}
            src={logo}
            alt="logo"
          />
          <Text size={'5'} color={'green'}>
            Купи за время деньги
          </Text>
        </div>

        {!isLoggedIn && (
          <Link href={'#'} onClick={onLinkClick} size="3">
            Войти
          </Link>
        )}
        {isLoggedIn && (
          <div className={styles.user}>
            <Text size={'2'}>{user.username ?? ''}</Text>
            <Avatar fallback={user.username?.[0] ?? 'U'} />
          </div>
        )}
      </div>
    </div>
  )
}
