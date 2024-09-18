import { createSlice } from "@reduxjs/toolkit";

const INITIAL_CONTACT_STATE = {
  directory: {
    entries: [],
  },
};

const contactManagerSlice = createSlice({
  name: "contactManager",
  initialState: INITIAL_CONTACT_STATE,
  reducers: {
    saveContact: (state, action) => {
      state.directory.entries.push(action.payload);
    },
    removeContact: (state, action) => {
      state.directory.entries = state.directory.entries.filter(
        (entry) => entry.id !== action.payload
      );
    },
  },
});

export const { saveContact, removeContact } = contactManagerSlice.actions;
export const getAllContacts = (state) => state.contactManager.directory.entries;

export const contactManagerReducer = contactManagerSlice.reducer;
