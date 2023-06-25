import React, { Component } from 'react';
// import React, { useState } from 'react'; // Solutions with React hooks
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import { Container, Section } from 'components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  }

  handleAddContact = (name, number) => {
    const { contacts } = this.state;
    const isDuplicateName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicateName) {
      alert('This name is already in contacts!');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Section>
        <Container>
          <h1>Phonebook</h1>
          <ContactForm onAddContact={this.handleAddContact} />

          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.handleFilterChange} />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.handleDeleteContact}
          />
        </Container>
      </Section>
    );
  }
}

// Solutions with React hooks
// const App = () => {
//     const [contacts, setContacts] = useState([
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ]);
//   // const [contacts, setContacts] = useState([]);
//   const [filter, setFilter] = useState('');

//   const handleAddContact = (name, number) => {
//     const isDuplicateName = contacts.some(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );

//     if (isDuplicateName) {
//       alert('This name is already in contacts!');
//       return;
//     }

//     const newContact = {
//       id: nanoid(),
//       name: name,
//       number: number,
//     };

//     setContacts([...contacts, newContact]);
//   };

//   const handleDeleteContact = id => {
//     const updatedContacts = contacts.filter(contact => contact.id !== id);
//     setContacts(updatedContacts);
//   };

//   const handleFilterChange = event => {
//     setFilter(event.target.value);
//   };

//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm onAddContact={handleAddContact} />

//       <h2>Contacts</h2>
//       <Filter value={filter} onChange={handleFilterChange} />
//       <ContactList
//         contacts={filteredContacts}
//         onDeleteContact={handleDeleteContact}
//       />
//     </div>
//   );
// };

export default App;
