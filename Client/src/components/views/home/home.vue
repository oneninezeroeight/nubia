<template>
  <div>
    <Header :toggle="1" ></Header>
    <Swiper></Swiper>
    <Panel></Panel>
    <div class="service">
      <h2>联系客服</h2>
      <a class="serviceCard">
        <i class="serviceIcon"></i>
        <div class="serviceInfo">
          <div>
            <p class="serviceTitle">在线客服</p>
          </div>
          <i class="arrowIcon"></i>
        </div>
      </a>
      <a class="serviceCard">
        <i class="phoneIcon"></i>
        <div class="serviceInfo">
          <div>
            <p class="serviceTitle">客服热线400-700-6600</p>
            <p class="serviceMessage">周一至周日 8:30-20:30 全年无休</p>
          </div>
          <i class="arrowIcon"></i>
        </div>
      </a>
    </div>
    <div class="footer">
      <div class="footerTitle">
        <a href="/active/privacy.html">隐私政策</a>
        <i></i>
        <a href="/active/cookies.html">关于Cookie</a>
      </div>
      <div class="footerContent">
        <a>2012-2019 深圳市努比亚信息技术有限公司 版权所有</a>
        <p>
          <a>粤ICP备18069660号-3</a>
          <i></i>
          <a href="#">ICP经营许可证编号：粤B2-20120688</a>
        </p>
        <a>粤公网安备 44030502000309号</a>
      </div>
    </div>
    <div class="no_more">没有更多啦~</div>
    <Footer :offset="0"></Footer>
  </div>
</template>
<script>
import Header from "../../header/header.vue";
// import Search from "";
import Panel from "../../panel/panel.vue";
import Footer from "../../footer/footer.vue";
import Swiper from "../../views/swiper/swiper.vue";
export default {
   

  components: {
    Header,
    Footer,
    Swiper,
    Panel
  }
};
</script>
