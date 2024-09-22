import { Api } from '@/entities/api/api.ts'
import {
  RegisterUserRequestType,
  RegisterUserResponseType,
} from '@/entities/store/slices/user-slice/types.ts'

export class Auth {
  public static async register(data: RegisterUserRequestType) {
    const response = await Api.axios.post<RegisterUserResponseType>(
      'register',
      data,
    )

    if (response.data) {
      Api.accessToken = response.data.access_token
    }

    return response.data
  }
}
