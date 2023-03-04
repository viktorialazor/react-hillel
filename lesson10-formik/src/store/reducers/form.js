import { ACTION_SET_FORM_DATA } from "../actions/form";

const initialState = {
  formData: {
    name: "",
    phone: "",
  },
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_SET_FORM_DATA:
      return {
        ...state,
        formData: payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
