import { createSlice } from '@reduxjs/toolkit'

import {
  LoginUserRequestType,
  LoginUserResponseType,
  RegisterUserRequestType,
  UserSliceType,
} from '@/entities/store/slices/user-slice/types.ts'
import { createAppAsyncThunk } from '@/utils/createAppAsyncThunk.ts'
import { Auth } from '@/entities/api/auth.ts'

const initialState: UserSliceType = {
  isLoggedIn: true,
  user: {
    email: 'antonsadovskiy6@gmail.com',
    username: 'antonsadovskiy',
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /*      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoggedIn = true
        state.user.username = action.payload.login
      })*/
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user.email = action.payload.email
      })
  },
  selectors: {
    selectorIsLoggedIn: (state) => state.isLoggedIn,
    selectorUser: (state) => state.user,
  },
})

const loginUser = createAppAsyncThunk<
  LoginUserResponseType,
  LoginUserRequestType
>('user/login', async ({ login, password }, { rejectWithValue }) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { login, password }
  } catch (e) {
    return rejectWithValue(null)
  }
})

const registerUser = createAppAsyncThunk<
  { email: string },
  RegisterUserRequestType
>('user/login', async (args, { rejectWithValue }) => {
  try {
    setTimeout(() => {
      Auth.register(args)
    }, 3000)

    return { email: args.email }
  } catch (e) {
    return rejectWithValue(null)
  }
})

export const userActions = userSlice.actions
export const { selectorIsLoggedIn, selectorUser } = userSlice.selectors
export const userThunks = { loginUser, registerUser }

export const userReducer = userSlice.reducer
