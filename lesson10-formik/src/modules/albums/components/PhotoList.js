import React from "react";

const PhotoList = ({ photoList }) => {
  return (
    <ul className="photo-list">
      {photoList.map((item) => (
        <li className="photo-list__item" key={item.id}>
          <img
            className="photo-list__img"
            src={`${item.thumbnailUrl}`}
            alt={item.title}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
