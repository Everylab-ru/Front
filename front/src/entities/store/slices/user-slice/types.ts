export type UserSliceType = {
  isLoggedIn: boolean
  user: UserType
}

export type UserType = {
  login?: string
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
  password: string
}

export type RegisterUserResponseType = {
  access_token: string
}
