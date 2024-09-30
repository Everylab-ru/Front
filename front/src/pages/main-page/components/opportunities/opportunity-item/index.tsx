import { Button, Text } from '@radix-ui/themes'

import styles from './styles.module.scss'

import DiplomaIcon from '@/assets/3d-icons/diploma.png'
import { OpportunityType } from '@/pages/main-page/constants/opportunities.ts'
type OpportunityItemPropsType = {
  opportunity: OpportunityType
  onClick?: () => void
}

export const OpportunityItem = ({
  opportunity,
  onClick,
}: OpportunityItemPropsType) => {
  return (
    <div className={styles.item}>
      <div className={styles.icon}>
        <img src={DiplomaIcon} alt="" />
      </div>
      <Text>{opportunity.description}</Text>
      <Button onClick={onClick} color={'bronze'} variant={'outline'}>
        {opportunity.title}
      </Button>
    </div>
  )
}
