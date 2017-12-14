<template>
    <div class="market-container clearfix">
        <h2 class="index-headline">
            稀土行情 <span>CONTACT</span>
        </h2>
        <div class="market-wrap">
            <table class="market-con">
                <tr>
                    <td>名字</td>
                    <td>电话</td>
                </tr>
                <tr v-for="item in market">
                    <td>{{ item.name }}</td>
                    <td>{{ item.phone }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import { postData, getData, apiUrl } from '@/constant/api'
    export default {
        data () {
            return {
                market: {}
            }
        },
        created() {
            getData('src/data/homemarket.json').then((res) => {
                // console.log(res)
                this.market = res.result
            })
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
    .market-container {
        width: 100%;
        height: auto;
        margin: 0 auto;
        background: #fff;
    }

    .market-wrap {
        width: 100%;
        height: auto;
        box-sizing: border-box;
        padding: 0 30px 30px;
        margin: 0 auto;
    }

    .market-con {
        width: 100%;
        height: auto;
        margin: 0 auto;
        text-align: left;

        tr:nth-of-type(2n-1) {
            background: #fdeddc;
        }

        tr:nth-of-type(1) {
            font-size: 30px;
            color: #fff;
            background: #f59628;
        }

        tr {
            height: 64px;
            line-height: 64px;
            font-size: 26px;
            color: #666;

            td:nth-of-type(1) {
                width: 300px;
                text-indent: 20px;
            }
            td:nth-of-type(2) {
                width: 385px;
            }

        }
    }
</style>