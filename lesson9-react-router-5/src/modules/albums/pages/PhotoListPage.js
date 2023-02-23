import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPhotoList } from "../../../store/actions/albums";
import PhotoList from "../components/PhotoList";

const PhotoListPage = ({ photoList, getPhotos }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const albumId = searchParams.get("albumId");
  const photosPath = `photos?albumId=${albumId}`;

  useEffect(() => {
    getPhotos(photosPath);
  }, []);

  return (
    <div className="container">
      <h2 className="title title--list">Photo List Page</h2>
      <PhotoList photoList={photoList} />
    </div>
  );
};

function mapStateToProps({ albums }) {
  return { photoList: albums.photos };
}

const mapDispatchToProps = {
  getPhotos: fetchPhotoList,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoListPage);
