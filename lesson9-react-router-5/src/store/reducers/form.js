import {
  ACTION_SET_FORM_DATA,
  ACTION_CHECK_FORM_DATA,
  ACTION_SET_FORM_DATA_ERROR,
} from "../actions/form";

const initialState = {
  formData: {
    name: "",
    phone: "",
  },
  isValid: false,
  errorMessage: "",
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_SET_FORM_DATA:
      return {
        ...state,
        formData: payload,
      };
    case ACTION_CHECK_FORM_DATA:
      return {
        ...state,
        isValid: payload,
      };
    case ACTION_SET_FORM_DATA_ERROR:
      return {
        ...state,
        errorMessage: payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
