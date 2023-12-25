import { configureStore } from "@reduxjs/toolkit";
import { characterSlice } from "./slices/character-slice";

const store = configureStore({
  reducer: {
    [characterSlice.name]: characterSlice.reducer,
  },
});

export default store;
