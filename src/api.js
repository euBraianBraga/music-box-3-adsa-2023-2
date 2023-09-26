import axios from "axios";

const api = axios.create({
  baseURL: "suaUrlMockAPI/musicas",
});

export default api;