import { Button, IconButton, Link, Text } from '@radix-ui/themes'
import { useNavigate } from 'react-router-dom'
import { ChangeEvent, SyntheticEvent, useState } from 'react'

import styles from './styles.module.scss'

import logo from '@/assets/images/logo.png'
import { useAppSelector } from '@/app/hooks.ts'
import { selectorIsLoggedIn } from '@/entities/store/slices/user-slice'
import { routes } from '@/app/routes.ts'
import CatalogSVG from '@/assets/icons/catalog.svg?react'
import SearchSVG from '@/assets/icons/search.svg?react'
import CartSVG from '@/assets/icons/shopping-cart.svg?react'
import { CustomInput } from '@/shared/ui/components/CustomInput'
import { UserCard } from '@/app/layout/header/components/user-card'

export const Header = () => {
  const navigate = useNavigate()

  const isLoggedIn = useAppSelector(selectorIsLoggedIn)

  const [searchValue, setSearchValue] = useState('')

  const onLinkClick = (event: SyntheticEvent) => {
    event.preventDefault()
    navigate(routes.login)
  }

  const onLogoClick = () => navigate(routes.main)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value)
  }

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContentTop}>
        <div className={styles.logoContainer}>
          <img
            onClick={onLogoClick}
            className={styles.logo}
            src={logo}
            alt="logo"
          />
          <Text size={'5'} color={'green'}>
            Купи за деньги время!
          </Text>
        </div>
        {!isLoggedIn && (
          <Link href={'#'} onClick={onLinkClick} size="3">
            Войти
          </Link>
        )}
        {isLoggedIn && <UserCard />}
      </div>
      <div className={styles.divider}></div>
      <div className={styles.headerContentBottom}>
        <Button>
          <CatalogSVG />
          Каталог
        </Button>
        <CustomInput
          className={styles.searchInput}
          placeholder={'Поиск в everylab...'}
          startIcon={<SearchSVG />}
          value={searchValue}
          onChange={onChangeHandler}
        />
        <IconButton>
          <CartSVG />
        </IconButton>
      </div>
    </div>
  )
}
