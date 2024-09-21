import Contact from "../Contact/Contact";
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import css from "./ContactList.module.css";

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  return (
    <ul className={css.list}>
      {contacts.map(item => {
        return (
          <Contact
            key={item.id}
            id={item.id}
            name={item.name}
            number={item.number}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
