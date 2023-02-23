import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Navigation from "./modules/common/components/Navigation";
import HomePage from "./modules/general/pages/HomePage";
import NotFoundPage from "./modules/general/pages/NotFoundPage";
import UsersModule from "./modules/users/UsersModule";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUserList } from "./store/actions/users";
import AlbumsModule from "./modules/albums/AlbumsModule";

function App({ getUserList }) {
  useEffect(() => {
    getUserList();
  }, []);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users/*" element={<UsersModule />} />
        <Route path="/albums/*" element={<AlbumsModule />} />
        <Route path="*" element={<Navigate to="/notfound" replace />} />
        <Route path="/notfound" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

const mapDispatchToProps = {
  getUserList: fetchUserList,
};

export default connect(null, mapDispatchToProps)(App);
