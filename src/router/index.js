import Vue from 'vue'
import Router from 'vue-router'
// 稀土网-首页
import index from '@/components/index/index'
// 稀土网-业务板块
import business from '@/components/business/business'
// 稀土网-新闻资讯
import news from '@/components/news/news'
// 稀土网-关于我们
import about from '@/components/about/about'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
        // 首页
        path: '/', 
        redirect: '/index'
    },
    {
        // 首页
        path: '/index',
        name: 'index',
        component: index
    },
    {
        //  业务板块
        path: '/business',
        name: 'business',
        component: business
    },
    {
        // 新闻资讯
        path: '/news',
        name: 'news',
        component: news
    },
    {
        // 关于我们
        path: '/about',
        name: 'about',
        component: about
    }
  ]
})
