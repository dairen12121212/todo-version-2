import { combineReducers, configureStore } from "@reduxjs/toolkit";

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

// reducers
import daySliceMain from "./slices/daySlice";
import userSliceMain from "./slices/userSlice";
import weakSliceMain from "./slices/weakSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  daySlice: daySliceMain,
  userSlice: userSliceMain,
  weakSlice: weakSliceMain,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
