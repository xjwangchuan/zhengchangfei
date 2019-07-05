<template>
    <div>
        <HeaderTitle 
        title="首页" 
        :tab=true
        :btnLeft=true
        :btnRight=true
        :sous=true
        :showRight=2
        >
        <van-icon slot="right2" name="arrow-left" />
        <span slot="right2">12</span>
        <!-- <span>22</span> -->
        </HeaderTitle>
        <h1>main</h1>
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
    }
}
</script>
<style lang="stylus">
</style>

