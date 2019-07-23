<template>
  <div>
    <HeaderTitle
      :title='title'
      :tit=true
      :btnLeft=true
    >
    </HeaderTitle>
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
</template>

<script>
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
export default {
  name: "FlightFxl",
  components: {
    HeaderTitle
  },
  data() {
    return {
      title: "1112",
      fxl: ""
    };
  },
  methods: {

  },
  created() {
    this.fxl = this.$route.query.fxl;
    if (this.$route.query.fxl == 1) {
      this.title = "全部放行航班";
    } else if (this.$route.query.fxl == 2) {
      this.title = "放行正常航班";
    } else if (this.$route.query.fxl == 3) {
      this.title = "放行不正常航班";
    } else if (this.$route.query.fxl == 4) {
      this.title = "全部始发航班";
    } else if (this.$route.query.fxl == 5) {
      this.title = "始发正常航班";
    } else if (this.$route.query.fxl == 6) {
      this.title = "始发不正常航班";
    }
  }
};
</script>

<style lang="stylus" scoped>
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
</style>
