<template>
  <el-container class="layout">
    <!-- 顶部导航栏 -->
    <el-header class="layout-header">
      <div class="layout-header-image" style="width:200px">
        <div class="layout-logo">
          <span>Vue Webpack</span>
          <!-- <img src="./assets/img/logo.png"/> -->
        </div>
      </div>
      <div class="layout-header-menus">
        <navbar></navbar>
      </div>
    </el-header>
    <el-container class="layout-content">
      <!-- 左侧导航栏 -->
      <el-aside width="200px" class="layout-sidebar layout-transition">
        <sidebar></sidebar>
      </el-aside>
      <!-- 内容区 -->
      <el-main class="layout-content-main">
          <div class="layout-content-workspace">
            <transition name="slide-fade" mode="out-in">
              <router-view :key="key"/>
            </transition>
          </div>
      </el-main>
    </el-container>
    <!-- set progressbar -->
    <vue-progress-bar></vue-progress-bar>
  </el-container>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      key:""
    };
  },
  watch: {
    // 切换页面
    '$route' (to, from) {
      // this.defaultActive = (this.$route.matched[0] || this.$route.matched[1]).name;
      if (from.matched.length && to.matched.length &&
        (from.matched[from.matched.length-1].path ===
          to.matched[to.matched.length-1].path)) {
        this.key = this.$route.name + +new Date();
      }
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
