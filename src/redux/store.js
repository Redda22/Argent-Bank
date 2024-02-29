import { configureStore } from '@reduxjs/toolkit'
import connSlice from './slices/connSlice'
import userSlice from './slices/userSlice'
import userNameSlice from './slices/userNameSlice'

export const store = configureStore({
  reducer: {
    auth: connSlice,
    profile: userSlice,
    userUpdate: userNameSlice
  },
})