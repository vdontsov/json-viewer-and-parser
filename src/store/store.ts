import { configureStore } from '@reduxjs/toolkit';
import { dataSliceReducer } from './slices/dataSlice';

export const store = configureStore({
  reducer: dataSliceReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
