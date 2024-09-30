import styles from './styles.module.scss'

import { NewProducts } from '@/pages/main-page/components/new-products'
import { Slider } from '@/pages/main-page/components/slider'

export const MainPage = () => {
  return (
    <div className={styles.page}>
      <Slider />
      <NewProducts />
    </div>
  )
}
