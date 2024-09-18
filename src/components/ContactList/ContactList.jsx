import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = () => {
    return filter
      ? contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;
  };

  return (
    <div className={style.list}>
      {filteredContacts().map((contact) => {
        return (
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        );
      })}
    </div>
  );
}
