import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { LoginPage } from '@/pages/auth/login-page';
import { RegisterPage } from '@/pages/auth/register-page';
import { routes } from '@/app/routes';
import { Layout } from '@/app/layout';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={routes.main} element={<Layout />}>
      <Route path={routes.login} element={<LoginPage />} />
      <Route path={routes.register} element={<RegisterPage />} />
    </Route>,
  ),
);
