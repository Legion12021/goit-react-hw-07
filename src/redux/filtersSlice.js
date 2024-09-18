import { createSlice } from "@reduxjs/toolkit";

const INITIAL_FILTER_STATE = {
  searchCriteria: {
    query: "",
  },
};

const searchSlice = createSlice({
  name: "searchCriteria",
  initialState: INITIAL_FILTER_STATE,
  reducers: {
    updateFilter(state, action) {
      state.searchCriteria.query = action.payload;
    },
  },
});

export const { updateFilter } = searchSlice.actions;
export const getFilterValue = (state) => state.searchCriteria.query;

export const searchReducer = searchSlice.reducer;
