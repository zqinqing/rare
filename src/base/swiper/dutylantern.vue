<template>
    <div class="home-dutylantern">
        <h2 class="index-headline">
            {{ dutyTitle.dutyHeadline }} <span>{{ dutyTitle.EnglishHeadline }}</span>
        </h2>
        <div class="home-dutylantern-content">
            <swiper v-if="dutylantern.length > 0" :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <div class="swiper-slide" v-for="item in dutylantern">
                    <div class="dutylantern-con">
                        <h2 v-html="item.dutyTitle"></h2>
                        <time>{{ item.dutyTime }}</time>
                        <div v-html="item.dutyCotent"></div>
                    </div>    
                </div>
                <!-- Optional controls -->
                <div class="swiper-pagination" slot="pagination"></div>
                <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
                <!-- <div class="swiper-button-next" slot="button-next"></div> -->
                <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
            </swiper>
        </div>
        <router-link :to="url" class="home-product-more">{{ dutyTitle.more }}</router-link>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { postData, getData, apiUrl } from '@/api/api'
export default {
    // name: 'carrousel',
    components: {
        swiper,
        swiperSlide
    },
    data() {
        return {
            swiperOption: { //以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
                direction: 'horizontal',
                loop: true,
                autoplay: {
                    delay: 3000, //5秒切换一次
                },
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                },
                // 点击分页器的指示点分页器会控制Swiper切换
                paginationClickable: true,
                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
                // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                notNextTick: true,
                grabCursor: true,
                setWrapperSize: true,
                autoHeight: true,
                mousewheelControl: true,
                observeParents: true,
                // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
                debugger: true,
                //修改swiper自己或子元素时，自动初始化swiper 
                observer: true,
                //修改swiper的父元素时，自动初始化swiper 
                observeParents: true,
                onSlideChangeEnd: function(swiper) {
                    swiper.update(); //swiper更新
                }
            },
            dutylantern: [],
            dutyTitle: {},
            url: ''
        }
    },
    methods: {},
    beforeCreate() {},
    created() {
        getData('src/data/dutylantern.json').then((res) => {
            this.dutylantern = res.result.lantern
            this.dutyTitle = res.result
            this.url = res.result.url
            // console.log(this.dutylantern)
        })
    }
}

</script>
<style lang="scss" rel="stylesheet/stylus" scoped>
    .home-dutylantern {
        width: 100%;
        height: 644px;
        margin: 0 auto 20px;
        background: #fff;

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
        .home-product-more {
            display: block;
            width: 100%;
            height: 80px;
            line-height: 80px;
            color: #f59726;
            text-align: center;
        }
        .home-dutylantern-content {
            width: 100%;
            height: 450px;
            box-sizing: border-box;
            padding: 0 30px;
        }
    }
    .dutylantern-con {
        width: 690px;
        height: 450px;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 14px 0  0;

        h2 {
            width: 690px;
            height: 100px;
            margin: 0 auto;
            line-height: 50px;
            text-align: center;
            font-size: 34px;
            color: #333;

            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
        }

        time {
            display: block;
            width: 690px;
            height: 76px;
            margin: 0 auto;
            line-height: 76px;
            text-align: center;
            font-size: 20px;
            color: #666;
            
            // 文字超出文本框范围自动转为省略号
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }

        div {
            width: 690px;
            height: 214px;
            margin: 0 auto;
            line-height: 30px;
            text-align: center;
            font-size: 22px;
            color: #666;

            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 7;
            overflow: hidden;
        }
    }
</style>

<style lang="scss" rel="stylesheet/stylus">
    .home-dutylantern-content {

        .swiper-container {
            height: 450px;
            margin: 0 auto;
            position: relative;
            overflow: hidden;
            list-style: none;
            padding: 0;
            z-index: 1;
            background: #fff;
        }

        .swiper-pagination-bullet {
            width: 16px;
            height: 16px;
            display: inline-block;
            border-radius: 100%;
            background: #e1e1e1;
            opacity: 1;
        }
        .swiper-pagination-bullet-active {
            opacity: 1;
            background: #888;
        }

        .swiper-slide {
            img {
                width: 100%;
            }
        }
    }
</style>
