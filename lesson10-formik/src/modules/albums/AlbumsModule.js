import { Navigate, Route, Routes } from "react-router";
import AlbumListPage from "./pages/AlbumListPage";
import PhotoListPage from "./pages/PhotoListPage";
import "./Album.css";

const AlbumsModule = () => {
  return (
    <Routes>
      <Route path="/" element={<AlbumListPage />} />
      <Route path="/:id" element={<PhotoListPage />} />
      <Route path="*" element={<Navigate to="/notfound" replace />} />
    </Routes>
  );
};

export default AlbumsModule;
