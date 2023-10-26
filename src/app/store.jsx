import { configureStore } from '@reduxjs/toolkit'
import  navListStatenReducer  from '../features/list/navListSlice'
import recordReducer from '../features/recordCRUD/recordSlice'

export const store = configureStore({
  reducer: {
    navListSlice: navListStatenReducer,
    recordSlice: recordReducer
  },
})