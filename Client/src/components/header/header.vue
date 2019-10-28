<template>
  <div class="search" style="top: 0px;">
    <div v-if="toggle" class="searchLogoWhite searchLogo"></div>
    <div class="searchBox">红魔3S</div>
    <a href="/order/memberMessage" class="searchMessage">
      <i class="messageTip"></i>
      <img src="//shop-soa-static.nubia.com/images/buy_mobile/message.png" alt />
    </a>
  </div>
</template>
<script>
export default {
  props:{
    toggle:Number,
  }
}
</script>