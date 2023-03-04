import {
  getAlbumList,
  getPhotoList,
} from "../../modules/albums/services/AlbumsService";

export const ACTION_SET_ALBUM_LIST = "ACTION_SET_ALBUM_LIST";
export const ACTION_SET_PHOTO_LIST = "ACTION_SET_PHOTO_LIST";

export const fetchAlbumList = (path) => {
  return (dispatch) => {
    getAlbumList(path).then((albumList) => {
      dispatch({
        type: ACTION_SET_ALBUM_LIST,
        payload: albumList,
      });
    });
  };
};

export const fetchPhotoList = (path) => {
  return (dispatch) => {
    getPhotoList(path).then((photoList) => {
      dispatch({
        type: ACTION_SET_PHOTO_LIST,
        payload: photoList,
      });
    });
  };
};
