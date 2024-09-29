import { ReactNode, useEffect } from 'react'

import { useAppDispatch } from '@/app/hooks.ts'
import { userThunks } from '@/entities/store/slices/user-slice'
import { Api } from '@/entities/api/api.ts'
import { appActions } from '@/entities/store/slices/app-slice'

export const AppWrapper = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    console.log(Api.accessToken)
  }, [Api.accessToken])

  useEffect(() => {
    const initUser = async () => {
      try {
        await dispatch(userThunks.refreshUser()).unwrap()

        await dispatch(userThunks.meUser()).unwrap()

        dispatch(appActions.setIsAppInitialized(true))
      } catch (e: any) {
        console.log('user not authorized: ', e)
      }
    }

    initUser()
  }, [])

  return <>{children}</>
}
