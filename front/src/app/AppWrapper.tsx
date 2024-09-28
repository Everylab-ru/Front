import { ReactNode, useEffect } from 'react'

import { useAppDispatch } from '@/app/hooks.ts'
import { userThunks } from '@/entities/store/slices/user-slice'

export const AppWrapper = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const initUser = async () => {
      try {
        await dispatch(userThunks.meUser()).unwrap()
      } catch (e: any) {
        console.log('error', e)
        if (e.response?.status === 401) {
          await dispatch(userThunks.refreshUser()).unwrap()

          await dispatch(userThunks.meUser()).unwrap()
        }
      }
    }

    initUser()
  }, [])

  return <>{children}</>
}
