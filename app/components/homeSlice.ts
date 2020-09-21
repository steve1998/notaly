import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../store';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    date: moment().format('MMMM Do YYYY, h:mm:ss a'),
  },
  reducers: {
    getCurrentDate: (state) => {
      state.date = moment().format('MMMM Do YYYY, h:mm:ss a');
    },
  },
});

export const { getCurrentDate } = homeSlice.actions;

export default homeSlice.reducer;

export const selectDate = (state: RootState) => state.home.date;
