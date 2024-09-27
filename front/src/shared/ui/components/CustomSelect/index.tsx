import { Select } from '@radix-ui/themes'

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
}

export const CustomSelect = ({
  options,
  changeOption,
  value,
  placeholder,
  isDisabled = false,
}: CustomSelectPropsType) => {
  /*
  const [searchValue, setSearchValue] = useState('')

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value)
  }

  const filteredOptions = useMemo(() => {
    if (!searchValue) {
      return options
    }

    return options.filter((option) =>
      option.label.toLowerCase().includes(searchValue.toLowerCase()),
    )
  }, [searchValue])
*/

  return (
    <Select.Root
      disabled={isDisabled}
      onValueChange={changeOption}
      size="3"
      defaultValue={value ?? ''}
    >
      <Select.Trigger placeholder={placeholder} />
      <Select.Content className={styles.content}>
        {/*        <CustomInput
          className={styles.input}
          value={searchValue}
          onChange={onChangeValue}
        />*/}
        {options.map((option, index) => (
          <Select.Item key={index} value={option.value}>
            {option.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  )
}
