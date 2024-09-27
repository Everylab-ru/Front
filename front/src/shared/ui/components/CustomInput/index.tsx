import { IconButton, Text, TextField } from '@radix-ui/themes'
import type { RootProps } from '@radix-ui/themes/src/components/text-field.tsx'
import { ReactNode, SyntheticEvent } from 'react'
import clsx from 'clsx'

import styles from './styles.module.scss'

type CustomInputPropsType = {
  error?: string
  onEndIconClick?: (event: SyntheticEvent) => void
  endIcon?: ReactNode
  onStartIconClick?: (event: SyntheticEvent) => void
  startIcon?: ReactNode
} & RootProps

export const CustomInput = ({
  error,
  endIcon,
  onEndIconClick,
  onStartIconClick,
  startIcon,
  ...props
}: CustomInputPropsType) => {
  return (
    <div className={clsx(styles.container, props.className)}>
      <TextField.Root value={error ? error : props.value} {...props}>
        {startIcon && (
          <TextField.Slot side={'left'}>
            <IconButton onClick={onStartIconClick} size="1" variant="ghost">
              {startIcon}
            </IconButton>
          </TextField.Slot>
        )}
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
