<template>
  <div class="hot">
    <Header :toggle="0" :toggle1="0" :toggle2="1"></Header>
    <p class="title">热门搜索</p>
    <ul>
      <li>红魔3S</li>
      <li>Z20</li>
      <li>红魔3</li>
      <li>努比亚阿尔法可以穿戴的手机</li>
      <li>努比亚X双屏黑科技 骁龙845</li>
      <li>红魔Mars电竞手机</li>
    </ul>
  </div>
</template>
<script>
import Header from "../../header/header.vue";
export default {
    components:{
        Header
    }
}
</script>
<style scoped>
.search {
  background: white;
  border-bottom: 1px solid #ccc;
}
</style>