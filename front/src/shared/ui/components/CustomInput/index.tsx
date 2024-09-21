import { Text, TextField } from '@radix-ui/themes'
import type { RootProps } from '@radix-ui/themes/src/components/text-field.tsx'

import styles from './styles.module.scss'

type CustomInputPropsType = {
  error?: string
} & RootProps

export const CustomInput = ({ error, ...props }: CustomInputPropsType) => {
  return (
    <div className={styles.container}>
      <TextField.Root {...props} />
      {error && (
        <Text color={'red'} size={'2'} className={styles.error}>
          {error}
        </Text>
      )}
    </div>
  )
}
