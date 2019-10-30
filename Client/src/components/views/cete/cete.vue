<template>
    <div>
        <Header :toggle=0></Header>
        <div class="nav_left">
            <ul>
                <li v-for="(item,index) in array" :key="index" :offset=index :class="['',{'active':onset === index}]"  @click="change">
                    <a :offset=index>{{item.cate_name}}</a>
                </li>
            </ul>
        </div>
        <div class="page-index">
            <div class="list_category2" v-for="(item,index) in array" :key="index" :id=item._id>
                <a href="" class="title">
                    <i></i>
                    <p class="telephone">{{item.cate_name}}</p>
                    <i></i>
                </a>
                <ul>
                    <li v-for="(item,index) in array[index].infos" :key="index">
                        <a href="">
                            <img :src="item.image_id" alt="">
                            <p>{{item.name}}</p>
                        </a>
                    </li>
                </ul>
                <p class="check_more">
                    <a href="">查看更多</a>
                </p>
            </div>
        </div>
        <Footer :offset=1></Footer>
    </div>
</template>
<script>
import Header from "../../header/header.vue";
import Footer from "../../footer/footer.vue"
import axios from 'axios'
export default {
      props: {
    offset: Number,
  },
    data () {
        return {
            array:[],
            onset:0
        }
    },
    methods: {
      getData(){
          axios.get('http://localhost:3000/findCeteRouter').then((response)=>{           
              let array=response.data.Datas.sort((a,b)=>{
                return  a._id*1-b._id*1
              })
              this.array=array
          })
      },
      change(e){

        this.onset=e.target.attributes["offset"].nodeValue*1;
         
        //   this.offset=index.target.index()
      }  
    },
    mounted(){
        this.getData()
    },
    components:{
        Header,
        Footer
    }
}
</script>
<style scoped>
.search{
    background: white;
}
</style>