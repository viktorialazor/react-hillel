import {
  ACTION_SET_USER_LIST,
  ACTION_SET_USER_ITEM,
  ACTION_ADD_USER,
  ACTION_UPDATE_USER,
  ACTION_DELETE_USER,
  ACTION_SET_EDITABLE_USER_ID,
  ACTION_SET_USER_DETAILS_ID,
} from "../actions/users";

const initialState = {
  users: [],
  userDetails: {},
  editableUserId: "",
  userDetailsId: "",
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_SET_USER_LIST:
      return {
        ...state,
        users: payload,
      };
    case ACTION_SET_USER_ITEM:
      return {
        ...state,
        userDetails: payload,
      };
    case ACTION_ADD_USER:
      return {
        ...state,
        users: [...state.users, payload],
      };
    case ACTION_UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === payload.id ? payload : user
        ),
      };
    case ACTION_DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id.toString() !== payload),
      };
    case ACTION_SET_EDITABLE_USER_ID:
      return {
        ...state,
        editableUserId: payload,
      };
    case ACTION_SET_USER_DETAILS_ID:
      return {
        ...state,
        userDetailsId: payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
