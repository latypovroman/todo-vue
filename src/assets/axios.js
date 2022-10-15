import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://demo.telminov.ru:8082/",
});

export default axiosInstance;
