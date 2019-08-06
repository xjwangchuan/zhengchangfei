<template>
  <div class="weather">
    <HeaderTitle 
      title='跑道气象'
      :tit=true
      :btnLeft=true
      >
    </HeaderTitle>
    <div class="weather">
      <div class="line">
        <div class="lineL">
					<div class="linel">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<i>12L</i>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div class="content">
						<div class="run ub">
							<span class="ub-f1"></span>
							<i>起始跑道</i>
							<span class="ub-f1"></span>
						</div>
						<span>跑道视程(1分钟): P2000</span>
						<span>跑道视程(10分钟): P2000</span>
						<span>湿度: 33%</span>
						<span>温度: 22.2℃</span>
						<span>2分钟平均风速: 4.23m/s</span>
					</div>
					<div class="content">
						<div class="run ub">
							<span class="ub-f1"></span>
							<i>中间跑道</i>
							<span class="ub-f1"></span>
						</div>
						<span>跑道视程(1分钟): P2000</span>
						<span>跑道视程(10分钟): P2000</span>
						<span>湿度: 33%</span>
						<span>温度: 22℃</span>
						<span>2分钟平均风速: 4.33m/s</span>
					</div>
					<div class="content">
						<div class="run ub">
							<span class="ub-f1"></span>
							<i>结束跑道</i>
							<span class="ub-f1"></span>
						</div>
						<span>跑道视程(1分钟): P2000</span>
						<span>跑道视程(10分钟): P2000</span>
						<span>湿度: 33%</span>
						<span>温度: 22℃</span>
						<span>2分钟平均风速: 3.33m/s</span>
					</div>
					<div class="linel">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<i>30R</i>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
        <div class="lineR">
					<div class="liner">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<i>12R</i>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div class="content conr">
						<div class="run ub">
							<span class="ub-f1"></span>
							<i>起始跑道</i>
							<span class="ub-f1"></span>
						</div>
						<span>跑道视程(1分钟): P2000</span>
						<span>跑道视程(10分钟): P2000</span>
						<span>湿度: 44%</span>
						<span>温度: 23℃</span>
						<span>2分钟平均风速: 5.33m/s</span>
					</div>
					<div class="content conr">
						<div class="run ub">
							<span class="ub-f1"></span>
							<i>中间跑道</i>
							<span class="ub-f1"></span>
						</div>
						<span>跑道视程(1分钟): P2000</span>
						<span>跑道视程(10分钟): P2000</span>
						<span>湿度: 36%</span>
						<span>温度: 22℃</span>
						<span>2分钟平均风速: 5.66m/s</span>
					</div>
					<div class="content conr">
						<div class="run ub">
							<span class="ub-f1"></span>
							<i>结束跑道</i>
							<span class="ub-f1"></span>
						</div>
						<span>跑道视程(1分钟): P2000</span>
						<span>跑道视程(10分钟): P2000</span>
						<span>湿度: 36%</span>
						<span>温度: 22℃</span>
						<span>2分钟平均风速: 2.11m/s</span>
					</div>
					<div class="liner">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<i>30L</i>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'
export default {
  name: "Weather",
  components: {
    HeaderTitle
  },
  data() {
    return {
      
    };
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background-color:#91928e;')
  },
 
  beforeDestroy () {
    document.querySelector('body').removeAttribute('style')
  }
};
</script>

<style lang="stylus" scoped>
  .weather
    background-color: #91928e;
    .line:before
      content: "";
      position: absolute;
      width: 0;
      height: 100%;
      right: 0.1rem;
      border-right: 0.18rem dashed #bcc6cb;
    .line:after
      content: "";
      position: absolute;
      width: 0;
      height: 100%;
      left: 0.1rem;
      border-left: 0.18rem dashed #bcc6cb;
    .line
      position: relative;
      margin-top: 0.1rem;
      padding-left: 0.1rem;
      padding-right: 0.1rem;
      display: flex;
      background-color: #91928e;
      width: 100%;
      box-sizing border-box
      .lineL
        flex: 1;
        padding: 0.2rem 0.1rem 0 0rem;
        .linel
          height: 0.4rem;
          margin-bottom: 0.4rem;
          overflow-y: hidden;
          padding-left 0.2rem
          span
            display: inline-block;
            width: 0.16rem;
            height: 0.4rem;
            background-color: #bcc6cb;
            vertical-align: middle;
          i 
            display: inline-block;
            width: 0.6rem;
            height: 0.4rem;
            background-color: #bcc6cb;
            vertical-align: middle;
            text-align: center;
            color: #91928e;  
            font-style:normal
        .content
          margin-bottom: 0.7rem; 
          span 
            display: block;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            color: #fff;
            font-size: 0.25em;
            margin-bottom: 0.2rem;
            height: 0.35rem;
            line-height: 0.35rem;
            text-align: left;  
            padding-left 0.32rem 
          .run
            height: 0.3rem;
            margin-bottom: 0.25rem;
            display flex
            padding-left 0.35rem
            padding-right 0.2rem
            span
              height: 1px;
              background-color: #bcc6cb;
              flex 1
            i 
              color: #fff;
              font-weight: 700;
              font-size: 0.3rem;
              vertical-align: middle;
              margin-top: -0.2rem;
              display: inline-block;
              padding: 0 0.2rem;
      .lineL:before
        content: "";
        position: absolute;
        width: 0.1rem;
        height: 96%;
        right: 49%;
        background: linear-gradient(to bottom, #fff, #fff 2em, transparent 2em, transparent);
        background-size: 100% 0.8rem;
      .lineR
        flex: 1;
        padding: 0.2rem 0.2em 0 0.2em;  
        .liner
          height: 0.4rem;
          margin-bottom: 0.4rem;
          overflow-y: hidden;
          span
            display: inline-block;
            width: 0.16rem;
            height: 0.4rem;
            background-color: #bcc6cb;
            vertical-align: middle;
          i 
            display: inline-block;
            width: 0.6rem;
            height: 0.4rem;
            background-color: #bcc6cb;
            vertical-align: middle;
            text-align: center;
            color: #91928e;    
            font-style:normal
        .content
          margin-bottom: 0.7rem; 
          span 
            display: block;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            color: #fff;
            font-size: 0.25em;
            margin-bottom: 0.2rem;
            height: 0.35rem;
            line-height: 0.35rem;
            text-align: left;  
            padding-left 0.32rem 
          .run
            height: 0.3rem;
            margin-bottom: 0.25rem;
            display flex
            padding-left 0.35rem
            padding-right 0.2rem
            span
              height: 1px;
              background-color: #bcc6cb;
              flex 1
            i 
              color: #fff;
              font-weight: 700;
              font-size: 0.3rem;
              vertical-align: middle;
              margin-top: -0.2rem;
              display: inline-block;
              padding: 0 0.2rem;      
</style>
