import { Avatar, Link } from '@radix-ui/themes'
import { useNavigate } from 'react-router-dom'
import { SyntheticEvent } from 'react'

import styles from './styles.module.scss'

import logo from '@/assets/images/logo.png'
import { useAppSelector } from '@/app/hooks.ts'
import { selectorIsLoggedIn } from '@/entities/store/slices/user-slice'
import { routes } from '@/app/routes.ts'

export const Header = () => {
  const navigate = useNavigate()

  const isLoggedIn = useAppSelector(selectorIsLoggedIn)

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
        <img
          onClick={onLogoClick}
          className={styles.logo}
          src={logo}
          alt="logo"
        />

        {!isLoggedIn && (
          <Link href={'#'} onClick={onLinkClick} size="3">
            Войти
          </Link>
        )}
        {isLoggedIn && <Avatar fallback="A" />}
      </div>
    </div>
  )
}
