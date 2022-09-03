import axios from "axios";

const instanceAxios = axios.create({
  baseURL: 'https://630e1c50b37c364eb71320a5.mockapi.io',
  withCredentials: false,
});

export default instanceAxios;
