<template>
  <div class="hello">
    <HeaderTitle 
      title='放行正常率监控'
      :tit=true
      :btnLeft=true
      >
    </HeaderTitle>
    <div>
      <div class="top bg-white ub ub-ver">
          <div id="myChart" class="myChart"></div>
      </div>
      <div class="center">
        <table class="flight-table">
          <tr class="bg-f-theme fc-white fz-sm">
            <th width="20%">区域</th>
            <th width="21%">执行班次</th>
            <th width="21%">正常班次</th>
            <th width="24%">不正常班次</th>
            <th width="">正常率</th>
          </tr>
        </table>
      </div>
      <div class="bottom ub ub-f1">
        <ul class="myul ">
          <li class="otherli ub">
            <table class="flight-table">
              <tr class="fc-white fz-sm">
                <td width="20%">华北</td>
                <td width="21%">3</td>
                <td width="21%">3</td>
                <td width="24%">0</td>
                <td width="">100</td>
              </tr>
            </table>
          </li>
          <li class="otherli ub">
            <table class="flight-table">
              <tr class="fc-white fz-sm">
                <td width="20%">华北</td>
                <td width="21%">3</td>
                <td width="21%">3</td>
                <td width="24%">0</td>
                <td width="">100</td>
              </tr>
            </table>
          </li>
          <li class="otherli ub">
            <table class="flight-table">
              <tr class="fc-white fz-sm">
                <td width="20%">华北</td>
                <td width="21%">3</td>
                <td width="21%">3</td>
                <td width="24%">0</td>
                <td width="">100</td>
              </tr>
            </table>
          </li>
        </ul>
        <!-- <div class="nothing" v-else></div> -->
    </div>
    </div>
  </div>
</template>

<script>
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'
export default {
  name: "ReleaseObserve",
  components: {
    HeaderTitle
  },
  data() {
    return {
      option:{
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
            // top: 'bottom',
            bottom: '2%',
            width: '60%',
            icon: "circle",
            itemWidth: 5,
            itemHeight: 5,
            itemGap:20,
            padding:[0,10]
        },
        color: ['#9DCDFF', '#35D0D9', '#52A6FF', '#FF7D7E', '#FFD951', '#CCA65F', '#B8E986', '#9c2d4f'],
        // calculable: true,
        series: [{
            name: '监控数据',
            type: 'pie',
            label: {
                normal: {
                    formatter: '{b|{b}}\n{hr|}\n{c|{c}}',
                    rich: {
                        hr: {
                            borderColor: '#E1E1E1',
                            width: '100%',
                            borderWidth: 1,
                            height: 0,
                        },
                        b: {
                            color: '#999999',
                            padding: [4, 0],
                            align: 'center'
                        },
                        c: {
                            align: 'center',
                            padding: [4, 0],
                        }
                    },
                    textStyle: {
                        color: '#333'
                    }
                }
            },
            labelLine: {
                normal: {
                    length: 15,
                    length2: 15,
                    lineStyle: {
                        color: '#E1E1E1',
                        width: 1,
                    }
                }
            },
            radius: '60%',
            center: ['50%', '45%']
        }]
      },
      data1:[{name:"华北"},{name:"东北"},{name:"华东"},{name:"中南"},{name:"西南"},{name:"西北"},{name:"国际"},{name:"其他"}],
      data2:[{name:"华北",value:3},{name:"东北",value:4},{name:"华东",value:6},{name:"中南",value:14},{name:"西南",value:10},{name:"西北",value:3},{name:"国际",value:4},{name:"其他",value:0}]
    };
  },
  mounted(){
    var that = this;
    that.drawLine();  // 初始化
  },
  methods: {
    drawLine:function (param) { 
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      this.option.legend.data=this.data1
      console.log(this.data1)
      this.option.series[0].data = this.data2
      myChart.setOption(this.option);
    }
  }
};
</script>

<style lang="stylus" scoped>
  .myChart
    height 6.2rem
    margin-top 0.2rem
  .center
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;  
    .flight-table
      width: 100%;
      table-layout: fixed;
      border-collapse: collapse;
      border-spacing: 0;
      .bg-f-theme
        background-color: #aa1d4f;
        color: #fff;
        font-size 0.3rem
        th:first-child
          padding-left: 0.2rem;  
        th
          padding: 0.1rem 0;
          text-align: left;
          font-weight 400
  .bottom
    overflow: hidden;
    overflow-y: scroll;
    // border-bottom: 1px solid #cccccc;
    .myul
      width: 100%;
      .otherli:nth-of-type(2n)
        background-color: #fff;
      .otherli:nth-of-type(2n-1)
        background-color: #f6f7f9;  
      .otherli
        border-bottom: 1px solid #cccccc;
        .flight-table
          width: 100%;
          table-layout: fixed;
          border-collapse: collapse;
          border-spacing: 0;
          tr
            font-size 0.25rem
            td:first-child
              padding-left: 0.2rem;
            td
              text-align: left;
              color: black;
              padding: 0.1rem 0;  
</style>
