import { createSlice } from "@reduxjs/toolkit";

const filterRedusers = createSlice({
  name: "filter",
  initialState: {
    contacts: [],
    filter: "",
  },
  reducers: {
    setFilter: (_, { payload }) => payload,
  },
});

export const { setFilter } = filterRedusers.actions;

export const filterReduser = filterRedusers.reducer;
