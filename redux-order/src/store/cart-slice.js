import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartInitialState = {
  totalQuantity: 0,
  items: [],
  changed: false
}

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
      state.changed = false;
    },
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price, quantity: 1, totalPrice: newItem.price,
          name: newItem.title
        })
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    deleteItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    }
  }
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer