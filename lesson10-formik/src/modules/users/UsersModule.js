import { Navigate, Route, Routes } from "react-router";
import UserListPage from "./pages/UserListPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import UserFormPage from "./pages/UserFormPage";
import "./User.css";

const UsersModule = () => {
  return (
    <Routes>
      <Route path="/" element={<UserListPage />} />
      <Route path="/form" element={<UserFormPage />} />
      <Route path="/:id" element={<UserDetailsPage />} />
      <Route path="*" element={<Navigate to="/notfound" replace />} />
    </Routes>
  );
};

export default UsersModule;
