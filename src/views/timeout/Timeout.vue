<template src="./timeout.html"></template>
<style src="./timeout.css"></style>
<script>
export default {
  data() {
    return {
      time: 5,
      timeoutFlg: false
    };
  },
  mounted() {
    this.timeoutFlg = true;
    this.time = 5;
    let timeoutinterval = setInterval(() => {
      if (this.time < 1) {
        this.$router.push({
          path: "/login"
        });
      } else {
        this.time = this.time - 1;
      }
    }, 1000);
    this.$once("hook:beforeDestory", () => {
      timeoutinterval && clearInterval(timeoutinterval);
      timeoutinterval = null;
    });
  },
  methods: {
    quickEnter() {
      this.$router.push({
        path: "/login"
      });
    }
  }
};
</script>
