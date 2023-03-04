import {
  ACTION_SET_CONTACT_LIST,
  ACTION_ADD_CONTACT,
  ACTION_DELETE_CONTACT,
} from "../actions/contacts";

const initialState = {
  contacts: [],
};

const savedContactsState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState")).contacts
  : initialState;

const rootReducer = (state = savedContactsState, { type, payload }) => {
  switch (type) {
    case ACTION_SET_CONTACT_LIST:
      return {
        ...state,
        contacts: payload,
      };
    case ACTION_ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, payload],
      };
    case ACTION_DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
