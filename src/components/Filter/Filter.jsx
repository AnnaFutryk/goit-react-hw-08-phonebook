import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';
import { Input, Label } from './Filter.styled';
import { useEffect } from 'react';
import { getContactsThunk } from 'redux/contacts/thunk';

const filterInputId = nanoid();

const Filter = () => {
  const contacts = useSelector(getContacts); //отримання контактів зі стору через селекттор
  const dispatchContact = useDispatch();

  useEffect(() => {
    dispatchContact(getContactsThunk()); //асинхронно отримуємо контакти
  }, [dispatchContact]);

  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };

  return (
    <>
      {contacts.length > 0 ? (
        <Label>
          Find contacts by name
          <Input
            type="text"
            name="filter"
            placeholder="Enter contact name"
            value={value}
            onChange={handleChangeFilter}
            id={filterInputId}
          />
        </Label>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          Your phonebook is empty. Add first contact!
        </div>
      )}
    </>
  );
};

export default Filter;
