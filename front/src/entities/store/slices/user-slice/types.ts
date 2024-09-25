export type UserSliceType = {
  isLoggedIn: boolean
  user: UserType
}

export type UserType = {
  email?: string
  username?: string
}

export type LoginUserRequestType = {
  login: string
  password: string
}
export type LoginUserResponseType = {
  login: string
  password: string
}

export type RegisterUserRequestType = {
  email: string
  username: string
  password: string
}

export type RegisterUserResponseType = {
  access_token: string
}
