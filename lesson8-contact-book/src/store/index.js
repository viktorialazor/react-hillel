import { createStore, applyMiddleware, combineReducers } from "redux";
import contactsReducer from "./reducers/contacts";
import formReducer from "./reducers/form";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  form: formReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
