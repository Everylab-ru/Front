import { Outlet } from 'react-router-dom'

import { useAppSelector } from '@/app/hooks.ts'
import { selectorIsLoggedIn } from '@/entities/store/slices/user-slice'
import { NotLoggedInPage } from '@/pages/not-loggedIn-page'

export const PrivateRoutes = () => {
  const isLoggedIn = useAppSelector(selectorIsLoggedIn)

  return isLoggedIn ? <Outlet /> : <NotLoggedInPage />
}
