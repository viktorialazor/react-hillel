import api from "../../../api";

export const getUserList = () => api.get("users").then((resp) => resp.data);

export const getUserDetails = (id) =>
  api.get(`users/${id}`).then((resp) => resp.data);

export const createUser = (user) =>
  api.post("users", user).then((resp) => resp.data);

export const updateUser = (id, user) =>
  api.put(`users/${id}`, user).then((resp) => resp.data);

export const deleteUser = (id) =>
  api.delete(`users/${id}`).then((resp) => resp.data);
