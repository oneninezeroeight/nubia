<template>
  <div class="search" v-bind:class="{'search-w':scrollFlag}" style="top: 0px;">
    <a v-if="toggle2" class="searchBack">
      <span class="iconfont icon-fanhui" @click="goback"></span>
    </a>
    <div
      v-if="toggle"
      class="searchLogoWhite searchLogo"
      v-bind:class="{'searchLogoBlack':scrollFlag}"
    ></div>
    <div v-if="toggle1" class="searchBox" @click="searcht">红魔3S</div>
    <div v-if="toggle2" class="inputWrap">
      <input type="text" placeholder="搜索" />
    </div>
    <a v-if="toggle1" href="/order/memberMessage" class="searchMessage">
      <i class="messageTip"></i>
      <img src="//shop-soa-static.nubia.com/images/buy_mobile/message.png" alt />
    </a>
    <a v-if="toggle2" class="searchBtn">搜索</a>
  </div>
</template>
<script>
export default {
  props: {
    toggle: Number,
    toggle1: Number,
    toggle2: Number
  },
  data() {
    return {
      scrollFlag: false
    };
  },
  mounted(){
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let _this = this;
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(scrollTop)
      if (scrollTop) {
        _this.scrollFlag = true;
      } else {
        _this.scrollFlag = false;
      }
    },
    searcht(){
      this.$router.push('/search')
    },
    goback(){
      this.$router.push('/')
    }
  }
};
</script>
<style scoped>
.search-w {
  background: rgb(255, 255, 255);
  border: none;
  transform: translateZ(0);
}
.searchLogoBlack {
  background: url(//shop-soa-static.nubia.com/images/logo_black.png) 0 center
    no-repeat;
  background-size: cover;
}
</style>

