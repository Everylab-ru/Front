import '@radix-ui/themes/styles.css'

import './index.css'
import { Provider } from 'react-redux'
import { Theme } from '@radix-ui/themes'
import { RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { Toaster } from 'react-hot-toast'

import { store } from '@/entities/store/store.ts'
import { router } from '@/app/router/router.tsx'
import { AppWrapper } from '@/app/AppWrapper.tsx'
import { Api } from '@/entities/api/api.ts'

Api.setupInterceptors()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Theme accentColor="grass" grayColor="sage">
        <AppWrapper>
          <Toaster />
          <RouterProvider router={router} />
        </AppWrapper>
      </Theme>
    </Provider>
  </StrictMode>,
)
