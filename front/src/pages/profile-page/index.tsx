import { Button } from '@radix-ui/themes'
import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import styles from './styles.module.scss'

import {
  selectorIsLoggedIn,
  selectorUser,
  userThunks,
} from '@/entities/store/slices/user-slice'
import { useAppDispatch, useAppSelector } from '@/app/hooks.ts'
import { UserInfo } from '@/pages/profile-page/components/user-info'
import { Recommendations } from '@/pages/profile-page/components/recommendations'
import { Stats } from '@/pages/profile-page/components/stats'
import { routes } from '@/app/routes.ts'

export const ProfilePage = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const user = useAppSelector(selectorUser)
  const isLoggedId = useAppSelector(selectorIsLoggedIn)

  const [isLoading, setIsLoading] = useState(false)

  const onLogoutClick = async () => {
    try {
      setIsLoading(true)
      await dispatch(userThunks.logoutUser()).unwrap()

      navigate(routes.main)
    } catch (e) {
      console.error(e)
      setIsLoading(false)
    }
  }

  if (!isLoggedId) {
    return <Navigate to={routes.main} />
  }

  return (
    <div className={styles.page}>
      <div className={styles.userInfoAndStats}>
        <UserInfo user={user} />
        <Stats />
      </div>
      <Recommendations />
      <div className={styles.logoutButtonContainer}>
        <Button
          loading={isLoading}
          onClick={onLogoutClick}
          className={styles.btn}
          variant={'soft'}
          color={'tomato'}
        >
          Выйти из аккаунта
        </Button>
      </div>
    </div>
  )
}
