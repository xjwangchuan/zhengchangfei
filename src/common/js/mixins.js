export const gobackMixin = {
  methods:{
    goback(){
      this.$router.go(-1);
    }
  }
}