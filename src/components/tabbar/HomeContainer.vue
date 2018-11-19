<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <h3>HomeContainer</h3>
  </div>
</template>

<script>
  
</script>

<style lang="scss" scoped>
  .mint-swipe{
    height: 200px;
    .mint-swipe-item{
      &:nth-of-type(1){
        background: red
      }
      &:nth-of-type(2){
        background: blue
      }
      &:nth-of-type(3){
        background: green
      }
    }
  }
</style>

