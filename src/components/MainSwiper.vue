<template>
  <!-- <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback"> -->
  <swiper :options="swiperOption" class="wrapper bg-white" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>
      <router-link tag="div" to="/Fxl">
        <div class="tuBi">
          <img src="../common/images/tubiao.png" alt="">
        </div>
      </router-link>
      <div class="wenHao">
        <img src="../common/images/wenhao.png" alt="">
      </div>
      <div id="fangxinglv" class="myChart"></div>
      <div class="databox">
        <div class="databox-item">
          <div class="item1 main_blue">
            <span>142</span>
          </div>
          <div class="item2">
            <span class="databox-dot main_blue"></span>
            <span>已执行</span>
          </div>
        </div>
        <div class="databox-item">
          <div class="item1 main_green">
            <span>142</span>
          </div>
          <div class="item2">
            <span class="databox-dot main_green"></span>
            <span>正常</span>
          </div>
        </div>
        <div class="databox-item">
          <div class="item1 main_yellow">
            <span>142</span>
          </div>
          <div class="item2">
            <span class="databox-dot main_yellow"></span>
            <span>不正常</span>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <router-link tag="div" to="/Fxl">
        <div class="tuBi">
          <img src="../common/images/tubiao.png" alt="">
        </div>
      </router-link>
      <div class="zt">
        <img src="../common/images/wenhao.png" alt="">
      </div>
      <div id="shifafangxing" class="myChart"></div>
      <div class="databox">
        <div class="databox-item">
          <div class="item1 main_blue">
            <span>142</span>
          </div>
          <div class="item2">
            <span class="databox-dot main_blue"></span>
            <span>已执行</span>
          </div>
        </div>
        <div class="databox-item">
          <div class="item1 main_green">
            <span>142</span>
          </div>
          <div class="item2">
            <span class="databox-dot main_green"></span>
            <span>正常</span>
          </div>
        </div>
        <div class="databox-item">
          <div class="item1 main_yellow">
            <span>142</span>
          </div>
          <div class="item2">
            <span class="databox-dot main_yellow"></span>
            <span>不正常</span>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <router-link tag="div" to="/Fxl">
        <div class="tuBi">
          <img src="../common/images/tubiao.png" alt="">
        </div>
      </router-link>
      <div class="zt">
        <img src="../common/images/wenhao.png" alt="">
      </div>
      <div id="zongtizhixing" class="myChart"></div>
      <div class="databox">
        <div class="databox-item">
          <div class="item1 main_blue">
            <span>142</span>
          </div>
          <div class="item2">
            <span class="databox-dot main_blue"></span>
            <span>全部</span>
          </div>
        </div>
        <div class="databox-item">
          <div class="item1 main_green">
            <span>142</span>
          </div>
          <div class="item2">
            <span class="databox-dot main_green"></span>
            <span>已执行</span>
          </div>
        </div>
        <div class="databox-item">
          <div class="item1 main_yellow">
            <span>142</span>
          </div>
          <div class="item2">
            <span class="databox-dot main_yellow"></span>
            <span>未执行</span>
          </div>
        </div>
      </div>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  props:{

  },
  name: 'MainSwiper',
  data () {
    return {
      swiperOption:{
        pagination:'.swiper-pagination',
        notNextTick: true,
        // autoplay: 5000,
        onSlideChangeEnd:swiper=>{
          this.$emit('changeEnd',swiper.activeIndex)
        }
      },
        optionline:{
          title: {
              show: true,
              x: "center",
              y: "65%",
              text: '--%', //幸运值取代码置于值于此处
              textStyle: {
                  fontSize: 30,
                  fontWeight: 'bolder',
                  fontStyle: 'normal',
                  color: '#333333'
              },
              subtext: '更新于今日',
              subtextStyle: {
                  fontSize: 9,
                  color: '#333333'
              }
          },
          backgroundColor: 'rgb(255, 255, 255)',
          series: [{
              name: '0',
              type: 'gauge',
              startAngle: 200,
              endAngle: -20,
              center: ['50%', '70%'],
              splitNumber: 10, //刻度数量
              min: 0,
              max: 100,
              radius: '60%', //图表尺寸
              axisLine: {
                  show: false,
                  lineStyle: {
                      width: 2,
                      shadowBlur: 0,
                      color: [
                          [1, '#E5E5E5']
                      ]
                  }
              },
              axisTick: {
                  show: false,
              },
              splitLine: {
                  show: false,
              },
              axisLabel: {
                  show: false,
              },
              pointer: {
                  show: false,
              },
              data: [{
                  name: "",
                  value: ''
              }],
              detail: {
                  show: false
              },
              title: {
                  show: false
              }
          }, {
              name: '1',
              type: 'gauge',
              startAngle: 200,
              endAngle: -20,
              center: ['50%', '70%'],
              splitNumber: 10, //刻度数量
              min: 0,
              max: 100,
              radius: '100%', //图表尺寸
              axisLine: {
                  show: true,
                  lineStyle: {
                      width: 10,
                      shadowBlur: 0,
                      color: [
                          [0.2, '#FF7D7E'],
                          [0.8, '#A7E2FE'],
                          [1, '#1DBD87']
                      ]
                  }
              },
              axisTick: {
                  show: false
              },
              splitLine: {
                  show: false,
                  length: 0,
                  lineStyle: {
                      color: '#C7FBFC'
                  }
              },
              axisLabel: {
                  distance: 12,
                  textStyle: {
                      color: "#8A8A8A",
                      fontSize: "15",
                  },
                  formatter: function (e) {
                      switch (e + "") {
                          case "0":
                              return "0";
                          case "10":
                              return "10";
                          case "20":
                              return "20";
                          case "30":
                              return "30";
                          case "40":
                              return "40";
                          case "50":
                              return "50";
                          case "60":
                              return "60";
                          case "70":
                              return "70";
                          case "80":
                              return "80";
                          case "90":
                              return "90";
                          default:
                              return e;
                      }
                  }
              },
              pointer: {
                  show: true,
                  width: 2,
                  // length:"90%"
              },
              itemStyle: {
                  normal: {
                      color: '#FFCC03'
                  }
              },
              detail: { //指针评价
                  show: true,
                  offsetCenter: [0, 120],
                  textStyle: {
                      fontSize: 16,
                      color: "#333333"
                  }
              },
              title: {
                  textStyle: {
                      fontSize: 15,
                      fontStyle: 'normal',
                      color: "#999999"
                  },
                  offsetCenter: [0, -30]
              },
              data: [{
                  name: "放行率",
                  value: '--'
              }]
          }, {
              name: '2',
              type: 'gauge',
              startAngle: 200,
              endAngle: -20,
              center: ['50%', '70%'],
              splitNumber: 10, //刻度数量
              min: 0,
              max: 100,
              radius: '110%', //图表尺寸
              axisLine: {
                  show: true,
                  lineStyle: {
                      width: 1,
                      shadowBlur: 0,
                      color: [
                          [1, '#E5E5E5']

                      ]
                  }

              },
              axisTick: {
                  show: false,
                  lineStyle: {
                      color: "#C7FBFC",
                      width: 0
                  },
                  length: -5,
                  splitNumber: 2
              },
              splitLine: {
                  show: false
              },
              axisLabel: {
                  show: false
              },
              pointer: {
                  show: false
              },
              data: [{
                  name: '',
                  value: ''
              }],
              detail: {
                  show: false
              },
              title: {
                  show: false
              },

          }]
        },
    }
  },
  computed:{
    swiper(){
      return this.$refs.mySwiper.swiper 
    }
  },
  mounted(){
    var that = this;
    that.drawLine();  // 初始化
  },
  methods: {
    drawLine(){
      let myChart = this.$echarts.init(document.getElementById("fangxinglv"));
      myChart.setOption(this.optionline);
      let myChart1 = this.$echarts.init(document.getElementById("shifafangxing"));
      myChart1.setOption(this.optionline);
      let myChart2 = this.$echarts.init(document.getElementById("zongtizhixing"));
      myChart2.setOption(this.optionline);
    },
    changeAc:function (param) { 
      this.swiper.slideTo(param, 500, false);
     }
  }
}
</script>

