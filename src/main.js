//1.导入入口文件
import Vue from 'vue'
//2.导入路由
import VueRouter from 'vue-router'
//3.挂载路由文件
Vue.use(VueRouter)
//导入app组件
import app from './App.vue'
// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'
//按需导入mint-ui的header
import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//4.导入路由模块
import router from './router.js'

var vm = new Vue({
  el:'#app',
  data:{},
  methods:{},
  render:c=>c(app),
  router,//挂载路由对象到VM实例上
})