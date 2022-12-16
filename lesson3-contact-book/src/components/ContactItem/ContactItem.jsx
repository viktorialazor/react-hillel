import React from 'react';

import './ContactItem.css';

class ContactItem extends React.Component {
  onDeleteClick = (id) => {
    this.props.deleteContactItem(id);
  };

  render() {
    const { id, firstName, lastName, phone } = this.props.contact;
    return (
      <li className="list__item">
        <p>
          <span className="list__text">{firstName}</span>
          <span className="list__text">{lastName}</span>
          <span className="list__text list__text--phone">{phone}</span>
        </p>
        <button
          className="list__button"
          type="button"
          onClick={() => this.onDeleteClick(id)}>
          Delete
        </button>
      </li>
    );
  }
}

export default ContactItem;
