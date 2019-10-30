<template>
  <div class="search" v-bind:class="{'search-w':scrollFlag}" style="top: 0px;">
    <div v-if="toggle" class="searchLogoWhite searchLogo" v-bind:class="{'searchLogoBlack':scrollFlag}"></div>
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
  }, 
  data(){
    return{
      scrollFlag:false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
  let _this=this;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  // console.log(scrollTop)
  if(scrollTop){
    _this.scrollFlag=true
  }else{
    _this.scrollFlag=false
  }
  }
}
}
</script>
<style scoped>
.search-w{
    background: rgb(255, 255, 255);
    border: none;
    transform: translateZ(0);
}
.searchLogoBlack {
    background: url(//shop-soa-static.nubia.com/images/logo_black.png) 0 center no-repeat;
    background-size: cover;
}
</style>

