import ContactApi from "../../ContactApi";

export const ACTION_SET_CONTACT_LIST = "ACTION_SET_CONTACT_LIST";
export const ACTION_ADD_CONTACT = "ACTION_ADD_CONTACT";
export const ACTION_DELETE_CONTACT = "ACTION_DELETE_CONTACT";

export const fetchContactList = () => {
  return (dispatch) => {
    ContactApi.getList().then((contactList) =>
      dispatch({
        type: ACTION_SET_CONTACT_LIST,
        payload: contactList,
      })
    );
  };
};

export const addContactItem = (contactItem) => {
  return (dispatch) => {
    ContactApi.create(contactItem).then((newContact) =>
      dispatch({
        type: ACTION_ADD_CONTACT,
        payload: newContact,
      })
    );
  };
};

export const deleteContactItem = (id) => {
  return (dispatch) => {
    ContactApi.delete(id).then((deletedContact) =>
      dispatch({
        type: ACTION_DELETE_CONTACT,
        payload: deletedContact.id,
      })
    );
  };
};
