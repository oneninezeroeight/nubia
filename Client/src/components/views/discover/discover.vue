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
        <a href="/viewnews.php">产品热评</a>
      </div>
      <div>
        <a href="/active/96dbde6b862724c.html">体验店</a>
      </div>
      <div>
        <a href="/news.php">新闻中心</a>
      </div>
      <div>
        <a href="/video.php">视频长廊</a>
      </div>
    </div>
    <div class="news-section" v-for="(item,index) in news" :key="index">
      <a>
        <img :src="item.src" :alt="item.h3">
      </a>
      <div class="news-wrap">
        <a>
          <h3 style="color:#4f4f4f">{{item.h3}}</h3>
          <p class="news-wrap-info">
            {{item.p}}</p>
        </a>
        <p class="news-wrap-tips">
          <span>2019-11-11</span>
          <span><i class="iconfont icon-ai-eye"></i>9999</span>
        </p>
      </div>
    </div>
    <div id="loading" class="dropload">
        <img src="https://static.nubia.cn/mobile/images/loading.gif" alt="" style="max-width:100%">下拉加载...
    </div>
    <Footer :offset=2></Footer>
  </div>
</template>
<script>
  import axios from 'axios'
  import Header from "../../header/header.vue";
  import Footer from "../../footer/footer.vue"

  export default {
    data() {
      return {
        news: [],
        num:5,
      }
    },
    methods: {
      getNews() {
        let _vue = this
        axios.get('http://localhost:3000/findnews').then((response) => {
          let {
            newsData
          } = response.data;
          let newsDatas = newsData.sort((a, b) => {
            return a._id * 1 - b._id * 1
          })
          _vue.news = newsDatas.slice(0,this.num)
        })
      }
    },
    computed: {
      height:window.height()  
    },
    mounted() {
      this.getNews()
    },
    components: {
      Header,
      Footer
    }
  }

</script>
