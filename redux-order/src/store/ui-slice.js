import { createSlice } from "@reduxjs/toolkit";

const uiInitialState = {
  cartIsVisible: false,
  notification: null
}

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible
    },
    showNotification(state, action) {
      const { status, title, message } = action.payload
      state.notification = {
        status,
        title,
        message
      }
    }
  }
})

export const uiActions = uiSlice.actions

export default uiSlice.reducer