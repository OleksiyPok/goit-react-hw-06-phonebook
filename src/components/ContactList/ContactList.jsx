import { deleteContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

// import PropTypes from 'prop-types';

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

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ),
//   deletePerson: PropTypes.func.isRequired,
// };
