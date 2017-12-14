<template>
    <div class="index-container clearfix">
        <!-- 首页轮播图 -->
        <lantern></lantern>
        <!-- 首页二级链接 -->
        <home-link></home-link>
        <!-- 首页新闻模块 -->
        <home-news></home-news>
        <!-- 首页产品中心 -->
        <home-product></home-product>
        <!-- 首页社会责任轮播图 -->
        <duty-lantern></duty-lantern>
        <!-- 首页稀土行情 -->
        <market></market>
        <!-- 首页联系方式 -->
        <relation></relation>
    </div>
</template>

<script>
    import lantern from 'base/swiper/lantern'
    import homeLink from 'base/homelink/homelink'
    import homeNews from 'base/homenews/homenews'
    import homeProduct from 'base/homeproduct/homeproduct'
    import dutyLantern from 'base/swiper/dutylantern'
    import market from 'base/homemarket/market'
    import relation from 'base/homerelation/relation'
    export default {
        components: {
            lantern,
            homeLink,
            homeNews,
            homeProduct,
            dutyLantern,
            market,
            relation
        }
    }
</script>

<style lang="scss" scoped>
    .index-container {
        width: 100%;
        height: auto;
        margin: 0 auto;
    }
</style>