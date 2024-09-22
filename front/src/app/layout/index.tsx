import { Outlet, useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import clsx from 'clsx'

import styles from './styles.module.scss'

import { Header } from '@/app/layout/header'
import { routesWithoutHeader } from '@/app/routes.ts'

export const Layout = () => {
  const location = useLocation()

  const isHideHeader = useMemo(() => {
    return routesWithoutHeader.includes(location.pathname)
  }, [location])

  const contentStyles = clsx(styles.contentContainer, {
    [styles.maxWidth]: !isHideHeader,
  })

  return (
    <div>
      {!isHideHeader && <Header />}
      <div className={contentStyles}>
        <Outlet />
      </div>
    </div>
  )
}
