<template>
  <div>
    <div class="headerNav">
      <a class="back" @click="fanhui">
        <img alt="" src="https://shop-soa-static.nubia.com/images/buy_mobile/back.png?v=1572517539">
      </a>
      <div class="pullDown">
        <img alt="" src="//shop-soa-static.nubia.com/images/buy_mobile/pulldown.png?v=1572517539">

        <ul class="NavPopup">
          <li class="message">
            <a href="/order/memberMessage">
              <img alt="" src="//shop-soa-static.nubia.com/images/buy_mobile/message.png?v=1572517539">
              <span>消息通知</span>
            </a>
          </li>
          <li class="home">
            <a href="/">
              <img alt="" src="//shop-soa-static.nubia.com/images/buy_mobile/home.png?v=1572517539">
              <span>首页</span>
            </a>
          </li>
          <li class="collect">
            <a href="/memberfavorite.php">
              <img alt="" src="//shop-soa-static.nubia.com/images/buy_mobile/collect.png?v=1572517539">
              <span>我的收藏</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="phone">
      <div :class="['header',{'search-w':scrollFlag}]">
        <div class="left"><a class="home"><span class="iconfont icon-fanhui" @click="fanhui"></span>
            <span>红魔3S</span></a></div>
        <div class="center"></div>
        <div class="right">
          <ul style="width: 100%; height: 100%;">
            <li class="opt" style="width: 100%; height: 100%;"><a href="javascript:;"
                style="display: flex; width: 100%; height: 100%; justify-content: flex-end; align-items: center;"><img
                  alt="" src="//shop-soa-static.nubia.com/images/buy_mobile/dot.png?v=1572517539"
                  style="width: 50%;"></a>
              <ul class="NavPopup NavPopupHeader" style="top: 3rem; right: 0.5rem;">
                <li class="message"><a href="/order/memberMessage"><img alt=""
                      src="//shop-soa-static.nubia.com/images/buy_mobile/message.png?v=1572517539">
                    <span>消息通知</span></a></li>
                <li class="home"><a href="/"><img alt=""
                      src="//shop-soa-static.nubia.com/images/buy_mobile/home.png?v=1572517539"> <span>首页</span></a>
                </li>
                <li class="collect"><a href="/order/memberFavorite"><img alt=""
                      src="//shop-soa-static.nubia.com/images/buy_mobile/collect.png?v=1572517539">
                    <span>我的收藏</span></a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="opt" style="position: absolute;"></div>
      </div>
      <div style="padding-bottom: 50px;">
        <div style="width: 375px;">
          <img :src="data.image_id" alt="" style="width:100%">
        </div>
        <div class="pdt-desc">
          <div style="display: flex; width: 100%; justify-content: space-between; align-items: center;">
            <div productname="nubia Z17mini" class="pdt-title">{{data.name}} 8GB+128GB</div> <a class="bds_more"></a>
          </div>
          <div class="pdt-details"><span
              style="color: rgb(255, 77, 77); font-size: 16px; font-weight: 800;">六期免息|赠向量保护套（限11.1日和11月11日）</span><br>
          </div>
          <div class="pdt-price" style="color: rgb(51, 51, 51);"><span style="color: rgb(255, 94, 94);">
              ￥2999.00
              <del class="pdt-orig-price" style="color: rgb(153, 153, 153); display: none;">
                ￥2999.00
              </del></span>
            <!---->
            <!---->
          </div>
        </div>
        <!-- 数据渲染 -->
        <div class="seletGroup">
          <div id="coupon-bananer" class="coupon" style="display: none;">
            <div class="coupon-l">领券</div>
            <div class="coupon-r"></div> <img alt=""
              src="//shop-soa-static.nubia.com/images/newVersion/right.png?v=1572517539" class="open-coupon">
          </div>
          <div class="promo-sell">
            <div class="title">活动</div>
            <div class="promo-info">
              <p><i class="wrap-txt">赠品</i> <span>送红魔电竞向量保护套（3和3S通用）</span></p>
              <p class="spec" style="" hb1="true"><i class="wrap-txt">分期</i> <span>享受花呗6期免息分期</span></p>
              <p><i class="wrap-txt">积分</i><span>购买即赠积分，积分可抵现</span></p>
              <p><i class="wrap-txt">包邮</i> <span>
                  铜牌及以下满59、银牌满39、金牌包邮
                </span></p>
            </div>
          </div>
          <div class="seleted" @click="changeGood">
            <div class="seletedTitle">已选</div>
            <div class="seletedInfo">
              {{data.name}} 8GB+128GB 仅手机×1
            </div> <img alt="" src="https://shop-soa-static.nubia.com/images/newVersion/right.png?v=15725175393"
              class="open-selet">
          </div>
          <div id="cityAddress" class="address" style="">
            <div class="addressTitle">送至</div>
            <div class="addressInfo">
              <div id="cityResult" regionid="363">广东省 广州市 荔湾区</div>
              <div class="status"><span class="expressprefix">现货</span> <span
                  class="expresstime">11:00前下单，预计11月2日12:00点前送达</span></div>
            </div> <img alt="" src="//shop-soa-static.nubia.com/images/newVersion/right.png?v=1572517539"
              class="open-address">
          </div>
          <div class="near_shop"
            style="display: none; background: rgb(255, 255, 255); padding-left: 15%; margin-bottom: 1rem;"><a
              href="/active/8934837741ec16c.html"
              style="color: rgb(255, 0, 0); padding: 2px; font-size: 14px;">查找附近的云店&gt;&gt;</a></div>
        </div>
        <div class="recommend-pdt" style="">
          <div class="recommend-pdt-title">您可能会喜欢</div>
          <div class="slider-div">
            <ul id="slider_ul">
              <li><a href="/product/992/1342"><img src="//oss.static.nubia.cn/active/5db0f9b77e7451.png"></a>
                <p class="prodectName">红魔战鼓便携式TWS音箱</p>
                <p class="prodectPrice">¥88</p>
              </li>
              <li><a href="/product/991/1343"><img src="//oss.static.nubia.cn/active/5db0fc633eae792.png"></a>
                <p class="prodectName">百变魔龙盲盒手办</p>
                <p class="prodectPrice">¥69</p>
              </li>
              <li><a href="/product/990/1340"><img src="//oss.static.nubia.cn/active/5da98bc28effa80.png"></a>
                <p class="prodectName">红魔3/3S钢化磨砂玻璃屏幕保护膜</p>
                <p class="prodectPrice">¥59</p>
              </li>
              <li><a href="/product/986/1341"><img src="//oss.static.nubia.cn/active/5da98f5b33c5a96.png"></a>
                <p class="prodectName">红魔电容游戏手柄</p>
                <p class="prodectPrice">¥59</p>
              </li>
              <li><a href="/product/842/1210"><img src="//oss.static.nubia.cn/active/5d4259f246d3f74.png"></a>
                <p class="prodectName">红魔弹夹移动电源</p>
                <p class="prodectPrice">¥149</p>
              </li>
              <li><a href="/product/844/1173"><img src="//oss.static.nubia.cn/active/5cc50c85d3fe217.png"></a>
                <p class="prodectName">红魔电竞向量保护套（3和3S通用）</p>
                <p class="prodectPrice">¥79</p>
              </li>
              <li><a href="/product/976/1326"><img src="//oss.static.nubia.cn/active/5d8c81976623e21.png"></a>
                <p class="prodectName">红魔加长电竞数据线&nbsp;（2M）</p>
                <p class="prodectPrice">¥49</p>
              </li>
              <li><a href="/product/978/1328"><img src="//oss.static.nubia.cn/active/5d8c83ea07f3b47.png"></a>
                <p class="prodectName">红魔手机支架</p>
                <p class="prodectPrice">¥39</p>
              </li>
              <li><a href="/product/987/1337"><img src="//oss.static.nubia.cn/active/5da98c1b3a8cb19.png"></a>
                <p class="prodectName">飞智八爪鱼手柄</p>
                <p class="prodectPrice">¥358</p>
              </li>
              <li><a href="/product/988/1338"><img src="//oss.static.nubia.cn/active/5da98c4d18d9741.png"></a>
                <p class="prodectName">飞智游戏键盘</p>
                <p class="prodectPrice">¥299</p>
              </li>
              <li><a href="/product/989/1339"><img src="//oss.static.nubia.cn/active/5da98bf391a9a15.png"></a>
                <p class="prodectName">飞智键鼠转换器</p>
                <p class="prodectPrice">¥129</p>
              </li>
            </ul>
          </div>
        </div>
        <!-- 大量图片 -->
        <div class="slider_info">
          <div class="wap_content">
            <div :class="['wap_content_title',{'wap_content_guding':scrollflag}]"><a class="active">概述</a><a
                class="">参数</a></div>
            <div>
              <div class="wap_content_summary" style="position: relative;"> <img
                  src="https://oss.static.nubia.cn/active/5d70b5d18f79897.jpg?imageView2/q/85" alt=""> <img
                  src="https://oss.static.nubia.cn/active/5d70b5d1db40327.jpg?imageView2/q/85" alt=""> <img
                  src="https://oss.static.nubia.cn/active/5d70d45e42dfe33.jpg?imageView2/q/85" alt=""> <img
                  src="https://oss.static.nubia.cn/active/5d70b5d2490de98.jpg?imageView2/q/85" alt=""> <img
                  src="https://oss.static.nubia.cn/active/5d70b5d21b7f361.jpg?imageView2/q/85" alt=""> <img
                  src="https://oss.static.nubia.cn/active/5d70b5d1edaa979.jpg?imageView2/q/85" alt=""> <img
                  src="https://oss.static.nubia.cn/active/5d70b5d0e85a553.jpg?imageView2/q/85" alt=""> <img
                  src="https://oss.static.nubia.cn/active/5d70b5d2044cc20.jpg?imageView2/q/85" alt=""> <img
                  src="https://oss.static.nubia.cn/active/5d70b5d1179c894.jpg?imageView2/q/85" alt=""> <img
                  src="https://oss.static.nubia.cn/active/5d70b5d2e7c4a5.jpg?imageView2/q/85" alt=""> <img
                  src="https://oss.static.nubia.cn/active/5d70b5d17ad7d3.jpg?imageView2/q/85" alt=""> <img
                  src="https://oss.static.nubia.cn/active/5d775f94a647478.jpg?imageView2/q/85" alt=""> <img
                  src="https://oss.static.nubia.cn/active/5d70b5d17075635.jpg?imageView2/q/85" alt=""> <img
                  src="https://oss.static.nubia.cn/active/5d70b5d19314d70.jpg?imageView2/q/85" alt=""> <img
                  src="https://oss.static.nubia.cn/active/5d70b5d2f254a97.jpg?imageView2/q/85" alt=""> <img
                  src="https://oss.static.nubia.cn/active/5d70b5d2e8ced74.jpg?imageView2/q/85" alt=""> <img
                  src="https://oss.static.nubia.cn/active/5d70b5d25365868.jpg?imageView2/q/85" alt=""> <img
                  src="https://oss.static.nubia.cn/active/5d70b5d36056990.jpg?imageView2/q/85" alt=""> <img
                  src="https://oss.static.nubia.cn/active/5d8c7d685497f27.jpg?imageView2/q/85" alt="">
                <div style="padding:20px 0;text-align: center;border:2px solid #f00;background: #fff;">
                  <h2 style="font-size: 30px;font-weight: 600;color:#f00;margin-bottom: 16px; ">售后服务说明</h2>
                  <p>已激活的努比亚手机不支持七天无理由退货。</p>
                  <p>由于联网后手机会自动激活，请确认需求后再激活使用。</p>
                </div>
              </div>
              <div class="wap_content_params"> <img
                  src="https://oss.static.nubia.cn/active/5d70b48e8065a87.jpg?imageView2/q/85" alt=""> <img
                  src="https://oss.static.nubia.cn/active/5d70b48e7f8b513.jpg?imageView2/q/85" alt=""> <img
                  src="https://oss.static.nubia.cn/active/5d70b48e7f39a16.jpg?imageView2/q/85" alt=""> <img
                  src="https://oss.static.nubia.cn/active/5d70b48e8251537.jpg?imageView2/q/85" alt=""> <img
                  src="https://oss.static.nubia.cn/active/5d70b48e6d67214.jpg?imageView2/q/85" alt=""> <img
                  src="https://oss.static.nubia.cn/active/5d70b48e7f74062.jpg?imageView2/q/85" alt=""> <img
                  src="https://oss.static.nubia.cn/active/5d70b48e9016258.jpg?imageView2/q/85" alt=""> <img
                  src="https://oss.static.nubia.cn/active/5d70b48ebd55120.jpg?imageView2/q/85" alt=""> <img
                  src="https://oss.static.nubia.cn/active/5d70b48ebc4ef17.jpg?imageView2/q/85" alt=""> <img
                  src="https://oss.static.nubia.cn/active/5d70b48e979a531.jpg?imageView2/q/85" alt=""> <img
                  src="https://oss.static.nubia.cn/active/5d70b48e9d5ba19.jpg?imageView2/q/85" alt=""> </div>
            </div>
          </div>
        </div>
        <!-- 尾部 -->
        <div class="btn-group" style="display: block;">
          <div class="btn-group-action"><a id="btn-kefu" href="javascript:void(0);"
              kfhref="/live800.php?a=showchatbox"><img alt=""
                src="//shop-soa-static.nubia.com/images/newVersion/message(gray).png?v=1572517539"> <span>客服</span></a>
            <a id="btn-collect" pid="1309">
              <!----> <img alt="" src="//shop-soa-static.nubia.com/images/newVersion/collect.png?v=1572517539">
              <span>收藏</span></a> <a id="btn-shopCar" href="/cart/show"><img alt=""
                src="//shop-soa-static.nubia.com/images/newVersion/cart(gray).png?v=1572517539"> <span>购物车</span>
              <!----></a></div>
          <div class="btn-group-result"><a id="btn-addtocart" sid="1309" class="icon-addshop"><span>加入购物车</span></a>
            <form id="btn-buy" method="POST" action="/order/check"><input type="hidden" name="buy_from" value="1">
              <input id="params" type="hidden" name="item_param"> <a class="button active_button">立即购买</a></form> <span
              style="display: none;">立即预约, 已售罄, 整点抢购</span>
          </div>
        </div>
        <div class="toTop" style="display: block;">
          <img alt="" src="//shop-soa-static.nubia.com/images/buy_mobile/toTop.png?v=1572517539">
        </div>
        <!-- 弹窗 -->
        <div class="seletedMask" :style="NoneorBlock" @click="changeGood"></div>
        <div class="seletModal" style="height: 70%; overflow: auto;" :style="NoneorBlock">
          <div class="seletedHeader" style="position: fixed; top: 96px; left: 0px;">
            <div class="seletedHeaderMain"><img src="//oss.static.nubia.cn/active/5d6cd1333eb054.png" alt=""
                class="seletedPhone">
              <div class="seletedHeaderInfo">
                <p class="seletedPrice"><span style="color: rgb(255, 94, 94);">
                    ￥2999.00
                    <del class="pdt-orig-price" style="color: rgb(153, 153, 153); display: none;">
                      ￥2999.00
                    </del></span>
                  <!---->
                  <!---->
                </p>
                <p class="seletedName">红魔3S 玄铁黑 8GB+128GB</p>
              </div>
              <div class="close" @click="changeGood"><img alt="" src="//shop-soa-static.nubia.com/images/buy_mobile/close.png?v=1572517539">
              </div>
            </div>
          </div>
          <div class="seletedContent">
            <div id="selectColor" class="pdt-params">
              <p>颜色</p>
              <div class="colorWrap color">
                <div :class="['pdt-cell','productcolor',{'selected':selected==0}]" :select=0 @click="changeselect">
                  银色风暴
                </div>
                <div :class="['pdt-cell','productcolor',{'selected':selected==1}]" :select=1 @click="changeselect">
                  玄铁黑
                </div>
                <div :class="['pdt-cell','productcolor',{'selected':selected==2}]" :select=2 @click="changeselect">
                  红蓝竞技
                </div>
              </div>
            </div>
            <div id="selectSpec" class="pdt-params">
              <p>规格</p>
              <div class="colorWrap spec">
                <div class="pdt-cell2 productspec noShock">

                  12GB+256GB

                </div>
                <div class="pdt-cell2 productspec selected">

                  8GB+128GB

                </div>
              </div>
            </div>
            <div id="package" class="pdt-suit" style="" len="1">
              <p>套装</p>
              <ul id="selectPackage" class="suit-list" style="display: block;">
                <li def="1" class="pdt-suit-li good-content color">
                  <div style="overflow: hidden;">
                    <div class="suit-li-1"><span class="pdt-suit-sort"></span></div>
                    <div class="pdt-suit-div"><span>仅手机</span></div>
                  </div>
                  <ul class="groupItem" style="display: none;"></ul>
                </li>
              </ul>
            </div>
            <div class="pdt-suit pdt-ywb" style="overflow: hidden;">
              <p>
                服务（可选）
                <a href="/warranty.php?a=warrantyDoc"><img alt=""
                    src="//shop-soa-static.nubia.com/images/buy_mobile/hint.png?v=1572517539" class="question"></a></p>
              <ul id="selectBao" class="yanbao">
                <li ysid="1312" paymentextra="[object Object]" :class="['pdt-ywb-div',{'active':act}]" @click="Active">
                  <p class="pdt-ywb-name">屏碎宝（半年内保修1次）</p>
                  <p class="pdt-ywb-price">99.00元/年</p>
                </li>
                <li ysid="1311" paymentextra="[object Object]" :class="['pdt-ywb-div',{'active':liactive}]" @click="Active">
                  <p class="pdt-ywb-name">屏碎宝（1年内保修1次）</p>
                  <p class="pdt-ywb-price">149.00元/年</p>
                </li>
              </ul>
            </div>
            <div class="pdt-suit pdt-ywb" style="overflow: hidden;">
              <div hb1="true" style="">
                <p class="hbtitle">
                  分期
                </p>
                <ul class="hb">
                  <li class="pdt-ywb-div">
                    <p class="pdt-ywb-name">￥1022.66×3期</p>
                    <p class="pdt-ywb-price">含￥68.98手续费</p>
                  </li>
                  <li class="pdt-ywb-div">
                    <p class="pdt-ywb-name">￥499.83×6期</p>
                    <p class="pdt-ywb-price">含￥0.00手续费</p>
                  </li>
                  <li class="pdt-ywb-div">
                    <p class="pdt-ywb-name">￥268.66×12期</p>
                    <p class="pdt-ywb-price">含￥224.93手续费</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pdt-suit" style="overflow: hidden;">
              <p>
                数量
              </p>
              <div class="num">
                <div class="minus" @click="reduce"><img src="//shop-soa-static.nubia.com/images/buy_mobile/minus.png?v=1572517539">
                </div>
                <div class="totle">1</div>
                <div class="add" @click="add"><img src="//shop-soa-static.nubia.com/images/buy_mobile/add.png?v=1572517539"></div>
              </div> <span class="buyLimit">(限购2件)</span>
            </div>
            <div class="seledBtnGroup" style="display: block;">
              <div class="btn-group-result"><a id="btn-addtocart" sid="1309" class="icon-addshop">加入购物车</a>
                <form id="btn-buy" method="POST" action="/order/check"><input type="hidden" name="buy_from" value="1">
                  <input id="params" type="hidden" name="item_param"> <a class="button active_button">立即购买</a></form>
                <span style="display: none;">立即预约, 已售罄, 整点抢购</span> <a id="btn-other" class="" url="">立即购买</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    props: {
      select:Number,
      
    },
    data() {
      return {
        scrollFlag: false,
        scrollflag: 0,
        display:0,
        selected:0*1,
        syid:"",
        act:0,
        liactive:0,
        NoneorBlock: 'display:none',
        data: {}
      }
    },
    methods: {
      getData() {
        axios.get('http://localhost:3000/finddata', {
          params: {
            cuteid: this.$route.params.cateid,
            goodid: this.$route.params.goodid
          }
        }).then(res => {
          this.data = res.data.goodData
        })
      },
      handleScroll() {
        let _this = this;
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        // console.log(scrollTop)
        if (scrollTop) {
          _this.scrollFlag = true
        } else {
          _this.scrollFlag = false
        }
        if (scrollTop > 1100) {
          _this.scrollflag = 1
        } else {
          _this.scrollflag = 0
        }
      },
      fanhui() {
        this.$router.push("/cete")
      },
      changeGood(){

        this.display=!this.display
        if (this.display) {
          this.NoneorBlock='display:block'
        }else{
          this.NoneorBlock='display:none'
        }
          
      },
      changeselect(e){
        this.selected=e.target.getAttribute('select')*1
      },
      Active(e){

          if (e.target.getAttribute('ysid')=="1312") {
            this.liactive=0
          this.act=!this.act
            }else{
              this.act=0
              this.liactive=!this.liactive
            }
        },
        add(){
          document.querySelector(".totle").innerText=2
        },
        reduce(){
           document.querySelector(".totle").innerText=1
        }
    },
    created() {
      this.getData()
    },
    mounted() {

      window.addEventListener('scroll', this.handleScroll)
    }
  }

</script>

<style lang="stylus" scoped src='../../../assets/details.css'>
  
</style>
