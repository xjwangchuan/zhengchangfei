<template>
  <div class="hello">
    <HeaderTitle 
      title='航班查询'
      :tit=true
      :btnLeft=true
      >
    </HeaderTitle>
    <div>
      <div class="lists-box bg-white">
          <div class="lists-item pd-lr">
              <div class="lists-item-title">
                  <span class="">航班号</span>
              </div>
              <div class="lists-item-center">
                  <!-- <span class="fz-md"></span> -->
                  <input type="text" class="" placeholder="CZ3101"/>
              </div>
          </div>
          <div class="lists-item pd-lr">
              <div class="lists-item-title">
                  <span class="">航空公司</span>
              </div>
              <div class="lists-item-center">
                  <!-- <span class="fz-md"></span> -->
                  <input type="text" class="" placeholder="请输入航空公司"/>
              </div>
          </div>
          <div class="lists-item pd-lr">
              <div class="lists-item-title">
                  <span class="">机号</span>
              </div>
              <div class="lists-item-center">
                  <!-- <span class="fz-md"></span> -->
                  <input type="text" class="" placeholder="请输入机号"/>
              </div>
          </div>
          <div class="lists-item pd-lr">
              <div class="lists-item-title">
                  <span class="">机型</span>
              </div>
              <div class="lists-item-center">
                  <!-- <span class="fz-md"></span> -->
                  <input type="text" class="" placeholder="请输入机型"/>
              </div>
          </div>
          <div class="lists-item pd-lr">
              <div class="lists-item-title">
                  <span class="">登记口</span>
              </div>
              <div class="lists-item-center">
                  <!-- <span class="fz-md"></span> -->
                  <input type="text" class="" placeholder="请输入登机口"/>
              </div>
          </div>
          <div class="lists-item pd-lr">
              <div class="lists-item-title">
                  <span class="">起飞城市</span>
              </div>
              <div class="lists-item-center">
                  <!-- <span class="fz-md"></span> -->
                  <input type="text" class="" placeholder="请输入城市或机场名称"/>
              </div>
          </div>
          <div class="lists-item pd-lr">
              <div class="lists-item-title">
                  <span class="">到达城市</span>
              </div>
              <div class="lists-item-center">
                  <!-- <span class="fz-md"></span> -->
                  <input type="text" class="" placeholder="请输入城市或机场名称"/>
              </div>
          </div>
      </div>
    </div>
    <div class="footer">
      <button class="btn">
        <span>航班查询</span>
      </button>
    </div>
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
  .hello
    position relative
    .lists-item
      border-bottom: 1px solid #E1E1E1;
      height: 0.88rem;
      line-height 0.88rem
      .lists-item-title
        display inline-block
        width: 1.6rem;
        text-align left
        margin-left -1rem
        color: #333;
        span 
          font-size 0.32rem
          vertical-align: middle;
      .lists-item-center  
        display inline-block  
        color: #999;
        // overflow: hidden;
        // white-space: nowrap;
        // text-overflow: ellipsis;
        input 
          font-size 0.3rem
          border-bottom: 1px solid #e1e1e1
    .footer
      box-sizing border-box
      position: fixed;
      bottom: 0;
      z-index: 1000;
      min-height: 0.32rem; 
      width 100%
      font-size 0.4rem
      display block
      padding 0.3rem 0.3rem
      border-top 1px solid #e1e1e1
      .btn
        width 100%
        height: 0.8rem;
        text-align: center;
        border: 1px solid transparent;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: block;
        vertical-align: middle;
        position: relative;
        border-radius 0.4rem
        transition: .15s;
        background: linear-gradient(to right, #da211c 0%,#802285 100%);
        span
          color #fff
          vertical-align: middle;
</style>