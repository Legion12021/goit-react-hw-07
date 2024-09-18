import { createSlice } from "@reduxjs/toolkit";
import contacts from "../components/SearchBox/contacts.json";

const initialState = {
  items: contacts,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items;
