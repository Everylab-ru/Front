import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom'

import { LoginPage } from '@/pages/auth/login-page'
import { RegisterPage } from '@/pages/auth/register-page'
import { routes } from '@/app/routes.ts'
import { Layout } from '@/app/layout'
import { MainPage } from '@/pages/main-page'
import { NotFoundPage } from '@/pages/not-found-page'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={routes.root} element={<Layout />}>
      <Route path={routes.root} element={<Navigate to={routes.main} />} />
      <Route path={routes.notFound} element={<NotFoundPage />} />

      <Route path={routes.login} element={<LoginPage />} />
      <Route path={routes.register} element={<RegisterPage />} />

      <Route path={routes.main} element={<MainPage />} />
    </Route>,
  ),
)
