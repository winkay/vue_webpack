<template>
  <el-submenu :index="menu.meta.key" v-if="menu.subMenus && menu.subMenus.length > 0">
    <template slot="title">
      <i :class="[menu.meta.icon, iconSize]"></i>
      <span class="layout-text" :title="$t(menu.meta.title)">{{$t(menu.meta.title)}}</span>
    </template>
    <!-- <template v-for="subMenu in menu.subMenus">
      <el-menu-item :key="subMenu.path" :index="subMenu.path">
        <i :class="[subMenu.meta.icon]"></i>
        <span class="layout-text" :title="$t(subMenu.meta.title)">{{$t(subMenu.meta.title)}}</span>
      </el-menu-item>
    </template> -->
    <sidebar-item v-for="subMenu in menu.subMenus" :menu="subMenu" :key="subMenu.path" :base-path="resolvePath(subMenu.path)"></sidebar-item>
  </el-submenu>
  <el-menu-item :index="menu.meta.key" v-else>
    <i :class="[menu.meta.icon, iconSize]"></i>
    <span slot="title" class="layout-text" :title="$t(menu.meta.title)">{{$t(menu.meta.title)}}</span>
  </el-menu-item>
</template>
<script>
import path from 'path'
export default {
  name:"SidebarItem",
  props:{
    menu:{
      type:Object,
      default:() => {
        return {};
      }
    },
    iconSize:{
      type:String,
      default:'icon-size-16'
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
    }
  },
  mounted() {
    // console.log(this.menus)
  },
  methods: {
    resolvePath(routePath) {
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>
