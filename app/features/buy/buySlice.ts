import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { AppThunk, RootState } from '../../store';
import { getItemsFromStorage, saveItemsToStorage } from '../../storage/db';
import ItemList from '../../types/items';
/* eslint-disable */

type sliceState = {
  numOfItems: number;
  items: Array<ItemList> | null;
  isAdd: boolean;
  totalAmount: number;
}

const initialState: sliceState = {
  numOfItems: 0,
  items: null,
  isAdd: false,
  totalAmount: 0,
}

const buySlice = createSlice({
  name: 'buy',
  initialState,
  reducers: {
    toggleIsAdd: (state) => {
      if(state.isAdd == true) {
        state.isAdd = false
      } else {
        state.isAdd = true
      }
    },
    addItem: (state, action: PayloadAction<ItemList>) => {
      if(state.items === null) {
        state.items = [action.payload];
      } else {
        if(state.items.includes(action.payload) == false) {
          state.items.push(action.payload);
        }
      }

      state.totalAmount += action.payload.amount;
      saveItemsToStorage(state.items);
    },
    updateItems: (state, action: PayloadAction<Array<ItemList>>) => {
      state.items = action.payload;
      let sum = 0;

      console.log(state.items);

      if(state.items !== null) {
        for(let i = 0; i < state.items.length; i++) {
          sum += state.items[i].amount;
        }
      }

      state.totalAmount = sum;
    },
    removeItem: (state, action: PayloadAction<string>) => {
      let i = 0

      if (state.items !== null) {
        state.items.forEach(item => {
          if (item.id === action.payload) {
            state.totalAmount -= state.items![i].amount;
            state.items?.splice(i, 1);
          }
          i += 1;
        })
        saveItemsToStorage(state.items);
      }
    },
  },
});

export const { toggleIsAdd, updateItems, removeItem, addItem } = buySlice.actions;

export const fetchItemsDB = (): AppThunk => async dispatch => {
  const items = getItemsFromStorage();
  dispatch(updateItems(items));
}

export default buySlice.reducer;

export const selectAdd = (state: RootState) => state.buy.isAdd;
export const selectItems = (state: RootState) => state.buy.items;
export const selectTotalAmount = (state: RootState) => state.buy.totalAmount;
