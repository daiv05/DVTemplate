import axios from "axios";
import store from "../store";
import router from "../router";
import { notify } from "@kyvg/vue3-notification";
import Vue from "vue";

const _axios = axios.create({
  baseURL: process.env.BASE_API_URL,
  timeout: 10000,
});

_axios.interceptors.request.use(
  function (config) {
    const token = store.state.token
      ? store.state.token
      : localStorage.getItem("token");

    if (token) config.headers.Authorization = "Bearer " + token;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

_axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const statusCode = error.response.status;
    if (statusCode >= 500) {
      notify({
        type: "error",
        text: "Error en el servidor, por favor intenta más tarde",
      });
    }
    if (statusCode === 400) {
      notify({
        type: "error",
        text: "Error en la petición, por favor revisa los datos",
      });
    }
    if (statusCode === 401) {
      notify({
        type: "error",
        text: "Sesión expirada, por favor inicie sesión nuevamente",
      });
    }
    if (statusCode === 403) {
      notify({
        type: "error",
        text: "No tienes permisos para realizar esta acción",
      });
    }

    const refreshToken = store.state.refreshToken
      ? store.state.refreshToken
      : localStorage.getItem("refreshToken");

    const token = store.state.token
      ? store.state.token
      : localStorage.getItem("token");

    const response = await axios.post(
      process.env.BASE_API_URL + "/refresh",
      {
        refreshToken: refreshToken,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (response.status === 200) {
      const token_1 = response.data.token;
      const refreshToken_1 = response.data.refresh_token;
      localStorage.setItem("token", token_1);
      localStorage.setItem("refreshToken", refreshToken_1);
      store.commit("setToken", token_1);
      error.response.config.headers["Authorization"] = "Bearer " + token_1;
      return axios(error.response.config);
    }

    return Promise.reject(error);
  }
);

export default {
  install: (app) => {
    app.config.globalProperties.$axios = _axios;
  },
};
