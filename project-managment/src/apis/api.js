import axios from "axios";

// Create General Axios Request..
const BaseApi = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 500000, // request timeout
});

const Api = function () {
  BaseApi.defaults.headers.common["Accept"] = `application/json`;
  BaseApi.defaults.headers.common["Content-Type"] = `application/json`;
  BaseApi.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

  return BaseApi;
};

BaseApi.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
BaseApi.interceptors.response.use(
  async function (config) {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Api;