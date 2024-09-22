import axios from 'axios'

export const baseURL = `${import.meta.env.VITE_APP_BASE_URL}/api/v1/`

export class Api {
  public static readonly axios = axios.create({
    baseURL,
    withCredentials: true,
  })
  public static accessToken?: string = undefined
}
