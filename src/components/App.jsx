import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { Component } from 'react';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  inputUpdateHandler = contact => {
    for (let { name } of this.state.contacts) {
      if (name.toLowerCase() === contact.name.toLowerCase()) {
        alert(`${contact.name} is already in contacts.`);
        return;
      }
    }

    this.setState(({ contacts }) => {
      return { contacts: [contact, ...contacts] };
    });
  };

  inputFilterHandler = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  contactDeleteHandler = e => {
    const { id } = e.currentTarget;
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Box padding="24px" backgroundColor="#b9b2ec" height="100vh">
        <Box
          padding="24px"
          border="2px solid #4e2ecf"
          borderRadius="8px"
          width="320px"
          color="#fff"
          backgroundColor="#1d1d42"
        >
          <h1>Phonebook</h1>
          <ContactsForm onChange={this.inputUpdateHandler} />
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.inputFilterHandler} />
          <ContactsList
            contacts={visibleContacts}
            onClick={this.contactDeleteHandler}
          />
        </Box>
        <GlobalStyle />
      </Box>
    );
  }
}
