/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Player } from '@/types/player';

interface SessionType {
  email?: string | null;
  name?: string | null;
  image?: string | null;
}

const initialState: Player = {
  id: '',
  name: '',
  email: '',
  address: '',
  seasonalMembership: [],
  isAdmin: false,
};

const authSlice = createSlice({
  name: 'Authentication',
  initialState,
  reducers: {
    updateUserInfo(state, action: PayloadAction<SessionType | undefined>) {
      state.email = action.payload?.email || '';
      state.name = action.payload?.name || '';
    },
  },
});

export const { updateUserInfo } = authSlice.actions;
export default authSlice.reducer;
