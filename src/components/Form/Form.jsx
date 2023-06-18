import React from 'react';
import { Component } from 'react';
import shortid from 'shortid';
import profileStyles from "./Form.module.css"

class Form extends Component {
    state = {
        name: '',
        id: '',
        number: '',
    }

    handleNameChange = event => {
        this.setState({ name: event.currentTarget.value });
        this.setState({ id: shortid.generate() })
    }
    handleNumberChange = event => {
        this.setState({ number: event.currentTarget.value });
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    }   
    reset = () => {
        this.setState({ name: '', number: '', id: ''});
    }
    
    render() {
        return (
            <div>
                <h2>Phonebook</h2>
                <form onSubmit={this.handleSubmit}>
                    <label className={profileStyles.label}>Name
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleNameChange}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            className={profileStyles.input}
                        />
                    </label>
                    <label className={profileStyles.label}>Number
                        <input
                            type="tel"
                            name="number"
                            value={this.state.number}
                            onChange={this.handleNumberChange}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            className={profileStyles.input}
                            />
                    </label>
                    <button className={profileStyles.button}>Add contact</button>
                </form>
            </div>
        )
    }
};
export default Form;