<template>
  <div class="hello">
    <HeaderTitle 
      title='流控信息'
      :tit=true
      :btnLeft=true
      :sous=true
      placeholder="请输入流控原因，内容，发布者进行搜索"
      >
    </HeaderTitle>
    <div>
      <ul class="myul bc-bg">
        <li class="myli bg-white" @click="unclick(item,index)">
          <div class="top">
            <div class="top-bg"></div>
            <div class="top-div">
              <div class="fz-sm">军事活动 | 0403</div>
            </div>
          </div>
          <div class="center pd-10-lr fz-md">( 华北CDM统一放行：深圳落地出OBLIK 15分钟一架,北京起飞不受限 30分钟2架,最小间隔8分钟(备注：国际不限) ) ZH ZS ZBHD 起飞  过 OBLIK 落 ZGSZ  申请</div>
          <div class="bot pd-10-lr fz-sm">
            <span class="">发布者：广州</span>
            <span class="">影响时间：08:20 --- 10:00</span>
          </div>
        </li>
                <li class="myli bg-white" @click="unclick(item,index)">
          <div class="top">
            <div class="top-bg"></div>
            <div class="top-div">
              <div class="fz-sm">军事活动 | 0403</div>
            </div>
          </div>
          <div class="center pd-10-lr fz-md">( 华北CDM统一放行：深圳落地出OBLIK 15分钟一架,北京起飞不受限 30分钟2架,最小间隔8分钟(备注：国际不限) ) ZH ZS ZBHD 起飞  过 OBLIK 落 ZGSZ  申请</div>
          <div class="bot pd-10-lr fz-sm">
            <span class="">发布者：广州</span>
            <span class="">影响时间：08:20 --- 10:00</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'
export default {
  name: "FlowList",
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
  .myli:before, .myli:after
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 1px;
    background-color: #e1e1e1;
    -webkit-transform: scaleY(0.33);
    transform: scaleY(0.33);
  .myli:before
    top: 0;
    z-index: 1;
  .myli:after
    bottom: 0; 
  .myli:first-child
    margin-top: 0;   
  .myli
    margin: 0.1rem 0;
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    text-align: left;
    .top
      position: relative;
      display: inline-block;
      min-width: 1.6rem;
      max-width: 90%;
      text-align: center;
      .top-bg
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: -20px;
        background-color: #9c2d4f;
        // -webkit-transform: skewX(160deg);
        transform: skewX(160deg);
        border-radius: 0 0 9px 0;
      .top-div
        position: relative;
        div
          color: white;
          padding: 0.1rem 0.1rem;  
    .center
      overflow:hidden; 
      text-overflow:ellipsis;
      // white-space:nowrap;
      display: -webkit-box;
      -webkit-box-orient: vertical;  
      -webkit-line-clamp: 2;
      line-height: 1.2;
      margin: 0.1rem;   
      font-size 0.35rem
    .bot
      padding: 0.1rem;
      color: #cccccc;   
      font-size 0.27rem
    .bot :last-child
      float right   
</style>
