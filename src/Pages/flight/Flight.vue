<template>
    <div class="flight">
      <HeaderTitle 
        headerL='进港'
        headerR='出港'
        :tab=true
        :btnRight=true
        :showRight=2
        @headerClick="hClick"
        >
        <!-- <van-icon slot="right2" name="arrow-left" /> -->
        <!-- <img src="../../common/images/h-fconcern.png" slot="right2"> -->

        <router-link tag="span" slot="right2" to="/FlightConcern">
          <img src="../../common/images/h-fconcern.png">
        </router-link>
        <router-link tag="span" to="/FlightSearch" slot="right2">
          <span><img src="../../common/images/h-search.png"></span>
        </router-link>
        <!-- <span>22</span> -->
      </HeaderTitle>
        <div>
          <div ref="jingang">
            <div class="databox">
              <div class="databox-item" @click="flightTypeChange(0,1)">
                <div class="item2">
                  <span class="databox-dot main_blue"></span>
                  <span>计划</span>
                </div>
                <div class="item1">
                  <span class="databox-dot"></span>
                  <span>12</span>
                </div>
              </div>
              <div class="databox-item" @click="flightTypeChange(0,3)" style="width:25%">
                <div class="item2">
                  <span class="databox-dot main_yellow"></span>
                  <span>延误未到</span>
                </div>
                <div class="item1">
                  <span>2</span>
                </div>
              </div>
              <div class="databox-item" @click="flightTypeChange(0,4)">
                <div class="item2">
                  <span class="databox-dot flight_pink"></span>
                  <span>取消</span>
                </div>
                <div class="item1">
                  <span class="databox-dot"></span>
                  <span>1</span>
                </div>
              </div>
              <div class="databox-item" @click="flightTypeChange(0,5)">
                <div class="item2">
                  <span class="databox-dot flight_red"></span>
                  <span>异常</span>
                </div>
                <div class="item1">
                  <span>0</span>
                </div>
              </div>
              <div class="databox-item" @click="flightTypeChange(0,2)">
                <div class="item2">
                  <span class="databox-dot flight_lv"></span>
                  <span>已进港</span>
                </div>
                <div class="item1">
                  <span>1</span>
                </div>
              </div>
            </div>
            <div class="flight-table-head">
                <table class="flight-table fz-sm">
                    <tr class="bg-f-theme fc-white">
                        <th width="24%">航班号</th>
                        <th width="14%">机号</th>
                        <th width="18%">出发地</th>
                        <th>机位</th>
                        <th width="18%">到达时间</th>
                        <th width="16%">状态</th>
                    </tr>
                </table>
            </div>
            <div class="flight-table-box">
              <div class="flight-table-tab">
                <table class="flight-table" cellspacing="0">
                  <tbody>
                    <router-link tag="tr" class="flight-tr" to="/FlightDetail">
                        <td width="24%">
                          <div>
                            <img src="./img/gbiac.png" alt="" class="flight-table-logo">
                            <span>CV9763</span>
                          </div>
                        </td>
                        <td width="14%">B2209</td>
                        <td width="18%">北京</td>
                        <td>21</td>
                        <td width="18%">
                          <span class="flight-table-sq">实</span>
                          <span class="flight-table-text">09:30</span>
                        </td>
                        <td width="16%">
                          <div>起飞</div>
                        </td>
                    </router-link>
                    <router-link tag="tr" class="flight-tr" to="/FlightDetail">
                        <td width="24%">
                          <div>
                            <img src="./img/gbiac.png" alt="" class="flight-table-logo">
                            <span>CV9763</span>
                          </div>
                        </td>
                        <td width="14%">B2209</td>
                        <td width="18%">北京</td>
                        <td>21</td>
                        <td width="18%">
                          <span class="flight-table-sq">实</span>
                          <span class="flight-table-text">09:30</span>
                        </td>
                        <td width="16%">
                          <div>起飞</div>
                        </td>
                    </router-link>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div ref="chugang" style="display: none">
            <div class="databox">
              <div class="databox-item" @click="flightTypeChange(0,1)">
                <div class="item2">
                  <span class="databox-dot main_blue"></span>
                  <span>计划</span>
                </div>
                <div class="item1">
                  <span class="databox-dot"></span>
                  <span>12</span>
                </div>
              </div>
              <div class="databox-item" @click="flightTypeChange(0,3)" style="width:25%">
                <div class="item2">
                  <span class="databox-dot flight_red"></span>
                  <span>保障中</span>
                </div>
                <div class="item1">
                  <span>2</span>
                </div>
              </div>
              <div class="databox-item" @click="flightTypeChange(0,4)" style="width:25%">
                <div class="item2">
                  <span class="databox-dot main_yellow"></span>
                  <span>延误未起</span>
                </div>
                <div class="item1">
                  <span class="databox-dot"></span>
                  <span>1</span>
                </div>
              </div>
              <div class="databox-item" @click="flightTypeChange(0,5)">
                <div class="item2">
                  <span class="databox-dot flight_pink"></span>
                  <span>取消</span>
                </div>
                <div class="item1">
                  <span>0</span>
                </div>
              </div>
              <div class="databox-item" @click="flightTypeChange(0,2)">
                <div class="item2">
                  <span class="databox-dot flight_lv"></span>
                  <span>已出港</span>
                </div>
                <div class="item1">
                  <span>1</span>
                </div>
              </div>
            </div>
            <div class="flight-table-head">
              <table class="flight-table fz-sm">
                  <tr class="bg-f-theme fc-white">
                      <th width="24%">航班号</th>
                      <th width="14%">机号</th>
                      <th width="18%">到达地</th>
                      <th>机位</th>
                      <th width="18%">出发时间</th>
                      <th width="16%">状态</th>
                  </tr>
              </table>
            </div>
          </div>
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
    },
    data () {
      return {
        tabActive:0,
        jgIndex: 1,
        cgIndex: 1,
      }
    },
    methods: {
      hClick:function (i) { 
        this.tabActive = i
        if(i==0){
          this.$refs.jingang.style="show"
          this.$refs.chugang.style="display:none"
        }else{
          this.$refs.jingang.style="display:none"
          this.$refs.chugang.style="show"
        } 
      },
      flightTypeChange:function (x,y) { 
        if(x==0){
          this.tabActive=0
          this.jgIndex=y
        }else if(x==1){
          this.tabActive=0
          this.cgIndex=y
        }
      }
    }
}
</script>
<style lang="stylus">
  .flight
    background-color: #F6F7F9;
    .databox
      display flex
      // margin-bottom 0.2rem
      .databox-item:nth-child(even)
        border-left: 1px solid #e1e1e1;
        border-right: 1px solid #e1e1e1;      
      .databox-item
        width 20%
        flex-direction:column
        height 0.8rem
        margin-top: 0.2rem;
        margin-bottom 0.2rem
        box-sizing border-box
        .item1
          font-size 0.3rem
          // height 50%
        .item2
          font-size 0.3rem
          // height 48%
          padding-top 0.1rem
          box-sizing border-box
          // line-height 100%
          .databox-dot
            display: inline-block;
            width: 0.2rem;
            height: 0.2rem;
            background-color: currentcolor;
            border-radius: 0.1rem;
    .flight-table-head
      .flight-table
        border 1px solid #aa1d4f
        width: 100%;  
        font-size 0.25rem   
        border-collapse: collapse;
        border-spacing: 0;
        tr
          border-bottom: 1px solid #ebeced;
          border-right: 0;
          background-color: #aa1d4f;
          color: #fff;
          th
            border 0
            font-weight: 400;
            height: 1rem;
            text-align left 
            padding 0 0.01rem
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
    .flight-table-box
      overflow-y: auto;
      position: relative;
      box-sizing: border-box;
      // background: aqua;
      font-size 0.22rem
      .flight-table tr:nth-of-type(2n)
        background-color: #fff;
      .flight-table tr:nth-of-type(2n-1)
        background-color: #f6f7f9;
      .flight-table 
        width: 100%;
        table-layout: fixed;
        box-sizing: border-box;
        // font-size 0.25rem
        tr
          width 100%
          border-bottom: 1px solid red;
          td:first-of-type
            padding-left 0.1rem
          td
            height 0.6rem
            text-align: left;
            // padding: 0 0.2rem;
            word-break: keep-all;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            box-sizing: border-box;
            .flight-table-logo
              display: inline-block;
              width: 0.32rem;
              height: 0.32rem;
              vertical-align: middle;
              margin-top -0.02rem
          .flight-table-sq
              display: inline-block;
              width: 0.28rem;
              height: 0.28rem;
              line-height 0.28rem
              border-radius: 0.05rem;
              border: 1px solid currentcolor;    
              text-align center

        // tr:nth-of-type(2n-1)
        //   background-color: #f6f7f9; 
</style>

