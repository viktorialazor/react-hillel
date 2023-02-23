import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchAlbumList } from "../../../store/actions/albums";
import AlbumList from "../components/AlbumList";

const AlbumListPage = ({ albumList, getAlbums }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");
  const albumsPath = `albums?userId=${userId}`;

  useEffect(() => {
    const path = userId ? albumsPath : pathname;

    getAlbums(path);
  }, [userId]);

  return (
    <div className="container">
      <h2 className="title title--list">Album List Page</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
};

function mapStateToProps({ albums }) {
  return { albumList: albums.albums };
}

const mapDispatchToProps = {
  getAlbums: fetchAlbumList,
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumListPage);
