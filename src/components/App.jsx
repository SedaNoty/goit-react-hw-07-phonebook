import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import css from "components/App.module.css";
import { useSelector } from "react-redux";
import { getStateContacts } from "redux/selectors";
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';

const App = () => {
  const contacts = useSelector(getStateContacts);
  const dispatch = useDispatch();

  useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    
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
        </div>
      ) : (<h2>No contacts</h2>)}
      </div>
    )  
}

export default App;