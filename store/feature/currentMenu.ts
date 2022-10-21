/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrentMenuState {
  currentTab: number;
  isMobileMenuOpen: boolean;
}

const initialState: CurrentMenuState = {
  currentTab: 0,
  isMobileMenuOpen: false,
};

const currentMenuSlice = createSlice({
  name: 'Authentication',
  initialState,
  reducers: {
    switchCurrentTab(state, action: PayloadAction<number>) {
      state.currentTab = action.payload;
    },
    toggleMobileMenuOpen(state, action: PayloadAction<boolean | undefined>) {
      // if isDesktop then set isMobileMenuOpen to false
      if (action.payload !== undefined) {
        state.isMobileMenuOpen = action.payload;
      } else {
        state.isMobileMenuOpen = !state.isMobileMenuOpen;
      }
    },
  },
});

export const { switchCurrentTab, toggleMobileMenuOpen } = currentMenuSlice.actions;
export default currentMenuSlice.reducer;
