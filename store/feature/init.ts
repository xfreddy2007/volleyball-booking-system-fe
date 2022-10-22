/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialStateType {
  globalLoading: boolean;
}
const initialState: InitialStateType = {
  globalLoading: true,
};

const initSlice = createSlice({
  name: 'App Init',
  initialState,
  reducers: {
    init(state) {
      console.log('user init', state);
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.globalLoading = action.payload;
    },
  },
});

export const { init, setLoading } = initSlice.actions;
export default initSlice.reducer;
