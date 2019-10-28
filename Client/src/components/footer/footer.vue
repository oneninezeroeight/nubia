<template>
  <div class="nav_bottom">
    <ul style="padding-left:0px">
      <li
      v-for="(item,index) in tabbar"
      :key="index"
      @click="highLight(item.url)"
      :class="['',{'active':offset === index}]"
      >
          <a title="">
            <div></div>{{item.title}}
          </a>
      </li>
    </ul>
  </div>
</template>
<script>
import observer from "../../tools/observer";
export default {
  props: {
    offset: Number
  },
  data() {
    return {
      tabbar: [
        {
          title: "首页",
          url: "/",
          dot: false
        },
        {
          title: "分类",
          url: "cete",
          dot: false
        },
        {
          title: "发现",
          url: "discover",
          dot: false
        },
        {
          title: "购物车",
          url: "shop",
          dot: false
        },
        {
          title: "我",
          url: "mine",
          dot: false
        }
      ],
      // 控制高亮
      // offset: 0
    };
  },
  methods: {
    highLight(url) {
      //跳转
      this.$router.push(url)
      // 传递tabbar选项卡的索引值
      // observer.emit("setTabbar", index);
      // console.log(index)
    }
  }
};
</script>