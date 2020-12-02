import React from 'react';
import ContactRow from './ContactRow';

function ContactList(props) {
  const contacts = props.contacts;
  const { selectContact } = props;

  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>

        {contacts.map((contact) => {
          return (
            <ContactRow
              contacts={contact}
              key={contact.id}
              selectContact={selectContact}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default ContactList;
