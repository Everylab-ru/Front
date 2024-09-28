import { Controller, useFormContext } from 'react-hook-form'

import styles from '@/pages/add-new-work-page/styles.module.scss'
import { WorkType } from '@/pages/add-new-work-page/schema.ts'
import { CustomSelect, OptionType } from '@/shared/ui/components/CustomSelect'

const selectOptions: OptionType[] = [
  {
    label: 'Лабораторная работа',
    value: 'labWork',
  },
  { label: 'Курсовой проект', value: 'courseProject' },
  { label: 'Дипломный проект', value: 'diplomaProject' },
  {
    label: 'Конспект',
    value: 'outline',
  },
]

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

export const WorkSelects = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<WorkType>()

  return (
    <div className={styles.selects}>
      <Controller
        name={'workType'}
        control={control}
        rules={{ required: true }}
        render={({ field }) => {
          return (
            <CustomSelect
              options={selectOptions}
              placeholder={'Тип работы'}
              changeOption={field.onChange}
              error={errors.workType?.message ?? ''}
              {...field}
            />
          )
        }}
      />
      <Controller
        name={'university'}
        control={control}
        rules={{ required: true }}
        render={({ field }) => {
          return (
            <CustomSelect
              options={mockUniData}
              placeholder={'Университет'}
              changeOption={field.onChange}
              error={errors.university?.message ?? ''}
              {...field}
            />
          )
        }}
      />
      <Controller
        name={'faculty'}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <CustomSelect
            options={mockFacData}
            placeholder={'Факультет'}
            changeOption={field.onChange}
            error={errors.faculty?.message ?? ''}
            {...field}
          />
        )}
      />
    </div>
  )
}
