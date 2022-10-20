import { configureStore } from '@reduxjs/toolkit';
import authReducer from './feature/auth';
import currentMenuReducer from './feature/currentMenu';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    currentMenu: currentMenuReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
