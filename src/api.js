import axios from "axios";

const api = axios.create({
  baseURL: "https://6515fcda09e3260018c95082.mockapi.io/musicas",
});

export default api;