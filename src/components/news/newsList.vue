<template>
  <div>
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in nList" :key="item.id">
					<router-link :to="'/home/newsInfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                <span>发表时间：{{item.add_time | dataFormat}}</span>
                <span>点击：{{item.click}}</span>
              </p>
						</div>
					</router-link>
				</li>
			</ul>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
  export default {
    data(){
      return{
        nList:[]
      }
    },
    created(){
      this.newsList()
    },
    methods:{
      newsList(){
        this.$http.get('api/getnewslist')
        .then(res=>{
          console.log(res.body);
          let {status,message} = res.body
          if(status===0){
            this.nList = message
          }else{
            Toast('获取新闻列表失败')
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .mui-table-view{
    h1{
      font-size: 14px;
    }
    .mui-ellipsis{
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between
    }
  }
</style>

