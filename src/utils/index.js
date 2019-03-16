import Vue from 'vue';
import axios from "./axios";

const utils = {
  axios
};

Object.keys(utils).forEach((key, index) => {
  Vue.use(utils[key]);
});
