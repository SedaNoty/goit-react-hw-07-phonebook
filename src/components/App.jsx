import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import css from "components/App.module.css";
import { useSelector } from "react-redux";
import { stateContacts } from "redux/contactSlice";

const App = () => {
  const contacts = useSelector(stateContacts);
  return (
      <div>
        <div className={css.box}>
          <h1>Phonebook</h1>
          <ContactForm />
        </div>
        {contacts.length ? (
        <div className={css.box}>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>) : (<h2 className={css.plug}>No contacts</h2>)}
      </div>
    )  
}

export default App;