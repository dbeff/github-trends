import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./store/filters/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import { githubApi } from "./store/github/githubApi";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(githubApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

