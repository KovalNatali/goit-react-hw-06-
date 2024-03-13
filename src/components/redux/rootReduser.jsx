import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import { constansReduser } from "../redux/contacts/contacts-slice";
import { filterReduser } from "../redux/filter/filter-slice";
import storage from "redux-persist/lib/storage";

export const persistConfig = {
  key: "contacts",
  storage,
  // whitelist: ["contacts"],
};

export const rootReduser = combineReducers({
  contacts: constansReduser,
  filter: filterReduser,
});

const persistedReducer = persistReducer(persistConfig, rootReduser);

export default persistedReducer;
