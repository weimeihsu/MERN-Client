import { configureStore } from '@reduxjs/toolkit'
import navListReducer from '../slices/navListSlice'

import recordReducer from '../slices/recordSlice'
import shopItemReducer from '../slices/shopItemSlice'
import authReducer from '../slices/authSlice'
import domainFilterReducer from '../slices/domainFilterSlice'
import { apiSlice } from '../slices/apiSlice'

export const store = configureStore({
  reducer: {
    navListSlice: navListReducer,
    recordSlice: recordReducer,
    shopItemSlice: shopItemReducer,
    authSlice: authReducer,
    domainFilterSlice: domainFilterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
})