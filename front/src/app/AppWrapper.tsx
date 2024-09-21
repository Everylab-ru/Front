import { ReactNode, useEffect } from 'react'

export const AppWrapper = ({ children }: { children: ReactNode }) => {
  // const dispatch = useAppDispatch()

  console.log(import.meta.env.VITE_APP_BASE_URL)

  useEffect(() => {}, [])

  return <>{children}</>
}
