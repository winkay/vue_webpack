// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "./assets/styles/index.css"
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import "./utils/index";
import VueCookie from 'vue-cookie';
import i18n from "./i18n"; // 国际化

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(VueCookie);

// 修改element-dialog默认配置
ElementUI.Dialog.props.closeOnClickModal.default = false;
// form表单label位置默认设置
ElementUI.Form.props.labelPosition.default = "right";

document.title = i18n.t('lang.mainTitle')
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
