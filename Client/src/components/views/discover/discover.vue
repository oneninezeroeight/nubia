<template>
  <div>
    <div class="header">
      <div class="left">
        <a title="nubia商城" id="goback" class="home" href="http://localhost:8080/#/">
          <span class="iconfont icon-fanhui"></span>
          <span>发现</span>
        </a>
      </div>
    </div>
<!--  -->
    <div class="nav">
      <div :class="['',{'activeNav':onset===0}]" >
        <a :offset=0 @click="change">产品热评</a>
      </div>
      <div :class="['',{'activeNav':onset===1}]" >
        <a :offset=1 @click="change">体验店</a>
      </div>
      <div :class="['',{'activeNav':onset===2}]" >
        <a :offset=2 @click="change">新闻中心</a>
      </div>
      <div :class="['',{'activeNav':onset===3}]" >
        <a :offset=3 @click="change">视频长廊</a>
      </div>
    </div>
    <component :is="view"></component>
<!--  -->
  </div>
</template>
<script>
 import Viewnews from '../discover/page/viewnews'
 import Activeshop from '../discover/page/activeshop'
 import News from '../discover/page/news'
 import Video from '../discover/page/video'
 export default {
   props: {
     offset:Number
   },
   data () {
     return {
       onset:0,
      view:'Viewnews'
     }
   },
   methods: {
     change(e){
       this.onset=e.target.attributes["offset"].nodeValue*1;
       switch (this.onset) {
         case 0:
           this.view='Viewnews'
           break;
       case 1:
         this.view='Activeshop'
           break;
             case 2:
         this.view='News'
           break;
             case 3:
         this.view='Video'
           break;
         default:
           break;
       }
     }
   },
    components: {
      Viewnews,
      Activeshop,
      News,
      Video
    }
 }

</script>
