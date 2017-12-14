<template>
    <div class="home-product clearfix">
        <h2 class="index-headline">
            {{ detail.productHeadline }} <span>{{ detail.EnglishHeadline }}</span>
        </h2>
        <div class="home-product-con clearfix">
            <!-- 
            <ul class="index-product-btn-box">
                <li class="index-product-btn" v-for="(i, index) in product" @click="activeItem = index">{{ i.productName }}</li>
            </ul>
            <div class="index-product-wrap">
                <div class="index-product-box" v-if="Oindex === activeItem" v-for="(i, Oindex) in product" v-html=" i.text "></div>
            </div>
             -->
            <ul class="index-product-btn-box">
                <li class="index-product-btn" v-for="(i, index) in product" @click="activeItem = index" :class="index ===  activeItem?'active':'' ">{{ i.productName }}</li>
            </ul>
            <div class="index-product-wrap">
                <div class="index-product-box" v-if="Oindex === activeItem" v-for="(i, Oindex) in product" v-html=" i.text "></div>
            </div>
        </div>
        <router-link :to="url" class="home-product-more">{{ detail.more }}</router-link>
    </div>
</template>

<script>
    import { postData, getData, apiUrl } from '@/constant/api'
    export default {
        data () {
            return {
                product: [],
                detail: {},
                url: '',
                activeItem: 0
            }
        },
        created() {
            getData('src/data/homeproduct.json').then((res) => {
                // console.log(res.result)
                this.product = res.result.productDetail
                this.detail = res.result
                this.url = res.result.url
            })
        },
        methods: { 

        }
    }
</script>

<style lang="scss" rel="stylesheet/stylus" scoped>
    .index-headline {
        width: 100%;
        height: 110px;
        line-height: 110px;
        position: relative;
        margin: 0 auto;
        text-align: left;
        font-size: 40px;
        color: #333;
        text-indent: 30px;
        span {
            color: #999;
            font-size: 18px;
        }

        // 文字超出文本框范围自动转为省略号
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .index-headline:before {
        content: '';
        display: block;
        width: 6px;
        height: 60px;
        background: #f59628;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        margin: auto 0;
    }
    .home-product {
        width: 100%;
        height: auto;
        background: #fff;
        margin: 0 auto 20px;
    }
    .home-product-more {
        display: block;
        width: 100%;
        height: 80px;
        line-height: 80px;
        color: #f59726;
        text-align: center;
    }

    .home-product-con {
        width: 100%;
        margin: 0 auto;
        height: auto;
        overflow: hidden;
        
    }

    .index-product-btn-box {
        width: 750px;
        overflow: hidden;

        flex-wrap: wrap;
        justify-content: space-around;
        margin-bottom: 40px;


        li {
            display: inline-block;
            width: 187px;
            height: 94px;
            background: red;
            // margin: 0 -3.1px 2px -3px;
            margin: 0 0 4px 0;
            padding: 0;
            box-sizing: border-box;
            background: url(./images/index-product-btn.png) repeat-y center;  
            font-size: 28px;
            line-height: 94px;
            text-align: center;
            color: #fff;      

            // 文字超出文本框范围自动转为省略号
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            transition: all .2s linear;
        }

        li.active {
            background: #804000;
        }
        
    }

    .index-product-wrap {
        width: 100%; 
        box-sizing: border-box;
        padding: 0 30px;
        overflow: hidden;

        font-size: 24px;
        line-height: 40px;
        text-align: center;
        color: #666; 
        
        .index-product-pic {
            width: 100%;

            img {
                max-width: 100%;
            }
        }
    }
   

</style>

<style lang="scss" rel="stylesheet/stylus">
    .index-product-pic {
        img {
            width: 100%;
            max-width: 100%;
        }
    }
</style>