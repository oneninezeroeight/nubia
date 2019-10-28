<template>
  <div>
    <div class="header">
      <div class="left">
        <a title="nubia商城" id="goback" class="home">
          <span class="iconfont icon-fanhui"></span>
          <span>发现</span>
        </a>
      </div>
    </div>

    <div class="nav">
      <div class="activeNav">
        <a>产品热评</a>
      </div>
      <div>
        <a>体验店</a>
      </div>
      <div>
        <a>新闻中心</a>
      </div>
      <div>
        <a>视频长廊</a>
      </div>
    </div>

    <div class="news-section">
      <a href="/viewnews.php?id=71">
        <img
          src="https://oss.static.nubia.cn/NewsCenter/2019-09-03/455387ea0a0adbc9ca5911c1809fe031.jpg"
          alt="『玩转nubia UI』个性熄屏，自己掌控！"
        />
      </a>
      <div class="news-wrap">
        <a href="/viewnews.php?id=71">
          <h3 style="color:#4f4f4f">『玩转nubia UI』个性熄屏，自己掌控！</h3>
          <p class="news-wrap-info">努比亚Z20</p>
        </a>
        <p class="news-wrap-tips">
          <span>2019-09-03</span>
          <span>
            <i class="iconfont icon-ai-eye"></i>5621
          </span>
        </p>
      </div>
    </div>
    <Footer :offset="2"></Footer>
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