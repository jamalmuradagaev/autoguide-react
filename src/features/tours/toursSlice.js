import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toursList: [],
  tour: {},
  isLoading: false,
  error: null,
};

export const toursSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});


export default toursSlice.reducer