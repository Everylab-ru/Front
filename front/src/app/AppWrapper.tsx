import { ReactNode, useEffect } from 'react'

import { useAppDispatch } from '@/app/hooks.ts'
import { userThunks } from '@/entities/store/slices/user-slice'
import { appActions } from '@/entities/store/slices/app-slice'
import { settingsThunks } from '@/entities/store/slices/settings-slice'

export const AppWrapper = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const initUser = async () => {
      try {
        await dispatch(userThunks.refreshUser()).unwrap()

        await dispatch(userThunks.meUser()).unwrap()

        dispatch(settingsThunks.fetchProductTypes()).unwrap()
      } catch (e: any) {
        console.log('user not authorized: ', e)
      } finally {
        dispatch(appActions.setIsAppInitialized(true))
      }
    }

    initUser()
  }, [])

  return <>{children}</>
}
