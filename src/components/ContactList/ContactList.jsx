import { deleteContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';

import {
  UlStyled,
  LiStyled,
  SpanStyled,
  ButtonStyled,
} from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filterKey = useSelector(state => state.filter.filterKey);

  const handleOnDelete = contact => {
    dispatch(deleteContact(contact.id));
    toast.info(`Contact "${contact.name}" has been deleted.`);
  };

  const getFilteredContacts = () => {
    if (!contacts) return;

    const filteredPersons = contacts.filter(person => {
      return person.name.toLowerCase().includes(filterKey);
    });

    return filteredPersons;
  };

  const filteredContacts = getFilteredContacts();

  return (
    <UlStyled>
      {filteredContacts.map(person => (
        <LiStyled key={person.id}>
          <SpanStyled>{person.name}:</SpanStyled>
          <SpanStyled>{person.number}</SpanStyled>
          <ButtonStyled onClick={() => handleOnDelete(person)}>
            Delete
          </ButtonStyled>
        </LiStyled>
      ))}
    </UlStyled>
  );
};

export default ContactList;
