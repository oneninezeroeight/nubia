<template>
  <div>
    <div id="show_big" class="card show_big">
      <div class="col2">
        <div class="row2">
          <a href>
            <span>
              <img :src="col.src" />
            </span>
          </a>
        </div>
        <div class="rows">
          <div class="row1">
            <a href>
              <span>
                <img :src="row1.src" />
              </span>
            </a>
          </div>
          <div class="row1">
            <a href>
              <span>
                <img :src="row2.src" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- list -->
    <div class="list new-list">
      <div class="head">
        <span>热销机型</span>
      </div>
      <div class="photobar">
        <a href>
          <img :src="photobar.src"/>
        </a>
      </div>
      <div class="list-cell">
        <div class="row" >
          <div class="cell" v-for="(item,index) in lists" :key="index" >
            <a href>
              <span class="imgurl">
                <img :src="item.src">
              </span>
              <div class="cell-text" >
                <span class="phone-name">{{item.title}}</span>
                <span v-html="item.sub_title">{{item.sub_title}}</span>
                
              </div>
              <p class="phone-price"> 
                <span style="color: rgb(255, 94, 94);">￥<span>{{item.price}}</span> <span class="price-cancel">￥{{item.original_price}}</span></span>
                <span style="color: rgb(139, 139, 139);"></span>
              </p>
            </a>
          </div>
        </div> 
      </div>
      <div class="coll more">
        <a href>
          <span>查看更多手机></span>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      col:{},
      row1:{},
      row2:{},
      photobar:{},
      lists:[]
    }
  },
  methods: {
    getData(){
      axios.get('http://localhost:3000/findindex').then((response)=>{
        let {
          indexData
      }=response.data;
      // console.log(indexData.data);
      
      let arr=indexData.sort((a,b)=>{
        return a._id*1-b._id*1
      })
      console.log(arr);
      
  this.col= arr[1].datas[0];
  this.row1=arr[2].datas[0]
  this.row2=arr[3].datas[0]
  this.photobar=arr[6].datas[0]
  this.lists=arr[5].datas
      })
    }
  },
  mounted(){
    this.getData()
  }
}
</script>