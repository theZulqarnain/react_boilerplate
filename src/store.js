import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './store/counterSlice'
import productSlice from './store/productSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productSlice
  },
})