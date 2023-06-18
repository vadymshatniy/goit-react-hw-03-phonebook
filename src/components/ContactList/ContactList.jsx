import React from 'react';
import ContactItem from '../ContactItem/ContactItem';

function ContactList({ contacts, onDeleteContact }) {
    return (
        <ul>
            {contacts.map(contact =>
                <ContactItem
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    number={contact.number}
                    onDeleteContact={onDeleteContact}
                />)}
        </ul>
    )
};

export default ContactList;