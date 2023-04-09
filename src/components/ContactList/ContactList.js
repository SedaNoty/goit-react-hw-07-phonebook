import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getStateContacts, getStateFilter } from 'redux/selectors';

const ContactList = () => {
    const contactsList = useSelector(getStateContacts);
    const filterValue = useSelector(getStateFilter);
    const dispatch = useDispatch();    

    const getFilterContact = () => {
        if (filterValue === '') {
            return contactsList;
        };
        const normalizedFilter = filterValue.toLowerCase();
        return contactsList.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter)
        );
    };

    const filterContacts = getFilterContact();
    
    return (
        <ul>
            {filterContacts?.map(({ id, name, phone }) => (
                    <li key={id} className={css.item}>
                        {name}:<br/> {phone}
                        <button type='submit' className={css.button_del} onClick={() => dispatch(deleteContact(id))}>Delete</button>
                    </li>
                ))}
        </ul>
    )
};

export default ContactList;