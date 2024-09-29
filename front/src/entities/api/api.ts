import axios, { AxiosRequestConfig } from 'axios'

import { Auth } from '@/entities/api/auth.ts'

export const baseURL = `${import.meta.env.VITE_APP_BASE_URL}/api/v1/`

export class Api {
  public static readonly axios = axios.create({
    baseURL,
    withCredentials: true,
  })
  public static accessToken?: string = undefined

  public static setupInterceptors() {
    Api.axios.interceptors.request.use((config) => {
      if (Api.accessToken) {
        console.log(Api.accessToken)
        config.headers.Authorization = `Bearer ${Api.accessToken}`
      }

      return config
    })

    Api.axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response.status === 401 &&
          error.response.data.message === 'ACCESS_TOKEN_EXPIRED'
        ) {
          try {
            await Auth.refresh()
            error.config.headers.Authorization = `Bearer ${Api.accessToken}`
            return Api.axios.request(error.config as AxiosRequestConfig)
          } catch (err) {
            Api.accessToken = undefined
            return Promise.reject(err)
          }
        }

        return Promise.reject(error)
      },
    )
  }
}
