import { FaUser, FaPhoneAlt } from "react-icons/fa"; // Використовуйте одну версію для іконок
import css from "./Contact.module.css";
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/operations';


const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch(); // Ініціалізація dispatch

  return (
    <li>
      <div className={css.divPerson}>
        <div>
          <div className={css.boxUsername}>
            <FaUser size="20" />
            <p>{name}</p>
          </div>
          <div className={css.boxPhone}>
            <FaPhoneAlt size="20" />
            <p>{number}</p>
          </div>
        </div>

        <button type="button" onClick={() => dispatch(deleteContacts(id))}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default Contact;
