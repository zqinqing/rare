<template>
    <div class="relation-wrap">
        <div class="relation-head">
            <div class="relation-head-top">
                <p>联系我们</p>
                <p>contact</p>
            </div>
            <div class="relation-head-con">
                <p>{{ relation.relationName }}</p>
                <p>{{ relation.relationSite }}</p>
            </div>
            <div class="relation-head-foot">
                <img :src="relation.imgpath" alt="联系我们二维码">
            </div>
        </div>
        <!-- index-foot begin -->
        <article class="index-foot">
            <ul class="index-phone">
                <li class="index-phone-list" v-for="item in relation.relationList">
                    <p>{{ item.name }}</p>
                    <p><i class="iconfont icon-dianhua"></i></p>
                    <p>{{ item.phone }}</p>
                </li>
            </ul>
            <ul class="index-under-link">
                <li v-for="item in relation.relationLink">
                    <router-link :to="item.path">{{item.name}}</router-link>
                </li>
            </ul>
            <p class="copyright">
                {{ relation.relationPut }}
            </p>
        </article>
        <!-- index-foot end -->
    </div>
</template>

<script>
    import { postData, getData, apiUrl } from '@/api/api'
    export default {
        data () {
            return {
                relation: {}
            }
        },
        created() {
            getData('src/data/homerelation.json').then((response) => {
                console.log(response)
                this.relation = response.result
            })
        }
    }
</script>

<style lang="scss" rel="stylesheet/stylus" scoped>
    .relation-wrap {
        width: 100%;
        height: 780px;
        background: #eee;
        margin: 0 auto;
    }

    .relation-head {
        width: 100%;
        height: 460px;
        background: url('./images/index-relation-bg.png') no-repeat center / 750px 460px;
    }

    .relation-head-top {
        width: 100%;
        height: 172px;
        box-sizing: border-box;
        padding: 50px 0 0 0;
        p {
            width: 100%;
            color: #fff;
            text-align: center;
        }
        p:nth-of-type(1) {
            height: 58px;
            line-height: 58px;
            font-size: 38px;
        }
        p:nth-of-type(2) {
            height: 38px;
            line-height: 38px;
            font-size: 20px;
        }
    }
    .relation-head-con {
        width: 100%;
        height: 84px;
        box-sizing: border-box;
        margin: 0 auto 30px;
        p {
            width: 100%;
            color: #fff;
            text-align: center;
            // 文字超出文本框范围自动转为省略号
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        p:nth-of-type(1){
            height: 44px;
            line-height: 44px;
            font-size: 24px;
        }
        p:nth-of-type(2){
            height: 40px;
            line-height: 40px;
            font-size: 18px;
        }
    }
    .relation-head-foot {
        width: 121px;
        height: 121px;
        margin: 0 auto;
        overflow: hidden;
        img {
            width: 100%;
        }
    }

    .index-foot {
        width: 100%;
        margin: 0 auto;
    }

    .index-phone {
        width: 100%;
        height: 150px;
        
        display: -webkit-flex; 
        display: flex;
        -webkit-flex-direction: row; 
        -webkit-justify-content: space-around;

        li {
            width: 250px;
            height: 150px;
            display: inline-block;
            background: url('./images/index-phone-bg.png') repeat-y center;
        }

        p {
            width: 100%;
            text-align: center;
            color: #fff;

            // 文字超出文本框范围自动转为省略号
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }

        p:nth-child(1) {
            height: 64px;
            font-size: 20px;
            line-height: 64px;
        }

        p:nth-child(2) {
            height: 20px;
            font-size: 20px;
            line-height: 20px;
        }

        p:nth-child(3) {
            height: 66px;
            line-height: 68px; 
        }
    }

    .index-under-link {
        width: 100%;
        height: 56px;
        margin-top: 36px;
        
        display: -webkit-flex; 
        display: flex;
        -webkit-flex-direction: row; 
        -webkit-justify-content: space-around;

        li {
            width: 187px;
            height: 56px;
            display: inline-block;
            text-align: center;
            a {
                height: 64px;
                font-size: 26px;
                line-height: 56px;
                color: #000;
            }
        }
    }

    .copyright {
        width: 100%;
        height: 50px;
        margin-bottom: 30px;
        font-size: 20px;
        line-height: 50px;
        text-align: center;
        color: #999;
        // 文字超出文本框范围自动转为省略号
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;

    }
</style>