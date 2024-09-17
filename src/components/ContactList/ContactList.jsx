import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

import css from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ul className={css.listWrapper}>
      {filteredContacts.map((contact) => {
        return (
          <Contact
            name={contact.name}
            number={contact.number}
            key={contact.id}
            id={contact.id}
          />
        );
      })}
    </ul>
  );
}

export default ContactList;
