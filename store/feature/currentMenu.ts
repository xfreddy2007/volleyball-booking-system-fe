/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrentMenuState {
  currentTab: number;
}

const initialState: CurrentMenuState = {
  currentTab: 0,
};

const currentMenuSlice = createSlice({
  name: 'Authentication',
  initialState,
  reducers: {
    switchCurrentTab(state, action: PayloadAction<number>) {
      state.currentTab = action.payload;
    },
  },
});

export const { switchCurrentTab } = currentMenuSlice.actions;
export default currentMenuSlice.reducer;
