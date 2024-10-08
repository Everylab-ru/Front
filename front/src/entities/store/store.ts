import { configureStore } from '@reduxjs/toolkit'

import { userReducer } from '@/entities/store/slices/user-slice'
import { everyLabApi } from '@/entities/api/every-lab-api.ts'
import { appReducer } from '@/entities/store/slices/app-slice'
import { settingsReducer } from '@/entities/store/slices/settings-slice'

export const store = configureStore({
  reducer: {
    [everyLabApi.reducerPath]: everyLabApi.reducer,
    app: appReducer,
    user: userReducer,
    settings: settingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(everyLabApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
