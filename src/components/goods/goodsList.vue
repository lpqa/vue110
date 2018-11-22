<template>
  <div class="goods-list">
    <div class="goods-item" v-for="item in goodsList" :key="item.id">
        <img :src="item.img_url" alt="">
        <h1 class="title">{{item.title}}</h1>
        <div class="info">
          <p class="price">
            <span class="now">￥{{item.sell_price}}</span>
            <span class="old">￥{{item.market_price}}</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩{{item.stock_quantity}}件</span>
          </p>
        </div>
    </div>
    <mt-button type="danger" size="large" @click="getMore" plain>加载更多</mt-button>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        pageIndex:1,
        goodsList:[],
      }
    },
    created(){
      this.getGoodsList()
    },
    methods:{
      getGoodsList(){
        this.$http.get('api/getgoods?pageindex='+this.pageIndex)
        .then(res=>{
          let {status,message} = res.body
          if(status===0){
            // this.goodsList = message
            this.goodsList = this.goodsList.concat(message)
          }
        })
      },
      getMore(){
        this.pageIndex++;
        this.getGoodsList();
      }
    }
  }
</script>
<style lang="scss" scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 7px;
  .goods-item{
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #999;
    margin: 4px 0;
    padding: 2px ;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 300px;
    img{
      width: 100%;
    }
    .title{
      font-size: 14px;
    }
    .info{
      background: #eee;
      p{
        margin: 0;
        padding: 5px;
      }
      .price{
        .now{
          color: #E31D1A;
          font-weight: bold;
          font-size: 16px;
        }
        .old{
          text-decoration:line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell{
        display: flex;
        justify-content: space-between;
        font-size: 12px;

        span:nth-of-type(1){
          color: red;
        }
        span:nth-of-type(2){
          color: #F8826B;
        }
      }
    }
  }
}
</style>

