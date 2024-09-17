import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { deleteContacts } from "../../redux/contactsSlice";

import css from "./Contact.module.css";

function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const onDeleteContact = (id) => {
    dispatch(deleteContacts(id));
  };

  return (
    <li className={css.contactWrapper}>
      <div className={css.wrapper}>
        <FaUser />
        <h3>{name}</h3>
      </div>
      <div className={css.wrapper}>
        <FaPhoneAlt />
        <p>{number}</p>
      </div>

      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
