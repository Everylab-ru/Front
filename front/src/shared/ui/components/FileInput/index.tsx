import { ChangeEvent, HTMLProps, ReactNode, useCallback, useRef } from 'react'

import styles from './styles.module.scss'

type FileInputPropsType = {
  disabled?: boolean
  trigger: ReactNode
  onFileSelected: (file: File) => void
  disableUpload?: boolean
} & HTMLProps<HTMLDivElement>

export const FileInput = ({
  trigger,
  disabled = false,
  onFileSelected,
  disableUpload,
  ...rest
}: FileInputPropsType) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleUploadClick = () => inputRef.current?.click()

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files && e.target.files[0]
      if (selectedFile) {
        onFileSelected(selectedFile)
      }
    },
    [onFileSelected],
  )
  if (disableUpload) {
    return <div {...rest}>{trigger}</div>
  }

  return (
    <>
      <div
        {...rest}
        onClick={() => {
          handleUploadClick()
        }}
        className={disabled ? styles.disabled : ''}
      >
        {trigger}
      </div>
      <input
        type="file"
        size={30000000}
        ref={inputRef}
        onChange={handleChange}
        onClick={(event) => (event.currentTarget.value = '')}
        className={styles.input}
      />
    </>
  )
}
