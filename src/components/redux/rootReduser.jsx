import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

// import { constansReduser } from "./components/contacts/contacts-slice";
import { constansReduser } from "./contacts/contacts-slice";
// import { filterReduser } from "./components/filter/filter-slice";
import { filterReduser } from "./filter/filter-slice";
import storage from "redux-persist/lib/storage";

export const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["contacts"],
};

export const rootReduser = combineReducers({
  contacts: constansReduser,
  filter: filterReduser,
});

export const persistedReducer = persistReducer(persistConfig, rootReduser);
