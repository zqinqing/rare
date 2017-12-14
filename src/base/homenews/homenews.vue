<template>
    <div class="home-news-wrap">
        <ul class="home-news-head">
            <li class="home-news-head-list" v-if="homeNewsData.newsHeadList.length > 0" v-for="i in homeNewsData.newsHeadList">
                <router-link :to="i.url" class="home-news-head-link">
                    <img :src="i.imgPath" :alt="i.alt" :title="i.title">
                    <p>{{ i.content }}</p>
                </router-link>
            </li>
        </ul>
        <div class="home-news-con clearfix">
            <div class="home-news-con-pic">
                <img :src="homeNewsData.newsImg" :alt="homeNewsData.newsAlt">
                <div class="home-news-con-time">
                    <p>{{ newsDay }}</p>
                    <p>{{ yearMonth }}</p>
                </div>
            </div>
            <h2 class="home-news-con-h2">
                {{ homeNewsData.newsHeadline }}
            </h2>
            <p class="home-news-con-details">
                {{ homeNewsData.newsContent }}
            </p>
            <router-link :to="newsConUrl" class="news-con-url">MORE+</router-link>
        </div>
        <ul class="home-new-foot">
            <li class="home-new-foot-list" v-for="(i, index) in homeNewsData.newsConList">
                <router-link :to="newPath[index]" class="home-new-list-link">
                    <p class="home-new-foot-time" v-if="newFootDay.length">
                        <span>{{ newFootDay[index] }}</span>
                        <span>{{ newFootYearMonth[index] }}</span>
                    </p>
                    <div class="home-new-foot-con">
                        <h4>{{ i.newsListHeadline }}</h4>
                        <p>{{ i.newsListContent }}</p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { postData, getData, apiUrl, format } from '@/api/api'
export default {
    data() {
        return {
            homeNewsData: {},
            newsConUrl: '',
            yearMonth: '',
            newsDay: '',
            newFootDay: [],
            newFootYearMonth: [],
            newPath: []
        }
    },
    methods: {
        // 时间戳转日期字符串
        format (timestamp) {
            if (timestamp == null || typeof(timestamp) == 'string') {
                return timestamp;
            } else {
                let d = new Date(timestamp);
                return d.getFullYear() + '-' + (d.getMonth() + 1);
            }
        }
    },
    created() {
        getData('src/data/homenews.json').then((res) => {
            this.homeNewsData = res.result
            this.newsConUrl = res.result.newUrl
            
            // console.log(res.result.newsConList)

            // 获取时间
            if (res.result.newsTime.day < 10) {
                this.newsDay = '0' + res.result.newsTime.day
            } else {
                this.newsDay = res.result.newsTime.day
            }
            let newTime = res.result.newsTime.time
            this.yearMonth = this.format(newTime);

            // 底部获取时间
            let i = 0,t = [];
            for (i in res.result.newsConList) {
                if (res.result.newsConList[i].newsListTime.day < 10) {
                    this.newFootDay.push('0' + res.result.newsConList[i].newsListTime.day)
                }else {
                    this.newFootDay.push(res.result.newsConList[i].newsListTime.day)
                }
                // 获取年月
                t.push(res.result.newsConList[i].newsListTime.time)
                // 获取新闻列表链接
                this.newPath.push(res.result.newsConList[i].url)
            }
            // console.log(t)
            for (i in t) {
                this.newFootYearMonth.push(this.format(t[i]))
            }
            // console.log(this.newFootYearMonth)
            // console.log(this.newPath)
        })
    }
}

</script>
<style lang="scss" rel="stylesheet/stylus" scoped>
    .home-news-wrap {
        width: 100%;
        height: 840px;
        margin: 0 auto 20px;
        background: #fff;
    }
    .home-news-head {
        width: 100%;
        height: 128px;
        margin: 0 auto 20px;
        background: #fff;
        
        display: -webkit-flex; 
        display: flex;
        -webkit-flex-direction: row; 
        -webkit-justify-content: space-around;

        li {
            display: inline-block;
            width: 244px;
            height: 128px;
        }
    }

    .home-news-head-list {
        a.home-news-head-link {
            display: block;
            width: 100%;
            height: 100%;
            overflow: hidden;
            position: relative;
        }

        img {
            width: 100%;
        }
        
        p {
            width: 244px;
            height: 128px;
            line-height: 128px;
            text-align: center;
            color: #fff;

            // 文字超出文本框范围自动转为省略号
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;

            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            margin: 0 auto;
        }
    }

    .home-news-con {
        width: 100%;
        height: 356px;
        margin: 0 auto 34px;
        box-sizing: border-box;
        padding: 0 30px;
    }

    .home-news-con-pic {
        width: 100%;
        height: 148px;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
        img {
            width: 100%;
        }

        .home-news-con-time {
            width: 80px;
            height: 80px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            background: #f59629;
            color: #fff;

            p:nth-of-type(1) {
                width: 100%;
                height: 52px;
                text-align: center;
                line-height: 52px;
                font-size: 40px;

                // 文字超出文本框范围自动转为省略号
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }

            p:nth-of-type(2) {
                width: 100%;
                height: 28px;
                text-align: center;
                line-height: 28px;
                font-size: 14px;

                // 文字超出文本框范围自动转为省略号
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
        }
    }

    .home-news-con-h2 {
        width: 100%;
        height: 62px;
        // 文字超出文本框范围自动转为省略号
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        line-height: 62px;
        text-align: left;
        color: #333;
        font-size: 26px;
    }

    .home-news-con-details {
        width: 100%;
        height: 62px;
        line-height: 31px;
        text-align: left;
        color: #999;
        font-size: 22px;
        margin-bottom: 28px;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    .news-con-url {
        display: inline-block;
        width: 194px;
        height: 56px;
        line-height: 56px;
        background: #f59628;
        color: #fff;
        text-align: center;
        font-size: 20px;
    }

    .home-new-foot {
        width: 100%;
        height: 302px;
        margin: 0 auto;
    }

    .home-new-foot-list {
        width: 100%;
        height: 120px;
        margin: 0 auto 32px;
        background: #fff; 
    }

    .home-new-list-link {
        display: block;
        width: 100%;
        height: 100%;
    }

    .home-new-foot-time {
        width: 20%;
        height: 120px;
        float: left;

        span {
            display: inline-block;
            text-align: center;
            color: #999;

            // 文字超出文本框范围自动转为省略号
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }

        span:nth-of-type(1) {
            width: 142px;
            height: 90px;
            line-height: 90px;
            font-size: 50px;
        }
        span:nth-of-type(2) {
            width: 142px;
            height: 30px;
            line-height: 30px;
            font-size: 16px;
        }
    }
    .home-new-foot-con {
        width: 80%;
        height: 120px;
        box-sizing: border-box;
        padding: 0 30px 0 0;
        float: right;
        
        h4, p {
            display: inline-block;
            text-align: left;
        }

        h4 {
            width: 100%;
            height: 60px;
            line-height: 60px;
            color: #333;

            // 文字超出文本框范围自动转为省略号
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }

        p {
            width: 100%;
            height: 62px;
            line-height: 31px;
            color: #999;

            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
        }

    }
</style>
