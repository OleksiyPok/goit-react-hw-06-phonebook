import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/contactsSlice';

import { nanoid } from 'nanoid';

// import PropTypes from 'prop-types';

import {
  FormStyled,
  LabelStyled,
  InputStyled,
  ButtonStyled,
} from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const normalize = sentence => {
    const wordsArr = sentence
      .trim()
      .replace(/  +/g, ' ')
      .toLowerCase()
      .split(' ');

    const normSentence = wordsArr
      .map(word => {
        const [first, ...rest] = word;
        return first.toUpperCase() + rest.join('');
      })
      .join(' ');

    return normSentence;
  };

  const handleSubmit = e => {
    e.preventDefault();

    const currentForm = e.target;
    const { name, number } = currentForm.elements;

    const newContact = {
      id: nanoid(),
      name: normalize(name.value),
      number: number.value,
    };

    if (contacts.some(person => newContact.name === person.name)) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      dispatch(addContact(newContact));
      alert(`${newContact.name} has been added to contacts.`);
    }
    return currentForm.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit} autocomplete="off">
      <LabelStyled htmlFor="name">Name</LabelStyled>
      <InputStyled
        type="text"
        name="name"
        id="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        autocomplete="off"
        // onChange={handleInput}
        // value={name}
        required
      />
      <LabelStyled htmlFor="number">Number</LabelStyled>
      <InputStyled
        type="tel"
        name="number"
        id="number"
        title="Phone number must be at least 5 digits, can contain spaces, dashes, parentheses and can start with +"
        placeholder="+ ..."
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        autocomplete="off"
        // onChange={handleInput}
        // value={number}
        required
      />
      <ButtonStyled type="submit">Add contact</ButtonStyled>
    </FormStyled>
  );
};

export default ContactForm;

// ContactForm.propTypes = {
//   createPerson: PropTypes.func.isRequired,
// };
