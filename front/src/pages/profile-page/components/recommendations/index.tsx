import { Callout, Text } from '@radix-ui/themes'
import { useState } from 'react'

import styles from './styles.module.scss'

import InfoSVG from '@/assets/icons/info.svg?react'
import { CustomSelect, OptionType } from '@/shared/ui/components/CustomSelect'

const mockUniData: OptionType[] = [
  {
    label: 'Белорусский Государственный Технический Университет (БНТУ)',
    value: 'bntu',
  },
  {
    label: 'Минский Государственный Лингвистический Университет (МГЛУ)',
    value: 'mdlu',
  },
  { label: 'Белорусский Государственный Университет (БГУ)', value: 'bgu' },
  {
    label: 'Белорусский Государственный Технологический Университет (БГТУ)',
    value: 'bgtu',
  },
]
const mockFacData: OptionType[] = [
  {
    label: 'Факультет Информационных Технологий и Робототехники (ФИТР)',
    value: 'fitr',
  },
  { label: 'Энергетический факультет', value: 'ef' },
  {
    label: 'Факультет Маркетинга Менеджемента и Предпринимательства (ФММП)',
    value: 'ffpm',
  },
  { label: 'Автотракторный факультет (АТФ)', value: 'atf' },
]

export const Recommendations = () => {
  const [currentUni, setCurrentUni] = useState('')
  const [currentFac, setCurrentFac] = useState('')

  const onChangeUniHandler = (value: string) => {
    setCurrentUni(value)
  }
  const onChangeFacHandler = (value: string) => {
    setCurrentFac(value)
  }

  return (
    <div className={styles.recommendations}>
      <div className={styles.title}>
        <Text size={'6'}>Выберите рекомендации</Text>
        <Callout.Root size="1">
          <Callout.Icon>
            <InfoSVG />
          </Callout.Icon>
          <Callout.Text>
            Рекомендации помогут нам узнать ваш университет и факультет для
            того, чтобы показывать работы из этого учебного заведения на первых
            позициях в поиске.
          </Callout.Text>
        </Callout.Root>
        <Text color={'gray'}></Text>
      </div>
      <div className={styles.infoFields}>
        <CustomSelect
          options={mockUniData.sort((a, b) => a.label.localeCompare(b.label))}
          changeOption={onChangeUniHandler}
          value={currentUni}
          placeholder={'Выберите университет'}
        />
        <CustomSelect
          options={mockFacData.sort((a, b) => a.label.localeCompare(b.label))}
          changeOption={onChangeFacHandler}
          value={currentFac}
          placeholder={'Выберите факультет'}
          isDisabled={!currentUni}
        />
      </div>
    </div>
  )
}
