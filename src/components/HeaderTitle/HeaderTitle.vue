<template>
  <div class="header bg-white">
    <div class="header-title">
      <div class="btn-left" v-if="btnLeft" @click="goBack">
        <slot name="left">
          <van-icon name="arrow-left" />
        </slot>
        <!-- <div>aa</div> -->
      </div>
      <div class="title" v-html="title" v-if="tit">
        <!-- <h2>嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯</h2> -->
      </div>
      <div class="btn-tab" tabindex="0" v-if="tab">
        <span class="tab-pill">
            <div class="tab-pill-box">
                <div class="tab-pill-text" @click="tabChange(0)" :class="{'actives': tabActive==0}">
                    <span v-html="headerL"></span>
                </div>
                <div class="tab-pill-text"  @click="tabChange(1)" :class="{'actives': tabActive==1}">
                    <span v-html="headerR"></span>
                </div>
            </div>
        </span>
      </div>
      <div class="check" v-if="check"></div>
      <div class="btn-right" v-if="btnRight">
        <div class="btn-r" v-if="showRight == 1">
          <slot name="right1">
            <van-icon name="arrow-left" />
          </slot>
        </div>
        <div class="btn-r" v-if="showRight == 2">
          <slot name="right2">
            <!-- <van-icon name="arrow-left" /> -->
            <span>问问</span> -->
          </slot>
        </div>
      </div>
    </div>
    <div class="sou" v-if="sous">
      <van-search placeholder="请输入搜索关键词" @search="onSearch" v-model="value"/>
    </div>
  </div>
</template>

<script>

export default {
  props:{
    title:{
      type:String,
      default:''
    },
    headerL:{
      type:String,
      default:''
    },
    headerR:{
      type:String,
      default:''
    },
    tit:{
      type:Boolean,
      default:false,
    },
    tab:{
      type:Boolean,
      default:false,
    },
    check:{
      type:Boolean,
      default:false,
    },
    btnLeft:{
      type:Boolean,
      default:false,
    },
    btnRight:{
      type:Boolean,
      default:false,
    },
    showRight: {
      type: Number,
      default: 0,
      validator: function(v) {
          return [0, 1, 2].indexOf(v) != -1
      }
    },
    sous:{
      type:Boolean,
      default:false,
    }
  },
  data() {
    return {
      tabActive:0,
      value:''
    };
  },
  methods:{
    tabChange: function (i) {
      this.tabActive = i;
      this.$emit('headerClick',i);
    },
    onSearch:function (param) { 
      console.log(123)
    },
    goBack:function (param) { 
      this.$router.go(-1);
    }
  },
  components: {
    // [Icon.name]:Icon

  },
  watch:{
    value:function (param) { 
      this.onSearch()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header-title
    position relative
    height 1rem
    background-color #fff
    text-align center
    border-bottom 1px solid #e1e1e1
    .title
      font-size 0.5rem
      line-height 1rem
      background-color #fafbfd
    .btn-left
      position: absolute;
      top: 0;
      height: 100%;
      z-index: 1;
      left: 0;
      line-height 1rem
      .van-icon-arrow-left 
        height 1rem
        line-height 1rem
        font-size 0.75rem
        color rgba(51, 51, 51, 0.64)
    .btn-right
      position: absolute;
      top: 0;
      height: 1rem;
      z-index: 1;
      right: 0;
      line-height 1rem
      padding-right: 0.1rem
      .btn-r 
        height: 1rem;
        line-height 1rem
        vertical-align middle
        box-sizing:border-box;
        padding: 0.1rem 0.1rem;
        font-size 0.6rem
        span
          display inline-block
          position: relative
          width 0.5rem
          transform:translateY(-50%);
          top 25%
          font-size 0.5rem
          padding-right 0.15rem
          img 
            display inline-block

            line-height 1rem
    .btn-tab
      height 1rem
      line-height 1rem   
      .tab-pill
        height 0.6rem   
        display: inline-block;
        vertical-align: middle;
        margin-top -0.1rem
        line-height: 0.6rem;
        border-radius: 0.64rem;
        border: 1px solid #aa1d4f;
        box-sizing: content-box;
        overflow: hidden;  
        .tab-pill-box 
          font-size 0
          .tab-pill-text
            display inline-block
            color: #ab2051;
            padding: 0 0.34rem;
            -webkit-transition: .3s;
            transition: .3s;
            span 
              font-size: 0.24rem;
              vertical-align: middle;
          .tab-pill-text.actives
            color: #fff;
            background-color: #aa1d4f;
            border-radius: 0.64rem;
            padding: 0 0.34rem;    
</style>


