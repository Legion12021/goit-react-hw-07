import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { contactManagerReducer } from "./contactsSlice";
import { searchReducer } from "./filtersSlice";

const persistConfig = {
  key: "contactManager",
  storage,
  whitelist: ["directory"],
};

export const appStore = configureStore({
  reducer: {
    contactManager: persistReducer(persistConfig, contactManagerReducer),
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const appPersistor = persistStore(appStore);
