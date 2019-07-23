<template>
    <div class="bc-bg">
      <HeaderTitle 
          title="功能" 
          :tit=true
          >
          <van-icon slot="right2" name="arrow-left" />
          <span slot="right2">12</span>
          <!-- <span>22</span> -->
      </HeaderTitle>
      <div class="banner">
          
      </div>
      <div class="option-list bg-white">
        <div class="option-type pd-lr">
          <div class="option-title">
            <span class="fc-title fc-md">运营实况</span>
          </div>
          <div class="option-box">
            <div class="option-item">
              <div class="option-icon">
                <i class="icon-30-flowControl"></i>
              </div>
              <div class="option-item-text">
                <span>流控信息</span>
              </div>
            </div>
            <div class="option-item">
              <div class="option-icon">
                <i class="icon-30-releaseObserve"></i>
              </div>
              <div class="option-item-text">
                <span>正常性监控</span>
              </div>
            </div>
            <div class="option-item">
              <div class="option-icon">
                <i class="icon-30-weather"></i>
              </div>
              <div class="option-item-text">
                <span>跑道气象</span>
              </div>
            </div>            
          </div>
        </div>
        <!-- <div class="option-type pd-lr">
          <div class="option-title">
            <span class="fc-title fc-md">值班</span>
          </div>
          <div class="option-box">
            <div class="option-item">
              <div class="option-icon">
                <i class="icon-30-flowControl"></i>
              </div>
              <div class="option-item-text">
                <span>流控信息</span>
              </div>
            </div>
            <div class="option-item">
              <div class="option-icon">
                <i class="icon-30-flowControl"></i>
              </div>
              <div class="option-item-text">
                <span>流控信息</span>
              </div>
            </div>
          </div>
        </div>
        <div class="option-type pd-lr">
          <div class="option-title">
            <span class="fc-title fc-md">任务</span>
          </div>
          <div class="option-box">
            <div class="option-item">
              <div class="option-icon">
                <i class="icon-30-flowControl"></i>
              </div>
              <div class="option-item-text">
                <span>流控信息</span>
              </div>
            </div>
          </div>
        </div> -->
      </div>
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
@import './icon.styl';
  .banner
    height: 2.36rem;
    background: url(./img/banner.png) center no-repeat #f6f7f9;
    background-size: auto 100%;
    margin-bottom 0.2rem
  .option-list
    background-color #fff
    color #333  
    position relative  
    .option-type
      position: relative;
      .option-title
        height: 0.94rem;
        line-height: 0.94rem;
        span 
          font-size 0.35rem
          text-align left
          display block
      .option-box
        height 1.6rem
        position relative
        .option-item:after
          margin-top 0.2rem
          left 0.3rem
          right 0.3rem
          content: '';
          position: absolute;
          z-index: 1;
          height: 1px;
          -webkit-transform: scaleY(0.33);
          transform: scaleY(0.33);
          background-color: #E1E1E1; 
        .option-item
          float: left;
          width: 25%;
          margin-bottom: 0.32rem;
          .option-icon
            position: relative;
          .option-item-text
            margin-top: 0.25em;
            text-align: center;
    .option-type:first-of-type:before
      left 0
      right 0
      content: '';
      position: absolute;
      z-index: 1;
      height: 1px;
      -webkit-transform: scaleY(0.33);
      transform: scaleY(0.33);
      background-color: #E1E1E1;
</style>

