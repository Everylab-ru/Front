import { Navigate, Outlet } from 'react-router-dom'

import { useAppSelector } from '@/app/hooks.ts'
import { selectorIsLoggedIn } from '@/entities/store/slices/user-slice'
import { routes } from '@/app/routes.ts'

export const PrivateRoutes = () => {
  const isLoggedIn = useAppSelector(selectorIsLoggedIn)

  console.log(isLoggedIn)

  return isLoggedIn ? <Outlet /> : <Navigate to={routes.login} />
}
