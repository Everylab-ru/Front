import styles from './styles.module.scss'

import Banner from '@/assets/images/banner1.png'

export const Slider = () => {
  return (
    <div className={styles.banner}>
      <img src={Banner} alt="" />
    </div>
  )
}
