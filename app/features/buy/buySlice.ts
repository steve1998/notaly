import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../../store';
/* eslint-disable */

const buySlice = createSlice({
  name: 'buy',
  initialState: {
    numOfItems: 0,
    items: [{
      id: 0,
      description: 'test',
      amount: 300,
    },
    {
      id: 1,
      description: 'test',
      amount: 300,
    }],
    isAdd: false,
    totalAmount: 0,
  },
  reducers: {
    toggleIsAdd: (state) => {
      if(state.isAdd == true) {
        state.isAdd = false
      } else {
        state.isAdd = true
      }
    }
  },
});

export const { toggleIsAdd } = buySlice.actions;

export default buySlice.reducer;

export const selectAdd = (state: RootState) => state.buy.isAdd;
export const selectItems = (state: RootState) => state.buy.items;
export const selectTotalAmount = (state: RootState) => state.buy.totalAmount;
