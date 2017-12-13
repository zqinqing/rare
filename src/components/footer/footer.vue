<template>
	<div class="footer">
        <ul class="menu-wrap">
            <li class="menu-list" v-for="i in footList">
                <router-link :to="i.href" class="menu-link">
                    <i :class="i.taxon"></i>
                    <span class="menu-con"> {{ i.content }} </span>
                </router-link>
            </li>
        </ul> 
    </div>
</template>

<script>
export default {
    data () {
        return {
            footList: [
                {   
                    href: 'index',
                    taxon: 'iconfont icon-shouyehui',
                    content: ' 首页 '
                },
                {
                    href: 'business',
                    taxon: 'iconfont icon-yewu',
                    content: '业务板块'
                },
                {
                    href: 'news',
                    taxon: 'iconfont icon-xinwenzixun',
                    content: '新闻资讯'
                },
                {
                    href: 'about',
                    taxon: 'iconfont icon-about',
                    content: '关于我们'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
	.footer {
        width: 100%;
        height: 100px;
        background: #f6f6f6;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        box-sizing: border-box;
        border-top: 1px solid #ccc;

        ul {
            width: 100%;
            height: 99px;
            margin: 0 auto;
        }
    }

    .menu-wrap {
        display: -webkit-flex; 
        display: flex;
        -webkit-flex-direction: row; 
        -webkit-justify-content: space-around;

        li {
            display: inline-block;
            width: 186px;
            height: 99px;
        }
    }

    .menu-list {
        i {
            display: block;
            width: 100%;
            height: 68px;
            text-align: center;
            line-height: 68px;
            color: #666;
        }

        span {
            display: block;
            width: 100%;
            height: 30px;
            text-align: center;
            line-height: 16px;
            color: #666;
            font-size: 24px;
        }

        i.icon-shouyehui {
            font-size: 40px !important;
        }

        i.icon-yewu {
            font-size: 38px !important;
        }

        i.icon-xinwenzixun {
            font-size: 40px !important;
        }

        i.icon-about {
            font-size: 42px !important;
        }
    }
    .menu-list .router-link-active {
        span, i {
            color: #f59b33;
        }
    } 
</style>