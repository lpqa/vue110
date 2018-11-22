<template>
  <div>
    <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for="item in cates" :key="item.id"
            @click="getPhotoListByCateId(item.id)">
              {{ item.title }}
            </a>
					</div>
				</div>
		</div>
    <ul class="photo-list">
      <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">{{item.title}}</h1>
          <div class="info-body">{{item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
//1.导入muijs
import mui from '../../lib/mui/js/mui.min.js'

    export default {
      data(){
        return{
          cates:[],//所有分类列表数据
          list:[],
        }
      },
      created(){
        this.getCategory()
        //进入页面就主动请求所有图片列表的数据
        this.getPhotoListByCateId(0)
      },
      mounted(){//当 组件中的DOM结构被渲染好并放到页面中后，会执行这个钩子函数
        //2.初始化 滑动区域
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
      },
      methods:{
        getCategory(){
          this.$http.get('api/getimgcategory')
          .then(res=>{
            let {status,message} = res.body
            if(status===0){
              message.unshift({title:'全部',id:0})
              this.cates = message
            }
          })
        },
        getPhotoListByCateId(cateId){//根据分类id获取图片列表
          this.$http.get('api/getimages/'+cateId)
          .then(res=>{
            let {status,message} = res.body
            if(status===0){
              this.list = message
            }
          })
        }
      }
    }
</script>
<style lang="scss" scoped>
  *{
    touch-action: pan-y
  }
  .photo-list{
    list-style: none;
    margin: 0;
    padding: 10px;
    padding-top: 0;
    li{
       position: relative;
      background: #ccc;
      text-align: center;
      margin-top: 10px;
      box-shadow: 0 0 9px#999;
      img{
        width: 100%;
        vertical-align: top;
      }
      img[lazy=loading] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info{
    position: absolute;
    bottom: 0;
    text-align: left;
    color: #fff;
    background: rgba(0,0,0,.4);
    max-height: 84px;
    .info-title{
      font-size: 14px;
    }
    .info-body{
      font-size: 13px;
    }
  }
  }
  
  
}
</style>

