import { createSlice } from '@reduxjs/toolkit'

import { settingsSliceType } from '@/entities/store/slices/settings-slice/types.ts'
import { createAppAsyncThunk } from '@/utils/createAppAsyncThunk.ts'
import { Products } from '@/entities/api/products.ts'
import { ProductVariantType } from '@/types/products-api'

const initialState: settingsSliceType = {
  productTypes: [],
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductTypes.fulfilled, (state, action) => {
      state.productTypes = action.payload.productTypes
    })
  },
  selectors: {
    selectorProductTypes: (state) => state.productTypes,
  },
})

const fetchProductTypes = createAppAsyncThunk<
  { productTypes: ProductVariantType[] },
  void
>('products/fetchTypes', async (_, { rejectWithValue }) => {
  try {
    const data = await Products.getAllProductTypes()

    return { productTypes: data }
  } catch (e) {
    return rejectWithValue(e)
  }
})

export const { selectorProductTypes } = settingsSlice.selectors
export const settingsThunks = {
  fetchProductTypes,
}

export const settingsReducer = settingsSlice.reducer
