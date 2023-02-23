import { createStore, applyMiddleware, combineReducers } from "redux";
import usersReducer from "./reducers/users";
import formReducer from "./reducers/form";
import albumsReducer from "./reducers/albums";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  users: usersReducer,
  form: formReducer,
  albums: albumsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
