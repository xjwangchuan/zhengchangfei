<template>
  <div class="hello">
    <HeaderTitle 
      title='流控信息详情'
      :tit=true
      :btnLeft=true
      >
    </HeaderTitle>
    <div class="bc-bg">
      <div class="top bg-white pd-lr">
        <div class="title fz-lg">( 华北CDM统一放行：深圳落地出OBLIK 15分钟一架,北京起飞不受限 30分钟2架,最小间隔8分钟(备注：国际不限) ) ZH ZS ZBHD 起飞  过 OBLIK 落 ZGSZ  申请</div>
        <div class="content">
          <div class="ub model">
            <span class="ub firstspan">发布者</span>
            <span class="ub ub-f1">广州</span>
          </div>
          <div class="ub model">
            <span class="ub firstspan">发布时间</span>
            <span class="ub ub-f1">09:43</span>
          </div>
          <div class="ub model">
            <span class="ub firstspan">影响时间</span>
            <span class="ub ub-f1">08:00 -- 22:00</span>
          </div>
          <div class="ub model">
            <span class="ub firstspan">原因</span>
            <span class="ub ub-f1">军事活动 | 0403</span>
          </div>
          <div class="ub model">
            <span class="ub firstspan">生效</span>
            <span class="ub ub-f1">生效</span>
          </div>
        </div>
      </div>
      <div class="center pd-lr">影响航班</div>
      <div class="bottom fz-md ub ub-f1 bg-white pd-lr">
        <ul class="myul">
          <li class="otherli ub">
            <span>01</span>
            <span class="myspan">CZ6335</span>
            <span class="area">郑州——广州</span>
            <div class="lastspan">
              <img src="./img/g-goto.png" alt="">
            </div>
          </li>
        </ul>
      </div>
    </div>
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
@import '../../common/style/mixin.styl';
  .top
    padding 0.2rem 0.32rem
    .title
      font-weight: 500;
      border-bottom: 2px dashed #cccccc;
      padding: 0.2em 0;
      font-size 0.35rem
      text-align: left;
    .content
      padding: 0.2rem 0;  
      .model :last-child
        color: rgba(51, 51, 51, 0.64)
        flex 1
      .model
        padding: 0.1rem 0;
        display flex
        text-align left
        font-size 0.35rem
        .firstspan
          vertical-align: middle;
          width 2rem
          text-align left
  .center
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    font-size 0.35rem
    text-align left
    padding 0.1rem 0.32rem
  .bottom
    overflow: hidden;
    overflow-y: scroll;
    // border-bottom: 1px solid #cccccc;
    font-size 0.35rem
    .myul
      width: 100%;
      .otherli
        padding: 0.1rem 0;
        text-align left
        border-bottom: 1px solid #cccccc;
        display flex
        span 
          display: inline-block;
          vertical-align: middle;
        .myspan
          width: 1.3rem;
          padding: 0 0.3rem;  
        .area
          text-over()
          flex 1 
        .lastspan
          // padding-right: 0.2rem;
          vertical-align: baseline;
          img 
            width 0.6rem

</style>
