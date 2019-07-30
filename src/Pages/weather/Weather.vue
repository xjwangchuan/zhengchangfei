<template>
  <div class="weather">
    <HeaderTitle 
      title='跑道气象'
      :tit=true
      :btnLeft=true
      >
    </HeaderTitle>
  </div>
</template>

<script>
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'
export default {
  name: "Weather",
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
