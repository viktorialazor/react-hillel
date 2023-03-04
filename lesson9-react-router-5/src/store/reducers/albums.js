import {
  ACTION_SET_ALBUM_LIST,
  ACTION_SET_PHOTO_LIST,
} from "../actions/albums";

const initialState = {
  albums: [],
  photos: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_SET_ALBUM_LIST:
      return {
        ...state,
        albums: payload,
      };
    case ACTION_SET_PHOTO_LIST:
      return {
        ...state,
        photos: payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
