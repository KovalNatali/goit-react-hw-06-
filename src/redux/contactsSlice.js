import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    filter: "",
  },
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
      prepare: (data) => {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
    deleteContact: (state, { payload }) =>
      state.filter((item) => item.id !== payload),
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

// export const constansReduser = contactsSlice.reducer;
export const reducer = contactsSlice.reducer;
