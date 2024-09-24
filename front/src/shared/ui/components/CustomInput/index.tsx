import { IconButton, Text, TextField } from '@radix-ui/themes'
import type { RootProps } from '@radix-ui/themes/src/components/text-field.tsx'
import { ReactNode, SyntheticEvent } from 'react'

import styles from './styles.module.scss'

type CustomInputPropsType = {
  error?: string
  onEndIconClick?: (event: SyntheticEvent) => void
  endIcon?: ReactNode
} & RootProps

export const CustomInput = ({
  error,
  endIcon,
  onEndIconClick,
  ...props
}: CustomInputPropsType) => {
  return (
    <div className={styles.container}>
      <TextField.Root {...props}>
        {endIcon && (
          <TextField.Slot side={'right'}>
            <IconButton onClick={onEndIconClick} size="1" variant="ghost">
              {endIcon}
            </IconButton>
          </TextField.Slot>
        )}
      </TextField.Root>
      {error && (
        <Text color={'red'} size={'2'} className={styles.error}>
          {error}
        </Text>
      )}
    </div>
  )
}
