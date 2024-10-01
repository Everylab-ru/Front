import { Controller, useFormContext } from 'react-hook-form'
import { useMemo } from 'react'

import styles from '@/pages/add-new-work-page/styles.module.scss'
import { WorkType } from '@/pages/add-new-work-page/schema.ts'
import { CustomSelect, OptionType } from '@/shared/ui/components/CustomSelect'
import { useAppSelector } from '@/app/hooks.ts'
import { selectorProductTypes } from '@/entities/store/slices/settings-slice'

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
// TODO: fix reset fiels

export const WorkSelects = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<WorkType>()

  const productTypes = useAppSelector(selectorProductTypes)

  const formattedProductTypes = useMemo(() => {
    return productTypes.map((type) => ({
      label: type.name,
      value: type.id.toString(),
    }))
  }, [productTypes])

  return (
    <div className={styles.selects}>
      <Controller
        name={'workType'}
        control={control}
        rules={{ required: true }}
        render={({ field }) => {
          return (
            <CustomSelect
              isDisabled={productTypes.length === 0}
              options={formattedProductTypes}
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
        render={({ field }) => {
          console.log(field)
          return (
            <CustomSelect
              options={mockFacData}
              placeholder={'Факультет'}
              changeOption={field.onChange}
              error={errors.faculty?.message ?? ''}
              {...field}
            />
          )
        }}
      />
    </div>
  )
}
