<template>
  <div class="hello">
    <HeaderTitle 
      title='航班查询'
      :tit=true
      :btnLeft=true
      >
    </HeaderTitle>
  </div>
</template>

<script>
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'
export default {
  name: "FlightSearch",
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
