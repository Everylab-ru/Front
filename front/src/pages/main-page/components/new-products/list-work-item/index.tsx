import { useMemo } from 'react'
import { Text } from '@radix-ui/themes'

import styles from './styles.module.scss'

import {
  WorkType,
  WorkVariantType,
} from '@/pages/main-page/constants/mock-works.ts'
import LabWorkIcon from '@/assets/3d-icons/lab-work.png'
import OutlineIcon from '@/assets/3d-icons/outline.png'
import { StarRating } from '@/shared/ui/components/StarRating'

type ListWorkItemPropsType = {
  work: WorkType
}

const getWorkPicture = (workType: WorkVariantType) => {
  switch (workType) {
    case 'labWork':
      return LabWorkIcon
    case 'outline':
      return OutlineIcon
    default:
      return LabWorkIcon
  }
}

export const ListWorkItem = ({ work }: ListWorkItemPropsType) => {
  const workPicture = useMemo(() => {
    return getWorkPicture(work.type)
  }, [work.type])

  return (
    <div className={styles.item}>
      <div className={styles.workPicture}>
        <img src={workPicture} alt="work picture" />
      </div>
      <div className={styles.workMeta}>
        <div className={styles.texts}>
          <Text title={work.title} size={'5'} className={styles.text}>
            {work.title}
          </Text>
          <Text
            title={`${work.university} | ${work.faculty}`}
            size={'4'}
            className={styles.text}
          >
            {work.university} | {work.faculty}
          </Text>
          <div className={styles.priceAndRating}>
            <Text size={'3'} color={'bronze'} className={styles.text}>
              {work.price} бел.руб.
            </Text>
            <StarRating value={work.rating ?? 0} />
          </div>
        </div>
        {/*<div className={styles.shadow} />*/}
      </div>
    </div>
  )
}
