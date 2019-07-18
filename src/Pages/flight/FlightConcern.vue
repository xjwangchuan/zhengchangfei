<template>
  <div class="hello">
    <HeaderTitle 
      title='我的关注'
      :tit=true
      :btnLeft=true
      >
    </HeaderTitle>
    <div class="content bc-content">
      <ul>
        <li class="bg-white">
          <div class="right">
            <div class="right-t">
              <div class="right-t-l">
                <img src="./img/gbiac.png" alt="">
                <div class="">
                  <p>&nbsp;SC8083&nbsp;&nbsp;<p1 style="color: #e3e3e3">|</p1>&nbsp;&nbsp;&nbsp;机位&nbsp;240</p>
                </div>
              </div>
            </div>
            <div class="right-b">
              <div class="b1">
                <h2>厦门</h2>
                <p1 class="p1">计划时间</p1>
                <p2 class="p2">07:25</p2>
              </div>
              <div class="deco-box"><div class="deco-bar"></div></div>
              <div class="b3">
                <h2>郑州</h2>
                <p2 class="p2">09:34</p2>
                <p1 class="p1">实际时间</p1>
              </div>
            </div>
            <div class="reson">
              <p>到达&nbsp;&nbsp;<span style="color: #e3e3e3">|</span>&nbsp;&nbsp;比计划早到6分</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
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
  .content
    height 100%
    ul
      width 100%
      li  
        border: 1px solid #e1e1e1;
        margin: 0.25rem;
        border-radius: .1rem;
        box-shadow: 0 0.1rem 0.2rem rgba(0,0,0,0.1);
        .right
          padding 0 0.25rem
          .right-t
            width: 100%;
            height: 0.68rem;
            position: relative;
            .right-t-l
              float: left;
              display: inline-block;
              height: 0.68rem;
              line-height: 0.68rem;
              img 
                display: inline-block;
                height: 0.38rem;
                top 0.2rem
                vertical-align: middle;
              div 
                display inline-block
                text-align: center;
                font-size 0.25rem
          .right-b
            margin-top: 0.13rem;
            position: relative;
            display flex
            .b1
              width 38%
              text-align: left;
              h2
                font-weight: 700;
                display: block;
                font-size: 0.3rem;
                // line-height: 1.3333;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                text-align left
              .p1
                display inline-block
                color #999
                font-size 0.2rem
              .p2
                margin-top -0.1rem 
                color: #333; 
                font-size 0.2rem
            .deco-box 
              // padding-bottom: .3rem;   
              flex 1
              margin-top 0.2rem
              .deco-bar
                position: relative;
                width: 100%;
                height: 1px;
                color: #949494;
                background-color: currentcolor;
              .deco-bar:before, .deco-bar:after
                content: "";
                position: absolute;
                top: 1px;
                width: .12rem;
                height: .12rem;
                background-color: #ddd7d9;
                border-radius: 9999px;
                border: 1px solid currentcolor; 
              .deco-bar:before
                left: 0;
                -webkit-transform: translate3d(-50%, -50%, 0);
                transform: translate3d(-50%, -50%, 0);
              .deco-bar:after
                right: 0;
                -webkit-transform: translate3d(50%, -50%, 0);
                transform: translate3d(50%, -50%, 0);
            .b3
              width: 40%;
              text-align: right;
              h2
                font-weight: 700;
                display: block;
                font-size: 0.3rem;
                color: #333;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              .p2
                margin-top: 0.4em;
                color: #333;
                font-size: 0.2rem;
              .p1
                color: #999;  
                font-size: 0.2rem;
          .reson
            padding: 0.2rem 0;
            color: #ac1f51;
            font-size 0.2rem
            text-align left


</style>
