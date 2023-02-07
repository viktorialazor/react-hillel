import {
  ACTION_SET_FORM_DATA,
  ACTION_SET_FORM_STATUS,
  ACTION_CHECK_FORM_DATA,
} from "../actions/form";

const initialState = {
  isFormOpen: false,
  isFieldsFull: false,
  formData: {
    firstName: "",
    lastName: "",
    phone: "",
  },
};

const savedFormState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState")).form
  : initialState;

const rootReducer = (state = savedFormState, { type, payload }) => {
  switch (type) {
    case ACTION_SET_FORM_DATA:
      return {
        ...state,
        formData: payload,
      };
    case ACTION_SET_FORM_STATUS:
      return {
        ...state,
        isFormOpen: payload,
      };
    case ACTION_CHECK_FORM_DATA:
      return {
        ...state,
        isFieldsFull: payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
