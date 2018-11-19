//导入入口文件
import Vue from 'vue'
//导入app组件
import app from './App.vue'
// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'
//按需导入mint-ui的header
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

var vm = new Vue({
  el:'#app',
  data:{},
  methods:{},
  render:c=>c(app),
})