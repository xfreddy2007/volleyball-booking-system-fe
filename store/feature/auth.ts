/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Player } from '@/types/player';

const initialState: Player = {
  id: '',
  name: '',
  email: '',
  password: '',
  address: '',
  seasonalMembership: [],
  isAdmin: false,
};

const authSlice = createSlice({
  name: 'Authentication',
  initialState,
  reducers: {
    init(state) {
      console.log('user init', state);
    },
  },
});

export const { init } = authSlice.actions;
export default authSlice.reducer;
