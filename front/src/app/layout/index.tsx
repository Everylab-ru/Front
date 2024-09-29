import { Outlet, useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import clsx from 'clsx'

import styles from './styles.module.scss'

import { Header } from '@/app/layout/header'
import { routesWithoutHeader } from '@/app/routes.ts'
import { useAppSelector } from '@/app/hooks.ts'
import { selectorIsAppInitialized } from '@/entities/store/slices/app-slice'

export const Layout = () => {
  const location = useLocation()

  const isAppInitialized = useAppSelector(selectorIsAppInitialized)

  console.log(isAppInitialized)

  const isHideHeader = useMemo(() => {
    return routesWithoutHeader.includes(location.pathname)
  }, [location])

  const contentStyles = clsx(styles.contentContainer, {
    [styles.maxWidth]: !isHideHeader,
    [styles.withAuthPages]: isHideHeader,
  })

  return (
    <>
      {!isHideHeader && <Header />}
      <div className={contentStyles}>
        {isAppInitialized && <Outlet />}
        {!isAppInitialized && <div>loading</div>}
      </div>
    </>
  )
}
