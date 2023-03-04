import React from "react";
import { Link } from "react-router-dom";

const AlbumList = ({ albumList }) => {
  const ptotosPath = `photos?albumId=`;

  return (
    <ol className="album-list">
      {albumList.map((item) => (
        <li className="album-list__item" key={item.id}>
          <Link to={`${ptotosPath}${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </ol>
  );
};

export default AlbumList;
