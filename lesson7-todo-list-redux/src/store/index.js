import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
