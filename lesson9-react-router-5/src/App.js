import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./modules/common/components/Navigation";
import HomePage from "./modules/general/pages/HomePage";
import NotFoundPage from "./modules/general/pages/NotFoundPage";
import UsersModule from "./modules/users/UsersModule";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUserList } from "./store/actions/users";
import AlbumsModule from "./modules/albums/AlbumsModule";
import PhotoListPage from "./modules/albums/pages/PhotoListPage";

function App({ getUserList }) {
  useEffect(() => {
    getUserList();
  }, []);

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/users">
          <UsersModule />
        </Route>
        <Route path="/albums">
          <AlbumsModule />
        </Route>
        <Route path="/photos">
          <PhotoListPage />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}

const mapDispatchToProps = {
  getUserList: fetchUserList,
};

export default connect(null, mapDispatchToProps)(App);
