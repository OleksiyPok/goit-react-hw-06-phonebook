// import { useState, useEffect } from 'react';

import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import FilterForm from './FilterForm';

// const LS_KEY = 'phonebook';

const App = () => {
  // useEffect(() => {
  //   const fromLs = localStorage.getItem(LS_KEY);
  //   if (fromLs) {
  //     try {
  //       setContacts(JSON.parse(fromLs));
  //     } catch (error) {
  //       console.error('Init from local storage error: ', error.message);
  //     }
  //   }
  // }, []);

  // useEffect(() => {
  //   if (contacts.length === 0) {
  //     localStorage.removeItem(LS_KEY);
  //   } else {
  //     localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  //   }
  // }, [contacts]);

  // const getFilteredPersons = () => {
  //   if (!contacts) return;
  //   const filteredPersons = contacts.filter(person =>
  //     person.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  //   return filteredPersons;
  // };

  return (
    <>
      <h1>Phonebook</h1>

      <Section>
        <ContactForm />
      </Section>

      <Section title="Contacts">
        {/* <FilterForm setFilter={e => setFilter(e.target.value)}></FilterForm> */}
        <FilterForm />
        {/* <ContactList
          contacts={getFilteredPersons()}
          deletePerson={deletePerson}
        ></ContactList> */}
        <ContactList />
      </Section>
    </>
  );
};

export default App;
