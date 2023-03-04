import { Route, Switch } from "react-router";
import AlbumListPage from "./pages/AlbumListPage";
import PhotoListPage from "./pages/PhotoListPage";
import "./Album.css";
import NotFoundPage from "../general/pages/NotFoundPage";

const AlbumsModule = () => {
  return (
    <Switch>
      <Route path="/albums" exact>
        <AlbumListPage />
      </Route>
      <Route path="/albums/:id">
        <PhotoListPage />
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default AlbumsModule;
