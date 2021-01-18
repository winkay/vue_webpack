<template>
  <el-menu
    :default-active="defaultActive"
    :unique-opened="true"
    :collapse="isCollapse"
    @select="handleSelectMenu">
    <sidebar-item v-for="menu in menus" :menu="menu" :key="menu.path" :base-path="menu.path"></sidebar-item>
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
      this.defaultActive = this.$route.matched[0].path;
    }
  },
  mounted() {
    this.menus = this.$store.getters.allRoutes.filter((menu) => {
      return !menu.hidden
    })
  },
  computed: {
    'allMenus':() => {
      let allRoutes = this.$store.getters.allRoutes.filter((menu) => {
        return !menu.hidden
      })
      return allRoutes;
    }
  },
  methods: {
    handleMenuOpen(index, indexPath) {
      // 展开菜单默认加载第一个子菜单
      let path = indexPath.join("/");
      this.getSubmenuPath(this.menus, index);
      let nestMenus = this.nestMenus;
      let openPath = path + "/" + nestMenus.children[0].path;
      this.$router.push({
        path: openPath,
        query: {
          __: +new Date()
        }
      });
    },
    handleSelectMenu(index, indexPath) {
      let path = index;
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
        if (item.path === path) {
          _this.nestMenus = item;
          return item;
        } else if (item.children && (item.children.length > 1 || (item.children.length === 1 && item.isNested))) { // 嵌套路由判断
          this.getSubmenuPath(item.children, path);
        }
      })
    }
  }
}
</script>
