import React from 'react';

function ContactRow(props) {
  const contact = props.contacts;

  return (
    //why is below statement not recognize id?
    <tr onClick={() => props.selectContact(props.contacts.id)}>
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
    </tr>
  );
}

export default ContactRow;
