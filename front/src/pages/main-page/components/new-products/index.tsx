import { Text } from '@radix-ui/themes'

import styles from './styles.module.scss'

import { works } from '@/pages/main-page/constants/mock-works.ts'
import { ListWorkItem } from '@/pages/main-page/components/new-products/list-work-item'

export const NewProducts = () => {
  return (
    <div className={styles.highlyRated}>
      <div className={styles.title}>
        <Text size={'6'}>Новинки</Text>
      </div>
      <div className={styles.list}>
        {works.map((work) => (
          <ListWorkItem key={work.id} work={work} />
        ))}
      </div>
    </div>
  )
}
