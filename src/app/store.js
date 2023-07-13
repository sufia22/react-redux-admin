import { configureStore } from "@reduxjs/toolkit";

// create store
const store = configureStore({
  reducer: {},
  devTools: true,
});

// export
export default store;
