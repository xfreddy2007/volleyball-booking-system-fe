/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Games } from '@/types/gameField';

interface InitialStateType {
  globalLoading: boolean;
  allGames: Games[];
  availableGames: Games[];
}
const initialState: InitialStateType = {
  globalLoading: true,
  allGames: [],
  availableGames: [],
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
