<template>
    <div>
        <div class="fxl">
          <HeaderTitle 
          title="月正常放行率" 
          :tit=true
          :btnLeft=true
          >
          <van-icon slot="right2" name="arrow-left" />
          <span slot="right2">12</span>
          <!-- <span>22</span> -->
          </HeaderTitle>
          <div>
            <div id="fxl" class="myChart"></div>
          </div>
        </div>
    </div>
</template>
<script>
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'
export default {
  components:{
    HeaderTitle
  },
  data () {
    return {
      zoomStart:'',
      zoomEnd:'',
      // option:{
      //   xAxis: {
      //       type: 'category',
      //       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      //   },
      //   yAxis: {
      //       type: 'value'
      //   },
      //   series: [{
      //       data: [120, 200, 150, 80, 70, 110, 130],
      //       type: 'line',
      //       symbol: 'triangle',
      //       symbolSize: 20,
      //       lineStyle: {
      //           normal: {
      //               color: 'green',
      //               width: 4,
      //               type: 'dashed'
      //           }
      //       },
      //       itemStyle: {
      //           normal: {
      //               borderWidth: 3,
      //               borderColor: 'yellow',
      //               color: 'blue'
      //           }
      //       }
      //   }]
      // }
      option:{
        tooltip: { //提示框组件
        trigger: 'axis', //触发类型 是由坐标轴触发
        axisPointer: { //坐标轴指示器配置项
            lineStyle: {
                color: 'rgba(0,0,0,0)'
            }
        },
        backgroundColor: '#fff',
        padding: [10],
        textStyle: {
            color: '#131313',
        },
        // formatter:function(params){
        //     console.log(params)
        //     return params[0].name+ '<br/>'
        //         // + params[0].seriesName + ' : ' + params[0].value  + '<br/>'
        //         // + params[1].seriesName + ' : ' + (params[1].value)+ '<br/>'
        //         // + params[2].seriesName + ' : ' + (params[2].value)
        //     // + params[3].seriesName + ' : ' + (params[3].value)+'%'
        // },
        extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
        },
        legend: {
            data:[{
                name:'放行正常率',
                icon:'emptyCircle'
            },'达标值','月目标放行正常率'],
            left: '2%',
            bottom: '2%'
        },

        dataZoom: [
            {
                type: 'inside',
                xAxisIndex: [0],
                startValue: 1,
                endValue: 2,
                zoomLock: true,
            }
        ],
        xAxis: { //x轴
            type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据
            data: [],
            boundaryGap: true,
            axisTick: {
                show: false
            },
            axisLine: {
                show:true,
                lineStyle: {
                    color: '#E1E1E1'
                }
            },
            axisLabel:{
                show:true,
                interval:0,
                textStyle:{
                    color:'#333',
                    fontSize:10
                }
            }
        },
        yAxis: {
            type: 'value',
            position: 'right',
            min: 0,
            max: 100,
            splitLine: {
                lineStyle: {
                    color: ['#E2E1E1'],
                    type: 'dashed'
                }
            },

            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#999999'
                }
            },
            axisLabel: {
                inside: false,
                color: '#999999',
                formatter: '{value}',
                textStyle: {
                    fontSize: 12
                }
            }
        },
        grid: { // 调整上下左右留白
            containLabel:true,
            left: '0',
            right: '0',
            bottom: '15%',
            top: '10%',
        },
        series: [{
            name: '放行正常率',
            type: 'bar',
            stack:'normal',
            barWidth:15,
            data: [],
            label: {
                normal: {
                    show: false,
                    position: 'top',
                    fontSize: 10
                },

            },
            itemStyle: {
                normal: {
                    color: '#52a6ff',
                    formatter:'{c}%',
                    barBorderRadius:[10, 10, 0, 0]
                }
            }
            },{
                name: '达标值',
                type: 'line',
                showSymbol: true,
                showAllSymbol: true,
                symbol: 'emptyCircle',
                symbolSize: 4,
                // stack:'normal',
                data: [],
                label: {
                    normal: {
                        show: false,
                        position: 'top',
                        formatter:'{c}%',
                        fontSize: 8
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#97c66b'
                    }
                }
            },{
                name: '月目标放行正常率',
                type: 'line',
                showSymbol: true,
                showAllSymbol: true,
                symbol: 'emptyCircle',
                symbolSize: 4,
                // stack:'normal',
                data: [],
                label: {
                    normal: {
                        show: false,
                        position: 'top',
                        formatter:'{c}%',
                        fontSize: 8
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#4a90e2'
                    }
                },
                lineStyle: {
                    normal: {
                        width: 2
                    }
                }
            }]
      }
    }
  },
  mounted(){
    var that = this;
    that.drawLine();
    that.dataZoom();
  },
  methods: {
    drawLine:function (param) { 
      let fxlChart = this.$echarts.init(document.getElementById("fxl"));
      fxlChart.setOption(this.option);
    },
    dataZoom:function (param) { 
      let dateNow = new Date();
      let monthNow = dateNow.getDate();
      let monthNowLen = new Date(dateNow.getFullYear(), dateNow.getMonth() + 1, 0).getDate();
      let zoomStart = Math.max(monthNow - 5, 1);
      let zoomEnd = Math.min(monthNow + 3, monthNowLen);
      this.zoomStart=zoomStart;
      this.zoomEnd=zoomEnd;
    }
  }
}
</script>
<style lang="stylus">
  .myChart
    width 96%
    height 5rem
    margin-left 2%
    padding-top 0.2rem
</style>