<style lang="stylus" scoped>
  
  .swiper-slide
    height 5rem
  .swiper-slide-active 
    height:auto
  .wrapper >>> .swiper-pagination-bullet
    background #c6bfbf
  .wrapper >>> .swiper-pagination-bullet-active
    background-color: #E1E1E1;
    width: 0.4rem;
    border-radius 0.4rem
  .tuBi
    position: relative;
    img
      width: 0.4rem;
      position: absolute;
      right: 1rem;
      z-index:999;
      top:0.16rem
  .zt
    position: relative;
    img
      width: 0.4rem; 
      position: absolute;
      right: 0.32rem;  
      z-index:999;
      top:0.16rem;
  .wenHao
    position: relative;
    img
      width: 0.4rem;
      position: absolute;
      right: 0.32rem;
      z-index:999;
      top:0.16rem;
  .myChart
    // width 6rem
    height 5rem
    padding 0 0.32rem 0.32rem 0.32rem
  .databox
    height 1rem
    display flex
    margin-bottom: 1rem;
    .databox-item:nth-child(2)
      border-left: 1px solid #e1e1e1;
      border-right: 1px solid #e1e1e1;
    .databox-item
      flex-direction:column
      height 1.2rem
      // display inline-block
      // position: relative;
      flex 1
      .item1
        font-size 0.5rem
        font-weight 700
        height 50%
        // height 0.5rem
        // position relative
      .item2
        font-size 0.4rem
        height 50%
        .databox-dot
          display: inline-block;
          width: 0.2rem;
          height: 0.2rem;
          background-color: currentcolor;
          border-radius: 0.1rem;
</style>
