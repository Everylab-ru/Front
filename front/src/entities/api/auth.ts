import { Api } from '@/entities/api/api.ts'
import {
  AuthUserResponseType,
  LoginUserRequestType,
  RegisterUserRequestType,
} from '@/entities/store/slices/user-slice/types.ts'

export class Auth {
  public static async register(data: RegisterUserRequestType) {
    const response = await Api.axios.post<AuthUserResponseType>(
      'auth/register',
      data,
    )

    if (response.data) {
      Api.accessToken = response.data.access_token
    }

    return response.data
  }

  public static async login(data: LoginUserRequestType) {
    const response = await Api.axios.post<AuthUserResponseType>(
      'auth/login',
      data,
    )

    if (response.data) {
      Api.accessToken = response.data.access_token
    }

    return response.data
  }

  public static async refresh() {
    const response =
      await Api.axios.post<AuthUserResponseType>('auth/refresh-token')

    if (response.data) {
      Api.accessToken = response.data.access_token
    }

    return response.data
  }

  public static async logout() {
    const response = await Api.axios.post('auth/logout')

    if (response.data) {
      Api.accessToken = undefined
    }

    return response.data
  }
}
