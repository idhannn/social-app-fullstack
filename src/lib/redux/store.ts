import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import dataReducer from "./dataSLice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      modal: modalReducer,
      data: dataReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
