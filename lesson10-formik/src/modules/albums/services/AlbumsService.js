import api from "../../../api";

export const getAlbumList = (path) => api.get(path).then((resp) => resp.data);

export const getPhotoList = (path) => api.get(path).then((resp) => resp.data);
