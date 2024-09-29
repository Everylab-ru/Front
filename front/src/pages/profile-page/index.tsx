import { Button } from '@radix-ui/themes'
import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import toast from 'react-hot-toast'

import styles from './styles.module.scss'

import StudentIcon from '@/assets/3d-icons/student.png'
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
      toast.success('Вы вышли из аккаунта')
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
        <div className={styles.studentIcon}>
          <img src={StudentIcon} alt={'student'} />
        </div>
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
