import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts, stateContacts } from 'redux/contactSlice';
import { stateFilter } from 'redux/filterSlice';

const ContactList = () => {
    const arrContacts = useSelector(stateContacts);
    const filterValue = useSelector(stateFilter);
    const dispatch = useDispatch();

    const getFilterContact = () => {
        if (filterValue === '') return arrContacts;
        return arrContacts.filter(contact => {
            return contact.name.toLowerCase().includes(filterValue.toLowerCase());
        });
    };

    const filterArrayContacts = getFilterContact();
    
    return (
        <ul>
            {filterArrayContacts?.map(({ id, name, number }) => (
                    <li key={id} className={css.item}>
                        {name}: {number}
                        <button type='submit' className={css.button_contact} onClick={() => dispatch(deleteContacts(id))}>Delete</button>
                    </li>
                ))}
        </ul>
    )
};

export default ContactList;