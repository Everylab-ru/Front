import styles from './styles.module.scss'

import StarFilledSVG from '@/assets/icons/star-filled.svg?react'
import StarNotFilledSVG from '@/assets/icons/star-not-filled.svg?react'

type StarRatingPropsType = {
  value: number
}

export const StarRating = ({ value }: StarRatingPropsType) => {
  return (
    <div className={styles.rating}>
      {value > 0 ? <StarFilledSVG color={'gold'} /> : <StarNotFilledSVG />}
      {value > 1 ? <StarFilledSVG color={'gold'} /> : <StarNotFilledSVG />}
      {value > 2 ? <StarFilledSVG color={'gold'} /> : <StarNotFilledSVG />}
      {value > 3 ? <StarFilledSVG color={'gold'} /> : <StarNotFilledSVG />}
      {value > 4 ? <StarFilledSVG color={'gold'} /> : <StarNotFilledSVG />}
    </div>
  )
}
