<template>
  <div>
    <div class="shop-index">
      <div class="left">
        <a title="nubia商城" class="home">
          <span>
            <img src="https://static.nubia.cn/mobile/images/m_logo.png" style="width: 100%;" />
          </span>
        </a>
      </div>
      <div class="tit"></div>
      <div class="right">
        <ul>
          <li class="user">
            <a title="个人中心">
              <span class="iconfont icon-icon7"></span>
            </a>
          </li>
          <li class="cart">
            <a title="购物车" style="padding-right:0px;">
              <span class="iconfont icon-gouwuche"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- main -->
    <div class="viewport" style="background: rgb(236, 236, 236);" id="viewport">
      <div class="shopping_empty tips_view mitu_01">
        <div class="tips_msg">
          <h3>购物车还是空的</h3>
          <p>现在就去选购吧</p>
        </div>
        <div class="tips_btn">
          <a href="/index" class="button disable_button">去逛逛</a>
        </div>
      </div>
    </div>
    <Footer :offset="3"></Footer>
  </div>
</template>
<script>
import Header from "../../header/header.vue";
// import Search from "";
// import Panel from "";
import Footer from "../../footer/footer.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style scoped>
</style>