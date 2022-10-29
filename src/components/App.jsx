import { useState, useEffect } from 'react';
import ContactList from './Contacts/Contacts';
import { FormInput } from './Form/Form';
import Filter from './Filter/Filter';
import { Notify } from 'notiflix';

export function App() {
  const contactsFromLocal = localStorage.getItem('contacts');
  const parseContactsFromLocal = JSON.parse(contactsFromLocal);

  const [contacts, setContacts] = useState(parseContactsFromLocal ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formData = data => {
    if (contacts.find(contact => contact.name === data.name)) {
      Notify.warning(`${data.name} is already in contacts`);
      return false;
    }

    setContacts([data, ...contacts]);
    return true;
  };

  const deleteContacts = nameDelete => {
    setContacts(contacts.filter(contact => contact.name !== nameDelete));
  };

  const onFilterChange = value => {
    setFilter(value);
  };

  let fromFilter = contacts;
  if (filter) {
    fromFilter = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  }

  return (
    <section style={{ marginLeft: '40px' }}>
      <h1>Phonebook</h1>
      <FormInput formData={formData} />
      <h2>Contacts</h2>
      <Filter onChange={onFilterChange} />
      <ContactList allContacts={fromFilter} onDelete={deleteContacts} />
    </section>
  );
}
