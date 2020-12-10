<template src="./login.html"></template>
<style scoped src="./login.css"></style>
<script>
import {setToken} from '@/utils/token'
export default {
  data() {
    return {
      loginError:"",
      formInline: {
        account: 'admin',
        password: '111111'
      },
      ruleInline: {
        account: [
          { required: true, message: '用户名不能为空白', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空白', trigger: 'blur' }
        ]
      },
      language: this.$cookie.get('language') || 'zh',
      loading: false,
      verifyError:""
    }
  },
  mounted() {
  },
  methods: {
    changeLanguage(language) {
      this.language = language;
      this.$cookie.set('language', language, {expires:'365D'});
      this.$i18n.locale = language;
      document.location.reload();
    },
    handleSubmit() {
      var self = this;
      this.$refs.form.validate((valid) => {
        if (!valid) { return; }
        self.loginError = "";
        self.verifyError = "";
        self.loading = true;
        self.$axios({
          method: 'post',
          url: '/api/login',
          data: {
            "account": self.formInline.account,
            "password": self.formInline.password
          }
        }).then((response) => {
          self.loading = false;
          let result = response.data;
          setToken(result.token)
          // self.$cookie.set('token', result.token);
          // self.$cookie.set('role', result.role);
          this.$router.push({
            path:'/'
          })
        }).catch((e) => {
          self.loading = false;
        });
      });
    }
  }
}
</script>
