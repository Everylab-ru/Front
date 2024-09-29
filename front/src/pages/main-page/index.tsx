import styles from './styles.module.scss'

import { NewProducts } from '@/pages/main-page/components/new-products'
import { Opportunities } from '@/pages/main-page/components/opportunities'

export const MainPage = () => {
  return (
    <div className={styles.page}>
      <Opportunities />
      <NewProducts />
    </div>
  )
}
