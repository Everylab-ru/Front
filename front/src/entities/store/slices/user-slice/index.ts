import { createSlice } from '@reduxjs/toolkit'

import {
  LoginUserRequestType,
  MeResponseType,
  RegisterUserRequestType,
  UserSliceType,
} from '@/entities/store/slices/user-slice/types.ts'
import { createAppAsyncThunk } from '@/utils/createAppAsyncThunk.ts'
import { Auth } from '@/entities/api/auth.ts'
import { User } from '@/entities/api/user.ts'

const initialState: UserSliceType = {
  isLoggedIn: false,
  user: {
    email: '',
    username: '',
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(meUser.fulfilled, (state, action) => {
        state.isLoggedIn = true
        state.user.username = action.payload.username
        state.user.email = action.payload.email
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.isLoggedIn = true
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoggedIn = true
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user.username = ''
        state.user.email = ''
        state.isLoggedIn = false
      })
  },
  selectors: {
    selectorIsLoggedIn: (state) => state.isLoggedIn,
    selectorUser: (state) => state.user,
  },
})

const loginUser = createAppAsyncThunk<void, LoginUserRequestType>(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      await Auth.login({ email, password })
    } catch (e) {
      console.error(e)
      return rejectWithValue(null)
    }
  },
)

const registerUser = createAppAsyncThunk<void, RegisterUserRequestType>(
  'user/register',
  async (args, { rejectWithValue }) => {
    try {
      await Auth.register(args)
    } catch (e) {
      console.error(e)
      return rejectWithValue(null)
    }
  },
)

const meUser = createAppAsyncThunk<MeResponseType, void>(
  'user/me',
  async (_, { rejectWithValue }) => {
    try {
      return await User.me()
    } catch (e) {
      return rejectWithValue(e)
    }
  },
)

const refreshUser = createAppAsyncThunk<void, void>(
  'user/refresh',
  async (_, { rejectWithValue }) => {
    try {
      await Auth.refresh()
    } catch (e) {
      return rejectWithValue(e)
    }
  },
)

const logoutUser = createAppAsyncThunk<void, void>(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      await Auth.logout()
    } catch (e) {
      console.error(e)
      return rejectWithValue(null)
    }
  },
)

export const userActions = userSlice.actions
export const { selectorIsLoggedIn, selectorUser } = userSlice.selectors
export const userThunks = {
  loginUser,
  registerUser,
  meUser,
  refreshUser,
  logoutUser,
}

export const userReducer = userSlice.reducer
