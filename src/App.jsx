import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { FaAddressBook } from "react-icons/fa6";
import style from "../src/App.css";

export default function App() {
  return (
    <div>
      <h1 className={style.title}>
        Phonebook <FaAddressBook className={style.icon} />
      </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
