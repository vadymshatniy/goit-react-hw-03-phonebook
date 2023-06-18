import React from 'react';
import { Component } from 'react';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import profileStyles from "./App.module.css"


class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  checkDuplication = data => {
    (this.state.contacts.some(contact => contact.name === data.name)) ?
      alert(`${data.name} is already in contacts`) :
      this.setState({ contacts: [...this.state.contacts, data] })
  }
        
  formSubmitHandler = data => {
    this.checkDuplication(data);
  }
    
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  }

  deleteContact = (id) => {
    this.setState(prevState => ({ contacts: prevState.contacts.filter(contact => contact.id !== id), }));
  }
  
  componentDidMount() {
    const parcedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parcedContacts) {
      this.setState({ contacts: parcedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  
    render() {
      const loweredFilter = this.state.filter.toLowerCase();
      const filteredContact = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(loweredFilter));
      return (
        <div className={profileStyles.container}>
          <Form onSubmit={this.formSubmitHandler} />
          <h2>Contacts</h2>
          <Filter value={this.state.filter} onChange={this.changeFilter} />
          <ContactList contacts={filteredContact} onDeleteContact={this.deleteContact} />
        </div >
      )
    }
};

export default App;