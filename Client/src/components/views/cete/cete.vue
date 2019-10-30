<template>
  <div>
    <Header :toggle="0"></Header>
    <div class="nav_left">
      <ul>
        <li
          v-for="(item,index) in array"
          :key="index"
          :class="['',{'active':onset === index}]"
          @click="jump(index)"
          :offset="index"
        >
          <a :offset="index">{{item.cate_name}}</a>
        </li>
      </ul>
    </div>
    <div class="page-index">
      <div class="list_category2 d_jump" v-for="(item,index) in array" :key="index" :id="item._id">
        <a href class="title">
          <i></i>
          <p class="telephone">{{item.cate_name}}</p>
          <i></i>
        </a>
        <ul>
          <li v-for="(item,index) in array[index].infos" :key="index">
            <a href>
              <img :src="item.image_id" alt />
              <p>{{item.name}}</p>
            </a>
          </li>
        </ul>
        <p class="check_more">
          <a href>查看更多</a>
        </p>
      </div>
    </div>
    <Footer :offset="1"></Footer>
  </div>
</template>
<script>
import Header from "../../header/header.vue";
import Footer from "../../footer/footer.vue";
import axios from "axios";
export default {
  props: {
    offset: Number
    // href:string
  },
  data() {
    return {
      array: [],
      onset: 0,
      active: 0
    };
  },
  methods: {
    getData() {
      axios.get("http://localhost:3000/findCeteRouter").then(response => {
        let array = response.data.Datas.sort((a, b) => {
          return a._id * 1 - b._id * 1;
        });
        this.array = array;
      });
    },
    jump(index) {
      // 用 class="d_jump" 添加锚点
      let jump = document.querySelectorAll(".d_jump");
      let total = jump[index].offsetTop;
      let distance =
        document.documentElement.scrollTop || document.body.scrollTop;
      // 平滑滚动，时长500ms，每10ms一跳，共50跳
      let step = total / 50;
      this.onset = index;
      if (total > distance) {
        smoothDown();
      } else {
        let newTotal = distance - total;
        step = newTotal / 50;
        smoothUp();
      }
      function smoothDown() {
        if (distance < total) {
          distance += step;
          document.body.scrollTop = distance;
          document.documentElement.scrollTop = distance;
          setTimeout(smoothDown, 10);
        } else {
          document.body.scrollTop = total;
          document.documentElement.scrollTop = total;
        }
      }
      function smoothUp() {
        if (distance > total) {
          distance -= step;
          document.body.scrollTop = distance;
          document.documentElement.scrollTop = distance;
          setTimeout(smoothUp, 10);
        } else {
          document.body.scrollTop = total;
          document.documentElement.scrollTop = total;
        }
      }
    },
    onScroll() {
      let scrolled =
        document.documentElement.scrollTop || document.body.scrollTop; 
    }
    // change(e) {
    //   this.onset = e.target.attributes["offset"].nodeValue * 1;
    //   // this.offset=index.target.index()
    // }
  },
  mounted() {
    this.getData();
    // 监听scroll事件
    this.$nextTick(function() {
      window.addEventListener("scroll", this.onScroll);
    });
  },
  components: {
    Header,
    Footer
  }
};
</script>
<style scoped>
.search {
  background: white;
  border-bottom: 1px solid #ccc;
}
.search-w {
  background: white;
  border-bottom: 1px solid #ccc !important;
}
</style>