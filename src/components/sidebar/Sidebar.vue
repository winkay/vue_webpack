<template>
  <el-menu :default-active="defaultActive" :unique-opened="true" :collapse="isCollapse"
   @open="handleMenuOpen" @select="handleSelectMenu">
    <template v-for="menu in menus">
      <el-submenu :index="menu.key" :key="menu.key" v-if="menu.subMenus">
        <template slot="title">
          <i :class="[menu.meta.icon, iconSize]"></i>
          <span class="layout-text" :title="$t(menu.meta.title)">{{$t(menu.meta.title)}}</span>
        </template>
        <template v-for="subMenu in menu.subMenus">
          <el-menu-item :key="subMenu.key" :index="subMenu.key">
            <i :class="[subMenu.meta.icon]"></i>
            <span class="layout-text" :title="$t(subMenu.meta.title)">{{$t(subMenu.meta.title)}}</span>
          </el-menu-item>
        </template>
      </el-submenu>
      <el-menu-item :index="menu.key" :key="menu.key" v-else>
        <i :class="[menu.meta.icon, iconSize]"></i>
        <span slot="title" class="layout-text" :title="$t(menu.meta.title)">{{$t(menu.meta.title)}}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script>
import { routes, generateMenuFromRoutes } from '@/router/map/index'
export default {
  name:"Sidebar",
  props:{
    isCollapse:{
      type:Boolean,
      default:false
    },
    iconSize:{
      type:String,
      default:'icon-size-16'
    }
  },
  data() {
    return {
      defaultActive:"",
      menus:generateMenuFromRoutes(routes, [])
    }
  },
  watch: {
    // 切换页面
    '$route' (to, from) {
      this.defaultActive = (this.$route.matched[1] || this.$route.matched[0]).name;
      // if (from.matched.length && to.matched.length &&
      //   (from.matched[from.matched.length-1].path ===
      //     to.matched[to.matched.length-1].path)) {
      //   this.key = this.$route.name + +new Date();
      // }
    }
  },
  mounted() {
    // console.log(this.menus)
  },
  methods: {
    handleMenuOpen(name, keyPath) {
      // 展开菜单默认加载第一个子菜单
      let path = "";
      this.menus.some((item, index) => {
        path = "";
        if (!item.key) {
          return false;
        }
        if (name === item.key) {
          path += item.path || "";
          (item.subMenus || []).some((menu, key) => {
            path += "/" + menu.path || "";
            return true;
          });
          return true;
        }
        return false;
      });

      this.$router.push({
        path: path,
        query: {
          __: +new Date()
        }
      });
    },
    handleSelectMenu(name, keyPath) {
      let path = "";
      this.menus.some((item, index) => {
        path = "";
        if (!item.key) {
          return false;
        }
        if (name === item.key) {
          path = item.path || "";
          return true;
        }

        path += item.path || "";
        let flg = false;
        (item.subMenus ||[]).forEach((menu, key) => {
          if (name === menu.key) {
            path += "/" + menu.path || "";
            flg = true;
          }
        });
        if (flg) {
          return true;
        }
        return false;
      });

      this.$router.push({
        path: path,
        query: {
          __: +new Date()
        }
      });
    }
  }
}
</script>
