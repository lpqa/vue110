<template>
  <div class="info-container">
    <!-- 标题 -->
    <h3 class="title">{{nInfo.title}}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{nInfo.add_time | dataFormat}}</span>
      <span>点击：{{nInfo.click}}次</span>
    </p>
    <hr>
    <!-- 内容 -->
    <div class="content" v-html="nInfo.content">
    </div>
    <!-- 评论区域子组件 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>
<script>
import {Toast} from 'mint-ui';
  //导入评论子组件模块
  import comment from '../subcomponents/comment.vue'
    export default {
      data(){
        return{
          id:this.$route.params.id,//将URL地址栏传递过来的id 挂载到data上方便以后调用
          nInfo:{}
        }
      },
      created(){
        this.newsInfo()
      },
      methods:{
        newsInfo(){
          this.$http.get('api/getnew/'+this.id)
          .then(res=>{
            let {status,message} = res.body
            if(status===0){
              this.nInfo = message[0]
            }else{
              Toast('获取新闻详情失败')
            }
          })
        }
      },
      components:{//用来注册子组件节点
        "comment-box":comment
      }
    }
</script>
<style lang="scss">
  .info-container{
    padding: 0 4px;
    .title{
      font-size: 16px;
      text-align: center;
      margin: 15px 0;
      color: red;
    }
    .subtitle{
      font-size: 13px;
      color: #226aff;
      display: flex;
      justify-content: space-between
    }
    .content{
      img{
        width: 100%;
      }
    }
  }
</style>

