import { Api } from '@/entities/api/api.ts'
import { MeResponseType } from '@/entities/store/slices/user-slice/types.ts'

export class User {
  public static async me() {
    const response = await Api.axios.get<MeResponseType>('user/me')

    return response.data
  }
}
