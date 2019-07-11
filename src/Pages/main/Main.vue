<template>
    <div>
      <div class="bc-bg" style="height:26.3rem">
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
          <div class="tab-contain bg-white">
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
          <div class="bg-white">
            <div class="t-contain">
              <div class="t-select-contain">
                <div class="t-items border-r"  @click="tChange(0)" :class="{'actives': tActive==0}">
                  <span class="t-item-text">进港</span>
                </div>
                <div class="t-items"  @click="tChange(1)" :class="{'actives': tActive==1}">
                  <span class="t-item-text">出港</span>
                </div>
              </div>
            </div>
            <div class="wh">
              <img src="../../common/images/wenhao.png" alt="">
            </div>
            <div class="databox" ref="jingang">
              <div class="databox-item" @click="flightType(0,1)">
                <div class="item1 main_blue">
                  <span>142</span>
                </div>
                <div class="item2">
                  <span>计划</span>
                </div>
              </div>
              <div class="databox-item" @click="flightType(0,3)" style="width:25%">
                <div class="item1 main_green">
                  <span>142</span>
                </div>
                <div class="item2">
                  <span>延误未到</span>
                </div>
              </div>
              <div class="databox-item" @click="flightType(0,4)">
                <div class="item1 main_yellow">
                  <span>142</span>
                </div>
                <div class="item2">
                  <span>取消</span>
                </div>
              </div>
              <div class="databox-item" @click="flightType(0,5)">
                <div class="item1 main_yellow">
                  <span>142</span>
                </div>
                <div class="item2">
                  <span>异常</span>
                </div>
              </div>
              <div class="databox-item" @click="flightType(0,2)">
                <div class="item1 main_yellow">
                  <span>142</span>
                </div>
                <div class="item2">
                  <span>已进港</span>
                </div>
              </div>
            </div>
            <div class="databox" ref="chugang" style="display: none">
              <div class="databox-item" @click="flightType(1,1)">
                <div class="item1 main_blue">
                  <span>142</span>
                </div>
                <div class="item2">
                  <span>计划</span>
                </div>
              </div>
              <div class="databox-item" @click="flightType(1,6)">
                <div class="item1 main_green">
                  <span>142</span>
                </div>
                <div class="item2">
                  <span>保障中</span>
                </div>
              </div>
              <div class="databox-item" @click="flightType(1,3)"  style="width:25%">
                <div class="item1 main_yellow">
                  <span>142</span>
                </div>
                <div class="item2">
                  <span>延误未起</span>
                </div>
              </div>
              <div class="databox-item" @click="flightType(1,4)">
                <div class="item1 main_yellow">
                  <span>142</span>
                </div>
                <div class="item2">
                  <span>取消</span>
                </div>
              </div>
              <div class="databox-item" @click="flightType(1,2)">
                <div class="item1 main_yellow">
                  <span>142</span>
                </div>
                <div class="item2">
                  <span>已出港</span>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white">
            <div class="chart-header pd-lr">
              <span>航班分布</span>
            </div>
            <div class="">
              <div>
                <div id="jin" class="myChart chart-jc"></div>
              </div>
              <div>
                <div id="chu" class="myChart chart-jc" style="display:none"></div>
              </div>
            </div>
          </div>
          <div class="bg-white">
            <div class="chart-header pd-lr">
              <span>走廊口放行率</span>
            </div>
            <div class="">
              <div>
                <div id="import" class="myChart chart-jc"></div>
              </div>
            </div>
          </div>
          <div class="">
            <div class="chart-header pd-lr">
              <span>特情</span>
            </div>
            <div class="te_qing">
              <div class="teqing bg-white">
                <span class="">暂无特情</span>
              </div>
            </div>
          </div>
          <footgudie></footgudie>
      </div>
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
      tabActive:0,
      tActive: 0,
      option:{
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'line',
            symbol: 'triangle',
            symbolSize: 20,
            lineStyle: {
                normal: {
                    color: 'green',
                    width: 4,
                    type: 'dashed'
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 3,
                    borderColor: 'yellow',
                    color: 'blue'
                }
            }
        }]
      }
    }
  },
  mounted(){
    var that = this;
    that.drawLine();  // 初始化
  },
  methods: {
    drawLine:function (param) { 
      let flightChart1 = this.$echarts.init(document.getElementById("jin"));
      flightChart1.setOption(this.option);
      let flightChart2 = this.$echarts.init(document.getElementById("chu"));
      flightChart2.setOption(this.option);
      let exportChart = this.$echarts.init(document.getElementById("import"));
      exportChart.setOption(this.option);
    },
    tabChange: function (i) {
      this.tabActive = i;
      this.$refs.changeAct.changeAc(i)
      
    },
    tChange: function (i) {
      this.tActive = i;
      if(i==0){
        this.$refs.jingang.style="show"
        this.$refs.chugang.style="display:none"
      }else{
        this.$refs.jingang.style="display:none"
        this.$refs.chugang.style="show"
      }
      console.log(this.$refs.jingang)
    },
    changeEnd:function (i) { 
      this.tabActive = i;
    }
  }
}
</script>
<style lang="stylus">
@import '../../common/style/mixin.styl';
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
  .wh
    position: relative;
    img
      width: 0.4rem; 
      position: absolute;
      right: 0.5rem;
      z-index:999;
      top:-0.8rem;     
  .t-contain
    padding 0.2rem 0.3rem 0.3rem
    margin-top 0.2rem
    .t-select-contain
      display flex
      margin 0 auto 
      width 65%
      height 0.6rem
      line-height 0.6rem
      text-align center 
      color #e1e1e1
      border 1px solid currentcolor
      border-radius 0.4rem
      transition: .15s;
      .t-items
        text-over()
        flex 1
        padding: 0 0.3rem;
        text-overflow: ellipsis;
        transition: .3s;
        // border-radius 0.4rem 0 0 0.4rem
        span 
          font-size 0.35rem
          vertical-align: middle;
      .t-items:nth-child(1)
        border-radius 0.4rem 0 0 0.4rem  
      .t-items:nth-child(2)
        border-radius 0 0.4rem 0.4rem 0      
      .t-items.actives
        color: #333;
        background-color: #f9f9fa;
  .databox
    display flex
    padding 0 0.32rem 0.2rem 0.32rem
    // margin-bottom 0.2rem
    .databox-item:nth-child(even)
      border-left: 1px solid #e1e1e1;
      border-right: 1px solid #e1e1e1;      
    .databox-item
      width 20%
      flex-direction:column
      height 1.2rem
      .item1
        font-size 0.5rem
        font-weight 700
        height 50%
      .item2
        font-size 0.35rem
        height 50%
  .chart-header
    background-color #f9f9fa
    font-weight: 600;
    height 0.7rem
    line-height 0.7rem
    color #9b9b9b 
    text-align left
    font-size 0.35rem 
  .chart-jc
    width 100%
    height 5rem
    // margin-bottom 1rem
  .te_qing
    // margin-bottom 1.2rem  
    .teqing
      padding 0.2rem  
      color #999
</style>

