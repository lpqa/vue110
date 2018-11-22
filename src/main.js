//1.导入入口文件
import Vue from 'vue'
//2.导入路由的包
import VueRouter from 'vue-router'
//3.挂载路由文件
Vue.use(VueRouter)

//导入时间格式化插件
import moment from 'moment'
//配置全局的过滤器格式化时间格式
Vue.filter('dataFormat',(dataStr,pattern='YYYY-MM-DD HH:mm:ss')=>{
  return moment(dataStr).format(pattern); 
})

//导入vue-resource
import VueResource from 'vue-resource'
//挂载vue-resource
Vue.use(VueResource)
//全局配置请求路径
Vue.http.options.root = 'http://www.lovegf.cn:8899'
//全局设置post提交表单数据格式 application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;
//导入app组件
import app from './App.vue'
// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'
import './lib/css/golbal.css'

//按需导入mint-ui组件的 Header
// import { Header,Swipe, SwipeItem,Button,Lazyload} from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);
import MintUi from 'mint-ui'
Vue.use(MintUi)
import 'mint-ui/lib/style.min.css'
//导入vue-preview做图片缩略图
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//4.导入路由模块
import router from './router.js'

var vm = new Vue({
  el:'#app',
  data:{},
  methods:{},
  render:c=>c(app),
  router,//挂载路由对象到VM实例上
})