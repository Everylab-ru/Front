import { createSlice } from '@reduxjs/toolkit'

import { LoginUserRequestType, LoginUserResponseType, UserSliceType } from '@/entities/store/slices/user-slice/types.ts'
import { createAppAsyncThunk } from '@/utils/createAppAsyncThunk.ts'

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

const loginUser = createAppAsyncThunk<LoginUserResponseType, LoginUserRequestType>(
  'user/login',
  async ({ login, password }, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      return { login, password }
    } catch (e) {
      return rejectWithValue(null)
    }
  },
)

export const userActions = userSlice.actions
export const { selectorIsLoggedIn } = userSlice.selectors
export const userThunks = { loginUser }

export const userReducer = userSlice.reducer
