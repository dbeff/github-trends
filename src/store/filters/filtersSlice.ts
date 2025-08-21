import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type TimeRange = "daily" | "weekly" | "monthly";

export interface FiltersState {
  timeRange: TimeRange;
  language: string;
}

const initialState: FiltersState = {
  timeRange: "daily",
  language: "Any",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setTimeRange(state, action: PayloadAction<TimeRange>) {
      state.timeRange = action.payload;
    },
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const { setTimeRange, setLanguage, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
