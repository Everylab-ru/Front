import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppSliceType } from '@/entities/store/slices/app-slice/types.ts'

const initialState: AppSliceType = {
  isAppInitialized: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsAppInitialized(state, action: PayloadAction<boolean>) {
      state.isAppInitialized = action.payload
    },
  },
  selectors: {
    selectorIsAppInitialized: (state) => state.isAppInitialized,
  },
})

export const appActions = appSlice.actions
export const appReducer = appSlice.reducer
export const { selectorIsAppInitialized } = appSlice.selectors
