import { configureStore } from "@reduxjs/toolkit";
import {
    
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import storage from "redux-persist/lib/storage";
import { baseApi } from "./api/baseApi";
  const persistConfig = {
    key: "auth",
    storage,
  };
  
export const store = configureStore({
    reducer:{
        [baseApi.reducerPath] : baseApi.reducer, 
    }, 
    middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
})



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);