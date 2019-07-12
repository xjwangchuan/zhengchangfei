<template>
  <div class="hello">
    <HeaderTitle 
      title='我的关注'
      :tit=true
      :btnLeft=true
      >
    </HeaderTitle>
  </div>
</template>

<script>
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'
export default {
  name: "FlightConcern",
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
