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
  isLoggedIn: false,
  user: {},
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoggedIn = true
      state.user.login = action.payload.login
    })
  },
  selectors: {
    selectorIsLoggedIn: (state) => state.isLoggedIn,
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
export const { selectorIsLoggedIn } = userSlice.selectors
export const userThunks = { loginUser, registerUser }

export const userReducer = userSlice.reducer
