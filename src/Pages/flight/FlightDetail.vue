<template>
  <div class="flightDetail">
    <HeaderTitle 
      :title="title"
      :tit=true
      :btnLeft=true
      >
    </HeaderTitle>
    <div class="detail pd-lr bc-bg">
      <div class="main-content bg-white">
        <div class="city-item-box">
          <div class="city-item-title">
            <img src="./img/gbiac.png" alt="">
            <div class="china fc-title">深圳</div>
            <span class="data">06/19 周三</span>
          </div>
          <div class="flight-status-bg fc-white">
            <div class="st-left">
              <div class="status-left">
                <span class="status-text">起飞</span>
                <span class="fz-xl" id="delays"> |</span>
                <span class="status-time-text fz-md" id="delayt">延误时间约35min</span>
              </div>
            </div>
            <div class="delayReason" id="delayReason">
              <div class="status-reson">
                  <span class="status-reson-play">天气</span>
              </div>
              <div class="fz-sm">异常</div>
            </div>
          </div>
          <div class="flight-message">
            <div class="flight-start">
                <ul>
                    <li class="flight-item plan-t">
                      <span class="">计划</span>
                      <span class="">08:50</span>
                    </li>
                    <li class="flight-item flight-eli">北京</li>
                </ul>
            </div>
            <div class="flight-mid">
                <p class="flight-period fc-text">约2小时0分</p>
                <img src="./img/icon-arrive.png" alt="" class="fj">
            </div>
            <div class="flight-end">
                <ul>
                    <li class="flight-item plan-t">
                      <span class="p2">计划</span>
                      <span class="p1">08:50</span>
                    </li>
                    <li class="fz-xl flight-item flight-eli">郑州</li>
                </ul>
            </div>
          </div>
          <p class="fz-bg plan-tb" style="display: none;" id="coBt">COBT/CTOT:&nbsp;AD/AD</p>
          <p class="fz-bg plan-tb" style="display: none;" id="amaneTa">预达时间:&nbsp;05:22</p>
          <p class="fz-bg plan-tb" id="shij" style="float: right;padding-right: 1.5em;display: none;">实达时间:&nbsp;05:22</p>
          <p class="fz-bg plan-tb" style="display: blocok;" id="cshij">实飞时间:&nbsp;05:22</p>
          <div class="line">
            <i class="radius-left"></i>
            <div class="divide-line"></div>
            <i class="radius-right"></i>
          </div>
          <div class="list pd-mlr">
            <div class="bg-white">
              <div class="lists-item">
                <div class="lists-item-right-btn pd-mlr">
                    <span class="lists-item-right-label fc-text">机型</span>
                    <span class="fz-lg" id="data1">B738</span>
                </div>
                <div class="lists-item-right-btn pd-mlr">
                    <span class="lists-item-right-label fz-sm fc-text">机号</span>
                    <span class="fz-lg">B2328</span>
                </div>
                <div class="lists-item-right-btn ub-f1 pd-mlr">
                    <span class="lists-item-right-label fz-sm fc-text">机位</span>
                    <span class="fz-lg">212</span>
                </div>
              </div>
              <div class="lists-item">
                <div class="lists-item-right-btn pd-mlr">
                    <span class="lists-item-right-label fc-text">机型</span>
                    <span class="fz-lg" id="data1">B738</span>
                </div>
                <div class="lists-item-right-btn pd-mlr">
                    <span class="lists-item-right-label fz-sm fc-text">机号</span>
                    <span class="fz-lg">B2328</span>
                </div>
                <div class="lists-item-right-btn ub-f1 pd-mlr">
                    <span class="lists-item-right-label fz-sm fc-text">机位</span>
                    <span class="fz-lg">212</span>
                </div>
              </div>
              <div class="lists-item" style="margin-top:0.2rem">
                <div class="lists-item-right-btn pd-mlr">
                    <span class="lists-item-right-label fc-text">机型</span>
                    <span class="fz-lg" id="data1">B738</span>
                </div>
                <div class="lists-item-right-btn pd-mlr item-two">
                    <span class="lists-item-right-label fz-sm fc-text">机号</span>
                    <span class="fz-lg">B2328</span>
                </div>
              </div>
            </div>
          </div>
          <div class="line">
            <i class="radius-left"></i>
            <div class="divide-line"></div>
            <i class="radius-right"></i>
          </div>
          <div class="list pd-mlr">
            <div class="bg-white">
              <div class="lists-item">
                <div class="lists-item-right-btn pd-mlr">
                    <span class="lists-item-right-label fc-text">机型</span>
                    <span class="fz-lg" id="data1">B738</span>
                </div>
                <div class="lists-item-right-btn pd-mlr">
                    <span class="lists-item-right-label fz-sm fc-text">机号</span>
                    <span class="fz-lg">B2328</span>
                </div>
                <div class="lists-item-right-btn ub-f1 pd-mlr">
                    <span class="lists-item-right-label fz-sm fc-text">机位</span>
                    <span class="fz-lg">212</span>
                </div>
              </div>
              <div class="lists-item">
                <div class="lists-item-right-btn pd-mlr">
                    <span class="lists-item-right-label fc-text">机型</span>
                    <span class="fz-lg" id="data1">B738</span>
                </div>
                <div class="lists-item-right-btn pd-mlr">
                    <span class="lists-item-right-label fz-sm fc-text">机号</span>
                    <span class="fz-lg">B2328</span>
                </div>
                <div class="lists-item-right-btn ub-f1 pd-mlr">
                    <span class="lists-item-right-label fz-sm fc-text">机位</span>
                    <span class="fz-lg">212</span>
                </div>
              </div>
            </div>
          </div>
          <div class="line">
            <i class="radius-left"></i>
            <div class="divide-line"></div>
            <i class="radius-right"></i>
          </div>
          <div class="list pd-mlr">
            <div class="bg-white">
              <div class="lists-item">
                <div class="lists-item-right-btn pd-mlr">
                    <span class="lists-item-right-label fc-text">机型</span>
                    <span class="fz-lg" id="data1">B738</span>
                </div>
                <div class="lists-item-right-btn pd-mlr">
                    <span class="lists-item-right-label fz-sm fc-text">机号</span>
                    <span class="fz-lg">B2328</span>
                </div>
                <div class="lists-item-right-btn ub-f1 pd-mlr">
                    <span class="lists-item-right-label fz-sm fc-text">机位</span>
                    <span class="fz-lg">212</span>
                </div>
              </div>
              <div class="lists-item" style="margin-bottom:0.2rem">
                <div class="lists-item-right-btn pd-mlr">
                    <span class="lists-item-right-label fc-text">机型</span>
                    <span class="fz-lg" id="data1">B738</span>
                </div>
                <div class="lists-item-right-btn pd-mlr">
                    <span class="lists-item-right-label fz-sm fc-text">机号</span>
                    <span class="fz-lg">B2328</span>
                </div>
                <div class="lists-item-right-btn ub-f1 pd-mlr">
                    <span class="lists-item-right-label fz-sm fc-text">机位</span>
                    <span class="fz-lg">212</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flight-detail">
        <div class="fd-head">
          <span class="tp"><img src="./img/h-speed.png" alt=""></span>
          <span class="">整体保障进度</span>
        </div>
        <div class="lists-item-fre bg-white">
          <div class="task-prog">
            <div class="task-prog-item">
              <div class="task-prog-left">
                <div class="task-prog-dept">
                  <div class="flight-table-sq fc-c">预</div>
                  <span class="time-color fc-md">03:20</span>
                </div>
              </div>
              <!-- <div>1111111</div> -->
              <div class="task-prog-center">
                <i class="circle"></i>
                <div class="task-prog-line"></div>
              </div>
              <div class="task-prog-right">
                <div class="task-prog-status">
                  <div class="flight-table-sq2 fc-c">实</div>
                  <span class="fz-md-set time-color fc-md">04:00</span>
                  <span class="fz-md-set font-weight fc-md">客舱门开启</span>
                </div>
              </div>
            </div>
          </div>  
          <div class="f-drtail">
            <div class="f-detail">查看详情<img src="./img/f-dt.png" alt=""></div>
          </div>
          <div class="f-drtail" style="display:none">
            <div class="f-detail">收起详情<img src="./img/back.png" alt=""></div>
          </div>
        </div>  
      </div>
      <div class="flightPreorder bg-white">
        <div id="qxFlight"><p>前序航班</p></div>
        <p1 class="fc-title fz-md">CZ3665</p1>
        <p2 class="fc-text fz-md">到达</p2>
      </div>
      <!-- <div class="kong"></div> -->
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
  .detail
    padding-top 0.2rem
    padding-bottom 0.4rem
    background-color #f6f7f9
    .main-content
      border-top-left-radius: .2rem;
      border-top-right-radius: .2rem;
      border-bottom-left-radius: .2rem;
      border-bottom-right-radius: .2rem;
      .city-item-box
        width: 100%;
        height: 100%;
        border-radius 0.3rem
        .city-item-title
          position relative
          background-color: #fff;
          height: 0.68rem;
          line-height 0.68rem
          padding: 0 .2rem;
          border-radius: 0.3rem;
          .china
            display inline-block
            float left
          .data
            float right
            color #999;
          img 
            float left
            vertical-align: middle;
            width: 0.38rem;
            margin-top 0.13rem
            margin-right 0.2rem
        .plan-tb
          padding-left: 0.3rem;
          font-size: 0.3em;
          color: rgba(6, 6, 6, 0.98);
          padding-top: 0.3em;    
          text-align left 
        .line
          position relative
          .radius-left
            position: absolute;
            top: 0.15rem;
            left: -0.15rem;
            z-index: 9999;
            width: 0.3rem;
            height: 0.3rem;
            border-radius: 50%;
            background-color: #f7f7f9;
          .radius-right
            position: absolute;
            top: 0.15rem;
            right: -0.15rem;
            z-index: 9999;
            width: 0.3rem;
            height: 0.3rem;
            border-radius: 50%;
            background-color: #f7f7f9;  
          .divide-line
            height 0.3rem
            // width 100%
            border-bottom #e3e3e3 1px dashed 
            margin 0 0.2rem 0.3rem 0.2rem
        .flight-message
          padding-top: 0.4rem;    
          position: relative;
          .flight-start
            float left
            max-width: 30%;
            text-align left
            display inline-block
            ul
              padding-left: 0.3rem;
              width: 100%;
              // display inline-block
              .flight-item
                white-space: nowrap;
                margin-bottom: 0.1rem;
                font-size 0.25rem
              .flight-eli
                font-weight: 700;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                height: 0.45rem;
                line-height: 0.45rem  
                font-size 0.35rem
          .flight-mid 
            display: inline-block;
            .flight-period
              font-size: .2rem;
              color #999
              // margin: .125rem 0;  
            .fj
              display: inline-block;
              width: 1.8rem;
              // height: 80%;     
          .flight-end
            float right
            text-align: right;
            max-width: 30%;    
            display inline-block
            padding-right: 0.3rem
            ul
              width: 100%;
              display: inline-block;
              li
                white-space: nowrap;
                margin-bottom: 0.1rem;
                font-size 0.25rem
              .flight-eli
                font-weight: 700;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                height: 0.45rem;
                line-height: 0.45rem  
                font-size 0.35rem
        .flight-status-bg
          background: linear-gradient(to right, #44CE80 0%,#B4EC51 100%);
          height: 1rem;
          padding: 0 0.2rem;   
          position relative
          color #fff
          .st-left 
            float left
            height: 100%;
            line-height 1rem
            display inline-block
            .status-text
              font-weight: 700;
              font-size 0.4rem
          .delayReason
            float right
            height: 1rem;
            font-size 0.25rem
            margin-top 0.2rem
            // display inline-block    
            .status-reson-play
              display: inline-block;
              height: 100%;
              width: 100%;
              text-align: right;
              font-weight: 700;
        .list 
        .lists-item:first-child   
          margin-bottom: 0.2rem;
        .lists-item:last-child   
          // display inline-block  
        .lists-item
          display flex
          height: auto;
          position: relative;   
          .lists-item-right-btn:last-child
            border: 0
          .lists-item-right-btn
            flex 1
            border-right: 1px solid #E1E1E1;
            height: 100%;
            text-align left
            span
              width: 100%;
              height: 50%;
              display: inline-block;    
              font-size 0.35rem
            .lists-item-right-label
              color #999  
              font-size 0.3rem
          .item-two
            flex 2.24
    .flightPreorder    
      padding: 0.2rem 0;
      border-radius: .2rem; 
      height 0.6rem  
      div 
        float: left;
        width: 1.4rem;
        height: 0.6rem;
        background: #aa1d4f;
        border-top-right-radius: 0.4rem;
        border-bottom-right-radius:0.4rem;
        margin-right: 0.2rem; 
        padding-bottom 0.1rem
        p
          padding: 0rem 0.6rem 0.1rem 0.2rem;
          font-size: 0.23rem;
          color: #fff;   
      p1
        line-height: 0.6rem;
        height: 0.6rem;
        color: #333;
        font-size 0.3rem
        float left
      p2
        line-height: 0.6rem;
        height: 0.6rem;
        float: right;
        margin-right: 0.2rem;  
        font-size 0.3rem
        color: #999;
    .kong
      height 0.2rem
      background-color #f6f7f9  
    .flight-detail
      margin 0.2rem 0 
      .fd-head
        text-align left
        line-height 0.8rem
        .tp
          vertical-align middle
          margin-right 0.15rem
        span 
          display inline-block
          img 
            width 0.45rem 
      .lists-item-fre
        .f-drtail
          height: 0.64rem;
          text-align: center;
          line-height: 0.64rem;
          .f-detail
            text-align: center;
            color: #9b9b9b;
            margin-top: 0.2rem;
            img 
              display inline-block
              margin-left: .1rem;
              width: 0.4rem;
              margin-top -0.1rem
              vertical-align middle
        .task-prog
          // padding-top 0.1rem
          .task-prog-left
            width 1.6rem
            margin-left 0.2rem
            float left
            text-align: right;
            display inline-block
            padding-bottom: 0.4rem;
            .flight-table-sq
              display inline-block
              width: 0.3rem;
              height: 0.3rem;
              line-height: 0.3rem;
              border-radius: 0.05rem;
              border: 1px solid currentcolor;
              text-align: center;
              font-size: .3rem;
              float: left;
              margin-top 0.1rem
            .time-color
              color: #aa1d4f;
              display: inline-block;
          .task-prog-center
            position relative
            width 5%
            float left
            .circle    
              position: absolute;
              float left
              margin-top: 0.1rem;
              margin-left 0.2rem
              width: 0.2rem;
              height: 0.2rem;
              background: #aa1d4f;
              border-radius: 50%;
              border: 1px solid #fff;
            .task-prog-line
              position: absolute;
              border-left: 0.06rem dashed #AF1C4E;
              bottom: -1rem;
              top: 0.2rem;
              left: 0.47rem;   
          .task-prog-right
            width 60%
            margin-left 0.5rem
            padding-bottom: 0.4rem;
            display inline-block
            .task-prog-status
              .flight-table-sq2
                display inline-block
                margin-top 0.1rem
                margin-right 0.4rem
                width: 0.3rem;
                height: 0.3rem;
                line-height: 0.35rem;
                border-radius: 0.05rem;
                border: 1px solid currentcolor;
                text-align: center;
                font-size: .3rem;
              .time-color
                margin-left -0.4rem
                color: #aa1d4f;
                min-width: 0.8rem;
                display: inline-block;

</style>
