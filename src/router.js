//1.导入路由的包
import VueRouter from 'vue-router'
//导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import newsList from './components/news/newsList.vue'
import newsInfo from './components/news/newsInfo.vue'
//3.创建路由对象
var router = new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/shopcar',component:ShopContainer},
    {path:'/search',component:SearchContainer},
    {path:'/home/newsList',component:newsList},
    {path:'/home/newsInfo/:id',component:newsInfo},
  ],
  //覆盖默认的路由高亮的类  默认的类叫router-link-active 改成mui-active
  linkActiveClass:'mui-active',
})
//把路由暴露出去
export default router