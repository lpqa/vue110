<template>
  <div class="photo-info">
    <h3 class="title">{{phinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{phinfo.add_time | dataFormat}}</span>
      <span>点击：{{phinfo.click}}次</span>
    </p>
    <hr>
    <!-- 缩略图区域 -->
    <div class="thumbs">
      <vue-preview :slides="list"></vue-preview>
    </div>
    <!-- 图片内容区域 -->
    <div class="content" v-html="phinfo.content"></div>
    <!-- 现成的评论子组件 -->
    <cmt-box :id="id"></cmt-box>
  </div>
</template>
<script>
//导入评论子组件
import comment from '../subcomponents/comment.vue'
    export default {
      data(){
        return {
          id:this.$route.params.id,//从路由中获取到的图片id
          phinfo:{},
          list:[],//缩略图的数组
        }
      },
      created(){
        this.getPhotoinfo()
        this.getThumbs()
      },
      methods:{
        getPhotoinfo(){
          this.$http.get('api/getimageInfo/'+this.id)
          .then(res=>{
            let {status,message} = res.body
            if(status===0){
              this.phinfo = message[0]
            }
          })
        },
        getThumbs(){//获取缩略图
          this.$http.get('api/getthumimages/'+this.id)
          .then(res=>{
            let {status,message} = res.body
            if(status===0){
              //循环每个图片的数据，补全宽和高
              message.forEach(item=>{
                item.w=600;
                item.h=400;
                item.msrc = item.src
              })
              //把完整的数据保存到list列表里
              this.list = message
            }
          })
        }
      },
      components:{//注册评论子组件
        'cmt-box':comment
      }
    }
</script>
<style lang="scss" scoped>
  .photo-info{
    padding: 5px;
      .title{
      font-size: 16px;
      color: red;
      text-align: center;
      margin: 15px 0;
    }
    .subtitle{
      display: flex;
      justify-content: space-between;
      color: #226aff;
      font-size: 13px;
    }
    .content{
      font-size: 13px;
      line-height: 30px;
      margin-bottom: 5px;
    }
  }
  
</style>

