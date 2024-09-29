import { Text } from '@radix-ui/themes'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

import styles from './styles.module.scss'

import { opportunities } from '@/pages/main-page/constants/opportunities.ts'
import { OpportunityItem } from '@/pages/main-page/components/opportunities/opportunity-item'

export const Opportunities = () => {
  const navigate = useNavigate()

  const onOpportunityClick = (link?: string) => {
    if (link) {
      navigate(link)
    } else {
      toast('В разработке', {
        icon: '⚠️',
      })
    }
  }

  return (
    <div className={styles.opportunitiesContainer}>
      <div className={styles.title}>
        <Text size={'6'}>Возможности</Text>
      </div>
      <div className={styles.opportunities}>
        {opportunities.map((item) => (
          <OpportunityItem
            onClick={() => onOpportunityClick(item.link)}
            opportunity={item}
          />
        ))}
      </div>
    </div>
  )
}
