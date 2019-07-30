<template>
  <div class="hello">
    <HeaderTitle 
      title='流控信息详情'
      :tit=true
      :btnLeft=true
      >
    </HeaderTitle>
  </div>
</template>

<script>
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'
export default {
  name: "FlowDetail",
  components: {
    HeaderTitle
  },
  data() {
    return {
      
    };
  }
};
</script>

<style lang="stylus" scoped>

</style>
