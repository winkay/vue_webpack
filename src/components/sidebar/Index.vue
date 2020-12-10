<template>
  <el-menu
    :default-active="defaultActive"
    :unique-opened="true"
    :collapse="isCollapse"
    @open="handleMenuOpen"
    @select="handleSelectMenu">
    <sidebar-item v-for="menu in menus" :menu="menu" :key="menu.meta.key" :base-path="menu.path"></sidebar-item>
  </el-menu>
</template>
<script>
import SidebarItem from './SidebarItem'
export default {
  name:"Index",
  components:{
    SidebarItem
  },
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
      menus:[],
      nestMenus:{}
    }
  },
  watch: {
    // 切换页面
    '$route' (to, from) {
      // this.defaultActive = (this.$route.matched[1] || this.$route.matched[0]).name;
      // if (from.matched.length && to.matched.length &&
      //   (from.matched[from.matched.length-1].path ===
      //     to.matched[to.matched.length-1].path)) {
      //   this.key = this.$route.name + +new Date();
      // }
      this.defaultActive = this.$route.meta.key;
    }
  },
  mounted() {
    this.menus = this.$store.getters.allRoutes.filter((menu) => {
      return !menu.hidden
    })
    console.log('allmenus========', this.menus)
  },
  methods: {
    handleMenuOpen(index, indexPath) {
      // 展开菜单默认加载第一个子菜单
      let path = "/" + indexPath.join("/");

      this.getSubmenuPath(this.menus, index);
      let nestMenus = this.nestMenus;
      let openPath = path + "/" + nestMenus.subMenus[0].path;
      this.$router.push({
        path: openPath,
        query: {
          __: +new Date()
        }
      });
    },
    handleSelectMenu(index, indexPath) {
      let path = index;
      if (indexPath.length >= 1) {
        path = "/" + indexPath.join("/");
      }
      this.$router.push({
        path: path,
        query: {
          __: +new Date()
        }
      });
    },
    getSubmenuPath(menus, path) {
      let _this = this;
      menus.forEach(item => {
        if (item.meta.key === path) {
          _this.nestMenus = item;
          return item;
        } else if (item.subMenus && item.subMenus.length > 0) {
          this.getSubmenuPath(item.subMenus, path);
        }
      })
    }
  }
}
</script>
