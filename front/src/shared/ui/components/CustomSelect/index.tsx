import { Select, Text } from '@radix-ui/themes'

import styles from './styles.module.scss'

export type OptionType = {
  label: string
  value: string
}

type CustomSelectPropsType = {
  options: OptionType[]
  changeOption: (value: string) => void
  value: string
  placeholder: string
  isDisabled?: boolean
  error?: string
}

export const CustomSelect = ({
  options,
  changeOption,
  value,
  error,
  placeholder,
  isDisabled = false,
}: CustomSelectPropsType) => {
  return (
    <div className={styles.customSelect}>
      <Select.Root
        disabled={isDisabled}
        onValueChange={changeOption}
        size="3"
        defaultValue={value ?? ''}
      >
        <Select.Trigger placeholder={placeholder} />
        <Select.Content variant={'soft'} className={styles.content}>
          {options.map((option, index) => (
            <Select.Item key={index} value={option.value}>
              {option.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
      {error && (
        <Text color={'red'} size={'2'} className={styles.error}>
          {error}
        </Text>
      )}
    </div>
  )
}
