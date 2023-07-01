/*
 * @Author: heinan
 * @Date: 2021-08-02 16:56:54
 * @Last Modified by: heinan
 * @Last Modified time: 2021-08-04 11:19:10
 */
import axios from "axios";
import { Toast } from "vant";

const request = axios.create();

request.interceptors.request.use(
  (config) => {
    config.headers.authorization = localStorage.getItem("token") || "";
    return config;
  },
  (err) => {
    return err;
  }
);

request.interceptors.response.use(
  (config) => {
    return config;
  },
  (err) => {
    if (err.response.status === 401) {
      Toast.fail({
        message: err.response.data.msg,
        onClose() {
          window.location.href = "/login";
        },
      });
    }
    return Promise.reject(err.response);
  }
);

export default request;
