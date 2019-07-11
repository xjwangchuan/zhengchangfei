<template>
    <div>
      <HeaderTitle 
          title="功能" 
          :tit=true
          >
          <van-icon slot="right2" name="arrow-left" />
          <span slot="right2">12</span>
          <!-- <span>22</span> -->
      </HeaderTitle>
      <footgudie></footgudie>
    </div>
</template>
<script>
import footgudie from '../../components/footer/FooterGuide'
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'
export default {
    components:{
      footgudie,
      HeaderTitle
    }
}
</script>
<style lang="stylus">
</style>

