import React from 'react';

import Contacts from './components/Contacts/Contacts';
import Form from './components/Form/Form';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contactList: [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Smith',
          phone: '123123',
        },
        {
          id: 2,
          firstName: 'Robert',
          lastName: 'Johnson',
          phone: '456456',
        },
        {
          id: 3,
          firstName: 'Michael',
          lastName: 'Williams',
          phone: '789789',
        },
      ],
    };
  }

  addContactItem = (newItem) => {
    this.setState({
      contactList: [...this.state.contactList, newItem],
    });
  };

  deleteContactItem = (id) => {
    this.setState({
      contactList: this.state.contactList.filter((item) => item.id !== id),
    });
  };

  render() {
    return (
      <div className="container">
        <Contacts
          contactList={this.state.contactList}
          deleteContactItem={this.deleteContactItem}
        />
        <Form addContactItem={this.addContactItem} />
      </div>
    );
  }
}

export default App;
