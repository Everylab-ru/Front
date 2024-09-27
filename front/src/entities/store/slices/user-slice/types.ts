export type UserSliceType = {
  isLoggedIn: boolean
  user: UserType
}

export type UserType = {
  email?: string
  username?: string
}

export type LoginUserRequestType = {
  email: string
  password: string
}

export type RegisterUserRequestType = {
  email: string
  username: string
  password: string
}

export type AuthUserResponseType = {
  access_token: string
}

export type MeResponseType = {
  email: string
  username: string
}
