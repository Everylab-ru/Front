import { DataList, Text } from '@radix-ui/themes'

import styles from './styles.module.scss'

import { StarRating } from '@/shared/ui/components/StarRating'

export const Stats = () => {
  const rating = 3.5

  return (
    <div className={styles.stats}>
      <Text size={'6'}>Статистика</Text>
      <DataList.Root>
        <DataList.Item align="center">
          <DataList.Label>Проданных работ</DataList.Label>
          <DataList.Value>1203</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label>Купленных работ</DataList.Label>
          <DataList.Value>43</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label>Рейтинг продавца</DataList.Label>
          <DataList.Value className={styles.rating}>
            <StarRating value={rating} />
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label>Отзывов</DataList.Label>
          <DataList.Value>635</DataList.Value>
        </DataList.Item>
      </DataList.Root>
    </div>
  )
}
