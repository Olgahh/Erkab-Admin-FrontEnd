import axios from "axios";

const instance = axios.create({
  baseURL: "http://142.93.163.73",
});

export default instance;
