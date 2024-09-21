import Contact from "../Contact/Contact";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { deleteContact } from '../../redux/contactSlice';
import css from "./ContactList.module.css";

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => {
    return state.contacts.items.filter(item =>
      item.name.toLowerCase().trim().includes(state.filter.toLowerCase().trim())
    );
  });
  return (
    <ul className={css.list}>
      {contacts.map(item => {
        return (
          <Contact
            key={item.id}
            id={item.id}
            name={item.name}
            number={item.number}
            deleteContacts={dispatch(deleteContact)}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
