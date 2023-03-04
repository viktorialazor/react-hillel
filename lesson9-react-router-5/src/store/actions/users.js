import {
  getUserList,
  getUserDetails,
  createUser,
  updateUser,
  deleteUser,
} from "../../modules/users/services/UsersService";

export const ACTION_SET_USER_LIST = "ACTION_SET_USER_LIST";
export const ACTION_SET_USER_ITEM = "ACTION_SET_USER_ITEM";
export const ACTION_ADD_USER = "ACTION_ADD_USER";
export const ACTION_UPDATE_USER = "ACTION_UPDATE_USER";
export const ACTION_DELETE_USER = "ACTION_DELETE_USER";
export const ACTION_SET_EDITABLE_USER_ID = "ACTION_SET_EDITABLE_USER_ID";
export const ACTION_SET_USER_DETAILS_ID = "ACTION_SET_USER_DETAILS_ID";

export const fetchUserList = () => {
  return (dispatch) => {
    getUserList().then((userList) => {
      dispatch({
        type: ACTION_SET_USER_LIST,
        payload: userList,
      });
    });
  };
};

export const fetchUserItem = (id) => {
  return (dispatch) => {
    getUserDetails(id).then((user) => {
      dispatch({
        type: ACTION_SET_USER_ITEM,
        payload: user,
      });
    });
  };
};

export const createUserItem = (user) => {
  return (dispatch) => {
    createUser(user).then((newUser) => {
      dispatch({
        type: ACTION_ADD_USER,
        payload: newUser,
      });
    });
  };
};

export const updateUserItem = (id, user) => {
  return (dispatch) => {
    updateUser(id, user).then((updatedUser) => {
      dispatch({
        type: ACTION_UPDATE_USER,
        payload: updatedUser,
      });
    });
  };
};

export const deleteUserItem = (id) => {
  return (dispatch) => {
    deleteUser(id).then(() => {
      dispatch({
        type: ACTION_DELETE_USER,
        payload: id,
      });
    });
  };
};

export const setEditableUserId = (id) => {
  return { type: ACTION_SET_EDITABLE_USER_ID, payload: id };
};

export const setUserDetailsId = (id) => {
  return { type: ACTION_SET_USER_DETAILS_ID, payload: id };
};
