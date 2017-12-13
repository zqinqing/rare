<template>
    <div class="header">
       <a href="" class="head-left nono">
           <i class="iconfont icon-icon"></i>
       </a>
       <h1 class="head-con">{{ headTitle }}</h1>
       <a href="" class="head-right">
           <i class="iconfont icon-sousuo"></i>
       </a>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                headTitle: '首页'
            }
        },
        methods: {},
        watch: {
            //监听路由
            $route: {
                handler (val, oldVal) {
                    //获取路由参数
                    let url = this.$route.name
                    console.log('当前页面的router:' + url)
                    if (url === 'index') {
                        this.headTitle = '首页'
                    } else if (url === 'business') {
                        this.headTitle = '业务板块'
                    } else if (url === 'news') {
                        this.headTitle = '新闻资讯'
                    } else if (url === 'about') {
                        this.headTitle = '关于我们'
                    }
                },
                //深度观察监听
                deep: true
            }
        }
    }
</script>

<style lang="scss" scoped>
	.header {
        width: 100%;
        height: 88px;
        background: #f59628;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
    .head-con {
        width: 574px;
        height: 88px;
        margin: 0 auto;
        text-align: center;
        font-size: 32px;
        line-height: 88px;
        color: #222;
    }
    .head-left, .head-right {
        display: block;
        width: 88px;
        height: 88px;
        position: absolute;
        top: 0;
        bottom: 0;
        text-align: center;
        line-height: 88px;
        color: #222;
        .icon-icon {
            font-size: 40px !important;
        }
        .icon-sousuo {
            font-size: 32px !important;
        }
    }
    .head-left {
        left: 0;
    }
    .head-right {
        right: 0;
    }
    .head-left.nono, .head-right.none {
        display: none;
    }
</style>