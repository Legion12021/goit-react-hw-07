import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from './redux/selectors';
import { fetchContacts } from './redux/operations';
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
   const contacts = useSelector(selectContacts);
   const dispatch = useDispatch();
 
   useEffect(() => {
     dispatch(fetchContacts());
   }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      {contacts.length > 0 ? (
        <SearchBox />
      ) : (
        <p>Your phonebook is empty. Add first contact!</p>
      )}
      {contacts.length > 0 && (
        <ContactList />
      )}
    </div>
  );
}

export default App;
