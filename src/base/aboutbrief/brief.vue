<template>
    <div class="brief-wrap">
        <h1 class="about-title">集团简介</h1>
        <div class="about-pic">
             <img src="src/base/aboutbrief/images/about-intro.png" alt="集团简介">
        </div>
        <div class="about-brief-text">
            {{ brief.briefText }}
        </div>
        <h1 class="about-title">公司架构</h1>
        <div class="about-pic">
            <img src="src/base/aboutbrief/images/about-framework.png" style="width: 86%" alt="公司架构">
        </div>
        <h1 class="about-title">公司荣耀</h1>
        <ul class="about-glory clearfix">
            <li v-for="item in brief.brieList">
                <div class="about-glory-pic">
                    <img :src="item.imgPath" :alt="item.alt">
                </div>
                <p>
                    {{ item.gloryTxt }}
                </p>
            </li>  
        </ul>
        <h1 class="about-title">企业文化</h1>
        <ul class="about-culture">
            <li v-for="item in brief.briefCulture">
                <h4>{{ item.cultureName }}</h4>
                <p>{{ item.cultureContent }}</p>
            </li>
        </ul>
        <h1 class="about-title">集团党建</h1>
        <div class="home-dutylantern-content">
            <swiper v-if="lantern.length > 0" :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <div class="swiper-slide" v-for="item in lantern">
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
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import { postData, getData, apiUrl } from '@/constant/api'
    export default {
        // name: 'carrousel',
        components: {
            swiper,
            swiperSlide
        },
        data () {
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
                brief: {},
                lantern: []
            }
        },
        created() {
            getData('src/data/aboutbrief.json').then((res) => {
                // console.log(res.result)
                this.brief = res.result
                this.lantern = res.result.lantern
            })
        }
    }
</script>

<style lang="scss" rel="stylesheet/stylus" scoped>
    .brief-wrap {
        width: 100%;
        height: auto;
        margin: 0 auto;
    }
    .about-title {
        width: 100%;
        height: 116px;
        line-height: 116px;
        background: #eee;
        text-align: center;
        color: #333;
        font-size: 44px;
    }
    .about-pic {
        width: 100%;
        height: auto;
        box-sizing: border-box;
        padding: 0 30px;
        overflow: hidden;
        margin-bottom: 20px;
        img {
            width: 100%;
        }
    }
    .about-brief-text {
        width: 100%;
        height: auto;
        box-sizing: border-box;
        padding: 0 30px;

        text-align: left;
        line-height: 50px;
        font-size: 30px;
        color: #333;
    }
    .about-glory {
        width: 100%;
        height: auto;
        box-sizing: border-box;
        padding: 0 30px;

        li {
            width: 330px;
            height: 486px;
            float: left;
            margin-bottom: 30px;
            position: relative;
            p {
                width: 100%;
                height: 82px;
                line-height: 82px;
                text-align: center;
                color: #000;
                              
                // 文字超出文本框范围自动转为省略号
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
        }
        li:nth-of-type(2n-1) {
            margin-right: 30px;
        }
    }
    .about-glory-pic {
        width: 100%;
        height: 400px;
        box-sizing: border-box;
        padding: 4px;
        background: #fff;
        overflow: hidden;
        img {
            width: 100%;
        }
    }
    .about-culture {
        width: 100%;
        height: auto;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 0 30px;

        li {
            width: 100%;
            height: 142px;
            background: #fff;
            box-sizing: border-box;
            position: relative;
            margin: 0 auto 20px;
            padding: 15px 0 17px 32px;

            h4, p {
                // 文字超出文本框范围自动转为省略号
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }

            h4 {
                width: 100%;
                height: 58px;
                text-align: left;
                line-height: 58px;
                color: #f59628;
                font-size: 28px;
            }

            p {
                width: 100%;
                height: 52px;
                text-align: left;
                line-height: 52px;
                color: #666;
                font-size: 24px;
            }
        }

        li:before {
            content: '';
            display: block;
            width: 4px;
            height: 142px;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            margin: auto 0;
            background: #edaf2c;
        }
    }
    .home-dutylantern-content {
        width: 100%;
        height: 450px;
        box-sizing: border-box;
        padding: 0 30px;
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
            // background: #fff;
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