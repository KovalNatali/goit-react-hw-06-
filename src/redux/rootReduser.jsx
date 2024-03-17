import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import { reducer } from "./contactsSlice";

import { filterReduser } from "./filtersSlice";
import storage from "redux-persist/lib/storage";

export const persistConfig = {
  key: "contacts",
  storage,
  // whitelist: ["contacts"],
};

export const rootReduser = combineReducers({
  contacts: reducer,
  filter: filterReduser,
});

const persistedReducer = persistReducer(persistConfig, rootReduser);

export default persistedReducer;
