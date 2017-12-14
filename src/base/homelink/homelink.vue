<template>
    <div class="homelink-wrap">
        <ul class="homelink-box">
            <li class="homelink-con" v-if="homelink.length > 0" v-for="i in homelink"> 
                <router-link :to="i.url" class="homelink-con-link">
                    <p></p>
                    <p></p>
                    <p>{{ i.content }}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import { postData, getData, apiUrl } from '@/api/api'
    export default {
        data () {
            return {
                homelink: {}
            }
        },
        created() {
            getData('src/data/homelink.json').then((res) => {
                // console.log(res)
                this.homelink = res.result
            })
        }
    }
</script>

<style lang="scss" rel="stylesheet/stylus" scoped>
    .homelink-wrap {
        width: 100%;
        height: 180px;
        margin-bottom: 20px;
        background: #fff;
    }
    .homelink-box {
        width: 100%;
        height: 180px;

        display: -webkit-flex; 
        display: flex;
        -webkit-flex-direction: row; 
        -webkit-justify-content: space-around;

        li:nth-of-type(1) {
            .homelink-con-link {
                p:nth-of-type(2) {
                    background: url('./icon/index-classify1.png') no-repeat center / 64px;
                }
            }
        }
        li:nth-of-type(2) {
            .homelink-con-link {
                p:nth-of-type(2) {
                    background: url('./icon/index-classify2.png') no-repeat center / 64px;
                }
            }
        }
        li:nth-of-type(3) {
            .homelink-con-link {
                p:nth-of-type(2) {
                    background: url('./icon/index-classify3.png') no-repeat center / 64px;
                }
            }
        }
        li:nth-of-type(4) {
            .homelink-con-link {
                p:nth-of-type(2) {
                    background: url('./icon/index-classify4.png') no-repeat center / 64px;
                }
            }
        }
    }
    .homelink-con {
        display: inline-block;
        width: 180px;
        height: 180px;
    }
    .homelink-con-link {
        display: block;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 30px 0 0 0;
        position: relative;

        p:nth-of-type(1) {
            width: 80px;
            height: 80px;
            margin: 0 auto;
            border-radius: 50%;
            background: #fce4c9;
        }

        p:nth-of-type(2) {
            width: 64px;
            height: 64px;
            border-radius: 5px;
            position: absolute;
            top: 23px;
            left: 0;
            right: 0;
            margin: 0 auto;
            background: green;
        }

        p:nth-of-type(3) {
            width: 100%;
            height: 70px;
            margin: 0 auto;
            text-align: center;
            line-height: 70px;
            font-size: 26px;
            color: #666;
        }
    }
</style>