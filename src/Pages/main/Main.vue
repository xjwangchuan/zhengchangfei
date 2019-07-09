<template>
    <div>
        <HeaderTitle 
        title="首页" 
        :tit=true
        :btnLeft=false
        :btnRight=false
        :sous=false
        :showRight=2
        >
        <van-icon slot="right2" name="arrow-left" />
        <span slot="right2">12</span>
        <!-- <span>22</span> -->
        </HeaderTitle>
        <div class="tab-contain">
          <div class="tab-select">
            <div class="tab-item" @click="tabChange(0)" :class="{'actives': tabActive==0}">
              <span class="tab-item-text" >出港放行正常率</span>
            </div>
            <div class="tab-item" @click="tabChange(1)" :class="{'actives': tabActive==1}">
              <span class="tab-item-text">始发放行正常率</span>
            </div>
            <div class="tab-item" @click="tabChange(2)" :class="{'actives': tabActive==2}">
              <span class="tab-item-text">总体执行情况</span>
            </div>
          </div>
        </div>
        <MainSwiper @changeEnd="changeEnd" :tabActive="tabActive" ref="changeAct"></MainSwiper>
        <footgudie></footgudie>
    </div>
</template>
<script>
import footgudie from '../../components/footer/FooterGuide'
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'
import MainSwiper from '../../components/MainSwiper'
export default {
  components:{
      footgudie,
      HeaderTitle,
      MainSwiper
  },
  data () {
    return {
      tabActive:0
    }
  },
  methods: {
    tabChange: function (i) {
      this.tabActive = i;
      this.$refs.changeAct.changeAc(i)
      
    },
    changeEnd:function (i) { 
      this.tabActive = i;
     }
  }
}
</script>
<style lang="stylus">
  .tab-contain
    padding 0.2rem 0.32rem 0 0.32rem
    .tab-select
      width 100%
      height 0.6rem
      line-height 0.6rem
      text-align center 
      color #e1e1e1
      border 1px solid currentcolor
      border-radius 0.5rem
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      transition: .15s;
      display flex
      .tab-item.actives
        color: #333;
        background-color: #f9f9fa;
      .tab-item
        flex 1
        color: #afb8bb;
        padding 0 0.1rem
        transition: .3s;
        font-size 0.25rem
      .tab-item:nth-child(2)
        border-left: 1px solid #e1e1e1;
        border-right: 1px solid #e1e1e1;


</style>

