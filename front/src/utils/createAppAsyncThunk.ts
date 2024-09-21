import { createAsyncThunk } from '@reduxjs/toolkit'

import { AppDispatch, RootState } from '@/entities/store/store.ts'

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState
  dispatch: AppDispatch
  rejectedValue: unknown
}>()
