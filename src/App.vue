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
      <el-aside :width="sidebarWidth" class="layout-sidebar layout-transition" :class="{'layout-hide-text':isCollapse}">
        <sidebar :isCollapse="isCollapse" :iconSize="iconSize"></sidebar>
      </el-aside>
      <!-- 内容区 -->
      <el-main class="layout-content-main" :style="mainContentStyle" :class="{'layout-hide-text':isCollapse}">
        <div class="layout-content-header">
          <el-button type="text" :class="{active: isCollapse}" size="large" icon="fa-bars"
          style="font-size:20px; transition:all .4s ease-in-out" @click="toggleCollapse"></el-button>
        </div>
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
      key:"",
      isCollapse:false,
      iconSize:"icon-size-16",
      sidebarWidth:this.$cookie.get("language") === "en"?"220px":"200px",
      mainContentStyle:{
        left:this.$cookie.get("language") === "en"?"220px":"200px"
      }
    };
  },
  watch: {
    // 切换页面
    '$route' (to, from) {
      this.key = this.$route.path + +new Date();
    }
  },
  methods: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
      this.iconSize = this.isCollapse?"icon-size-20":"icon-size-16";
      if (this.isCollapse) {
        this.sidebarWidth = "";
        this.mainContentStyle = {};
      }
    }
  }
}
</script>

<style>
</style>
