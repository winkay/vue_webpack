<template>
  <div>
    <div class="hello">
      <h1>{{ msg }}</h1>
    </div>
    <div>auto reload test</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Loading......'
    }
  },
  mounted() {
    this.testAxios();
  },
  methods: {
    async testAxios() {
      let self = this;
      let res = await this.$axios({
        method: 'get',
        url: '/api/api.php?',
        params:{
          'key': 'free',
          'appid': 0,
          'msg': 'HelloWorld'
        },
        data:{}
      })
      // .then(function (res) {
      //   self.msg = JSON.stringify(res.data);
      // })
      self.msg = JSON.stringify(res.data);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
