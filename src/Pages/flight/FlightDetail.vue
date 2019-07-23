<template>
  <div class="flightDetail">
    <HeaderTitle 
      :title="title"
      :tit=true
      :btnLeft=true
      >
    </HeaderTitle>
    <div class="detail">
      <div class="main-content">
        
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'
export default {
  name: "FlightDetail",
  components: {
    HeaderTitle
  },
  data() {
    return {
      title:'cz25145'
    };
  },
  methods:{

  }

};
</script>

<style lang="stylus" scoped>

</style>
