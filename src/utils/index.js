import Vue from 'vue';
import axios from "./axios";
import vueBackTop from "./vueBackTop";

const utils = {
  axios,
  vueBackTop
};

Object.keys(utils).forEach((key, index) => {
  Vue.use(utils[key]);
});
