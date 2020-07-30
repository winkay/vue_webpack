<template src="./login.html"></template>
<style src="./login.css"></style>
<script>
import i18n from '@/i18n';
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
          { required: true, message: i18n.t('login.userNameWarn'), trigger: 'blur' }
        ],
        password: [
          { required: true, message: i18n.t('login.passwordWarn'), trigger: 'blur' }
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
          contentType: "application/json",
          url: '/api/login',
          data: {
            "account": self.formInline.account,
            "password": self.formInline.password
          }
        }).then((response) => {
          self.loading = false;
          let result = response.data;
          self.$cookie.set('token', result.token);
          self.$cookie.set('role', result.role);
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
