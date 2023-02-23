import { Route, Switch } from "react-router";
import UserListPage from "./pages/UserListPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import UserFormPage from "./pages/UserFormPage";
import "./User.css";
import NotFoundPage from "../general/pages/NotFoundPage";

const UsersModule = () => {
  return (
    <Switch>
      <Route path="/users" exact>
        <UserListPage />
      </Route>
      <Route path="/users/form" exact>
        <UserFormPage />
      </Route>
      <Route path="/users/:id">
        <UserDetailsPage />
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default UsersModule;
