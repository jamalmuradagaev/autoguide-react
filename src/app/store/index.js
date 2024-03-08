import { configureStore } from "@reduxjs/toolkit";
import toursSlice from "../../features/tours/toursSlice";

export const store = configureStore({
  reducer: {
    tours: toursSlice,
  },
});
