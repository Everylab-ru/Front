import clsx from 'clsx'
import { Text, TextArea } from '@radix-ui/themes'
import type { TextAreaProps } from '@radix-ui/themes/src/components/text-area.tsx'

import styles from '@/shared/ui/components/CustomInput/styles.module.scss'

type CustomTextAreaPropsType = {
  error?: string
} & TextAreaProps

export const CustomTextArea = ({
  error,
  ...props
}: CustomTextAreaPropsType) => {
  return (
    <div className={clsx(styles.container, props.className)}>
      <TextArea {...props} />
      {error && (
        <Text color={'red'} size={'2'} className={styles.error}>
          {error}
        </Text>
      )}
    </div>
  )
}
