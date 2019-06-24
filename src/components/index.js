import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';
// import IEcharts from 'vue-echarts-v3/src/full.js';
// import DataTable from './table/DataTable';
const iComponents = {
  Navbar: Navbar,
  Sidebar: Sidebar
  // IEcharts: IEcharts,
  // DataTable,
};

const install = function(Vue, opts = {}) {
  Object.keys(iComponents).forEach((key) => {
    Vue.component(key, iComponents[key]);
  });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const Components = Object.assign(iComponents, { install });
export default Components;