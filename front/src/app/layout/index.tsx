import { Outlet, useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import clsx from 'clsx'
import { Text } from '@radix-ui/themes'

import styles from './styles.module.scss'

import { Header } from '@/app/layout/header'
import { routesWithoutHeader } from '@/app/routes.ts'
import { useAppSelector } from '@/app/hooks.ts'
import { selectorIsAppInitialized } from '@/entities/store/slices/app-slice'

export const Layout = () => {
  const location = useLocation()

  const isAppInitialized = useAppSelector(selectorIsAppInitialized)

  const isHideHeader = useMemo(() => {
    return routesWithoutHeader.includes(location.pathname)
  }, [location])

  const contentStyles = clsx(styles.contentContainer, {
    [styles.maxWidth]: !isHideHeader,
    [styles.withAuthPages]: isHideHeader,
  })

  return (
    <>
      {!isAppInitialized && (
        <div className={styles.initializing}>
          <Spinner />
        </div>
      )}
      {isAppInitialized && (
        <>
          {!isHideHeader && <Header />}
          <div className={contentStyles}>
            {isAppInitialized && <Outlet />}
            {!isAppInitialized && <div>loading</div>}
          </div>
        </>
      )}
    </>
  )
}

const Spinner = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
      <Text size={'3'}>Загружаем работы</Text>
    </div>
  )
}
