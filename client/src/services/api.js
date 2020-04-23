import axios from "axios";
import { getToken } from "./auth";
// console.log(getToken())
const headers = {
  'Content-Type': 'application/json',
  'x-access-token': getToken()
}
// console.log(headers)
const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: headers
})
// console.log(localStorage)
api.interceptors.request.use(async config => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;