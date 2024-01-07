import { createSlice } from "@reduxjs/toolkit";

const counterInitialState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
  name: 'counter',
  initialState: counterInitialState,
  reducers: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    },
    increase(state, action) {
      state.counter = state.counter + action.payload
    }
  }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer