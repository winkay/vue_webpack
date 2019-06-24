<template>
  <!-- <div>
    <div>Remote api test</div>
    <div>
      <h1>{{msg}}</h1>
    </div>
  </div> -->
  <el-form ref="remoteApiTestForm" v-model="remoteApiTestForm" v-loading="loading" @submit.native.prevent label-width="140px">
    <el-form-item label="输入你想对我说的话:">
      <el-input v-model="remoteApiTestForm.searchText" @keyup.enter.native="doSearch"></el-input>
    </el-form-item>
    <el-form-item label="结果:">
      <span>{{msg}}</span>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      loading:false,
      remoteApiTestForm:{
        searchText:""
      },
      msg: ''
    }
  },
  mounted() {
  },
  methods: {
    async doSearch() {
      let self = this;
      if (self.loading === true) {
        return;
      }
      self.loading = true;
      let res = await this.$axios({
        method: 'get',
        url: '/api/api.php?',
        params:{
          'key': 'free',
          'appid': 0,
          'msg': self.remoteApiTestForm.searchText
        },
        data:{}
      })
      // .then(function (res) {
      //   self.msg = JSON.stringify(res.data);
      // })
      if (res.data.result === 0) {
        self.msg = res.data.content;
      } else {
        self.msg = "api error"
      }
      self.loading = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
