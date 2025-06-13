import { configureStore } from "@reduxjs/toolkit";
import SliceCounters from "./../CreateSlice/CreateSlice";

const store = configureStore({
  reducer: {
    counter: SliceCounters,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
