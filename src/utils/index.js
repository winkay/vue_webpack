import Vue from 'vue';
import axios from "./axios";
import vueBackTop from "./vueBackTop";
import vueGlobal from "./vueGlobal";

const utils = {
  axios,
  vueBackTop,
  vueGlobal
};

Object.keys(utils).forEach((key, index) => {
  Vue.use(utils[key]);
});
