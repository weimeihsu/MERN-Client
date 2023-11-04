import { configureStore } from '@reduxjs/toolkit'
import  navListReducer  from '../features/navListSlice'
import recordReducer from '../features/recordSlice'
import shopItemReducer from '../features/shopItemSlice'

export const store = configureStore({
  reducer: {
    navListSlice: navListReducer,
    recordSlice: recordReducer,
    shopItemSlice: shopItemReducer
  },
})