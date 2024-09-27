import { Avatar, Text } from '@radix-ui/themes'
import { useNavigate } from 'react-router-dom'

import styles from './styles.module.scss'

import { useAppSelector } from '@/app/hooks.ts'
import { selectorUser } from '@/entities/store/slices/user-slice'
import { routes } from '@/app/routes.ts'

export const UserCard = () => {
  const navigate = useNavigate()

  const user = useAppSelector(selectorUser)

  const onUserInfoClick = () => navigate(routes.profile)

  return (
    <div className={styles.user} onClick={onUserInfoClick}>
      <div className={styles.userCreds}>
        <Text size={'2'}>{user.username ?? ''}</Text>
        <Text color={'gray'} className={styles.email} size={'1'}>
          {user.email ?? ''}
        </Text>
      </div>
      <Avatar fallback={user.username?.[0] ?? 'U'} />
    </div>
  )
}
