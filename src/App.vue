<template>
  <el-container class="layout">
    <el-header class="layout-header">
      <div class="layout-header-image" style="width:200px">
        <div class="layout-logo">
          <!-- <img src="./assets/img/logo.png"/> -->
        </div>
      </div>
      <div class="layout-header-menus">
        <el-menu :default-active="operationIndex"  class="el-menu--transparent skin" mode="horizontal"
          @select="onOperationSelect" menu-trigger="hover" active-text-color="#FFFFFF" background-color="#2d2e3b">
          <template v-for="menu in operationMenus">
            <el-submenu :index="menu.key" v-if="menu.flg&&menu.subMenus" :key="menu.key">
              <template slot="title">
                <i :class="[menu.iconType, iconSize]"></i>
                <span>{{menu.name}}</span>
              </template>
              <template v-for="subMenu in menu.subMenus">
                <el-menu-item :key="subMenu.key" :index="subMenu.key" v-if="subMenu.flg">
                  <span v-if="subMenu.style" :class="[subMenu.style, subMenu.isActive ? 'active' : '']">
                    <i v-if="subMenu.isActive" :class="{'fa-check':true, 'active': subMenu.isActive}"></i>
                  </span>
                  <span v-if="subMenu.name">{{subMenu.name}}</span>
                </el-menu-item>
              </template>
            </el-submenu>
            <el-menu-item :index="menu.key" v-if="menu.flg&&!menu.subMenus" :key="menu.key">
                <i :class="[menu.iconType, iconSize]"></i>
                <span>{{menu.name}}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </div>
    </el-header>
    <el-container class="layout-content">
      <el-aside width="200px" class="layout-sidebar layout-transition">
        <el-menu :default-active="defaultActive" :unique-opened="true" @open="handleOpenMenu" @select="handleSelectMenu">
          <el-submenu index="1">
            <template slot="title"><i class="fa-envelope-o"></i>导航一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="fa-bars"></i>导航二</template>
            <el-menu-item index="2-1">选项3</el-menu-item>
            <el-menu-item index="2-2">选项4</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="layout-content-main">
          <div class="layout-content-workspace">
            <transition name="slide-fade" mode="out-in">
              <router-view/>
            </transition>
          </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      defaultActive:"1-1",
      operationIndex: this.$cookie.get('language')||"zh",
      iconSize: "icon-size-14",
      operationMenus: [{
        flg: true,
        key: "zh",
        iconType: "",
        name: '中文'
      }, {
        flg: true,
        key: "en",
        iconType: "",
        name: 'En'
      }]
    };
  },
  methods: {
    handleOpenMenu(key, keyPath) {
      this.defaultActive = key + "-1"
    },
    handleSelectMenu(key, keyPath) {
      // console.log(key, keyPath)
    },
    onOperationSelect(index, indexPath, vm) {
      switch (index) {
        case 'zh':
        case 'en':
          this.$cookie.set('language', index);
          this.$i18n.locale = index;
          document.location.reload();
          break;
      }
    }
  }
}
</script>

<style>
</style>
