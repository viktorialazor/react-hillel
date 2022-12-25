import React from 'react';

import ContactItem from '../ContactItem/ContactItem';
import './Contacts.css';

class Contacts extends React.Component {
  render() {
    const { contactList, deleteContactItem } = this.props;

    return (
      <ul className="list">
        {contactList.map((item) => (
          <ContactItem
            key={item.id}
            contact={item}
            deleteContactItem={deleteContactItem}
          />
        ))}
      </ul>
    );
  }
}

export default Contacts;
