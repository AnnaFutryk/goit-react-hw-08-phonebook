import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import { deleteContactsThunk } from 'redux/contacts/thunk';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { List, Item, Button } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    toast.info(`Deleting contact...`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1500,
    });

    dispatch(deleteContactsThunk(contactId));
  };

  return (
    <>
      <ToastContainer transition={Slide} />
      {contacts.length > 0 && (
        <List>
          {contacts.map(contact => (
            <Item key={contact.id}>
              <p>
                {contact.name} : <span>{contact.number}</span>
              </p>
              <Button type="button" onClick={() => handleDelete(contact.id)}>
                Delete
              </Button>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};

export default ContactList;
