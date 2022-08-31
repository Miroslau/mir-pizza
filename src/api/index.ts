import axios from "axios";

const instanceAxios = axios.create({
  baseURL: process.env.REACT_APP_DOMAIN,
  withCredentials: true,
});

export default instanceAxios;
