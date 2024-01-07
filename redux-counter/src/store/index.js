import counterReducer from "./counter";
import authReducer from "./login";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  }
})


export default store;