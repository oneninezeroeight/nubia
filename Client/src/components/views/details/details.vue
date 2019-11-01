<template>
  <div>
    <div class="headerNav">
      <a class="back" @click="fanhui">
        <img alt src="https://shop-soa-static.nubia.com/images/buy_mobile/back.png?v=1572517539" />
      </a>
      <div class="pullDown">
        <img alt src="//shop-soa-static.nubia.com/images/buy_mobile/pulldown.png?v=1572517539" />

        <ul class="NavPopup">
          <li class="message">
            <a href="/order/memberMessage">
              <img alt src="//shop-soa-static.nubia.com/images/buy_mobile/message.png?v=1572517539" />
              <span>消息通知</span>
            </a>
          </li>
          <li class="home">
            <a href="/">
              <img alt src="//shop-soa-static.nubia.com/images/buy_mobile/home.png?v=1572517539" />
              <span>首页</span>
            </a>
          </li>
          <li class="collect">
            <a href="/memberfavorite.php">
              <img alt src="//shop-soa-static.nubia.com/images/buy_mobile/collect.png?v=1572517539" />
              <span>我的收藏</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="phone">
      <div :class="['header',{'search-w':scrollFlag}]">
        <div class="left">
          <a class="home">
            <span class="iconfont icon-fanhui" @click="fanhui"></span>
            <span>红魔3S</span>
          </a>
        </div>
        <div class="center"></div>
        <div class="right">
          <ul style="width: 100%; height: 100%;">
            <li class="opt" style="width: 100%; height: 100%;">
              <a
                href="javascript:;"
                style="display: flex; width: 100%; height: 100%; justify-content: flex-end; align-items: center;"
              >
                <img
                  alt
                  src="//shop-soa-static.nubia.com/images/buy_mobile/dot.png?v=1572517539"
                  style="width: 50%;"
                />
              </a>
              <ul class="NavPopup NavPopupHeader" style="top: 3rem; right: 0.5rem;">
                <li class="message">
                  <a href="/order/memberMessage">
                    <img
                      alt
                      src="//shop-soa-static.nubia.com/images/buy_mobile/message.png?v=1572517539"
                    />
                    <span>消息通知</span>
                  </a>
                </li>
                <li class="home">
                  <a href="/">
                    <img
                      alt
                      src="//shop-soa-static.nubia.com/images/buy_mobile/home.png?v=1572517539"
                    />
                    <span>首页</span>
                  </a>
                </li>
                <li class="collect">
                  <a href="/order/memberFavorite">
                    <img
                      alt
                      src="//shop-soa-static.nubia.com/images/buy_mobile/collect.png?v=1572517539"
                    />
                    <span>我的收藏</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="opt" style="position: absolute;"></div>
      </div>
      <div style="padding-bottom: 50px;">
        <div style="width: 375px;">
          <img :src="data.image_id" alt style="width:100%" />
        </div>
        <div class="pdt-desc">
          <div
            style="display: flex; width: 100%; justify-content: space-between; align-items: center;"
          >
            <div productname="nubia Z17mini" class="pdt-title">{{data.name}} 8GB+128GB</div>
            <a class="bds_more"></a>
          </div>
          <div class="pdt-details">
            <span
              style="color: rgb(255, 77, 77); font-size: 16px; font-weight: 800;"
            >六期免息|赠向量保护套（限11.1日和11月11日）</span>
            <br />
          </div>
          <div class="pdt-price" style="color: rgb(51, 51, 51);">
            <span style="color: rgb(255, 94, 94);">
              ￥2999.00
              <del
                class="pdt-orig-price"
                style="color: rgb(153, 153, 153); display: none;"
              >￥2999.00</del>
            </span>
            <!---->
            <!---->
          </div>
        </div>
        <!-- 数据渲染 -->
        <div class="seletGroup">
          <div id="coupon-bananer" class="coupon" style="display: none;">
            <div class="coupon-l">领券</div>
            <div class="coupon-r"></div>
            <img
              alt
              src="//shop-soa-static.nubia.com/images/newVersion/right.png?v=1572517539"
              class="open-coupon"
            />
          </div>
          <div class="promo-sell">
            <div class="title">活动</div>
            <div class="promo-info">
              <p>
                <i class="wrap-txt">赠品</i>
                <span>送红魔电竞向量保护套（3和3S通用）</span>
              </p>
              <p class="spec" style hb1="true">
                <i class="wrap-txt">分期</i>
                <span>享受花呗6期免息分期</span>
              </p>
              <p>
                <i class="wrap-txt">积分</i>
                <span>购买即赠积分，积分可抵现</span>
              </p>
              <p>
                <i class="wrap-txt">包邮</i>
                <span>铜牌及以下满59、银牌满39、金牌包邮</span>
              </p>
            </div>
          </div>
          <div class="seleted">
            <div class="seletedTitle">已选</div>
            <div class="seletedInfo">{{data.name}} 8GB+128GB 仅手机×1</div>
            <img
              alt
              src="https://shop-soa-static.nubia.com/images/newVersion/right.png?v=15725175393"
              class="open-selet"
            />
          </div>
          <div id="cityAddress" class="address" style>
            <div class="addressTitle">送至</div>
            <div class="addressInfo">
              <div id="cityResult" regionid="363">广东省 广州市 荔湾区</div>
              <div class="status">
                <span class="expressprefix">现货</span>
                <span class="expresstime">11:00前下单，预计11月2日12:00点前送达</span>
              </div>
            </div>
            <img
              alt
              src="//shop-soa-static.nubia.com/images/newVersion/right.png?v=1572517539"
              class="open-address"
            />
          </div>
          <div
            class="near_shop"
            style="display: none; background: rgb(255, 255, 255); padding-left: 15%; margin-bottom: 1rem;"
          >
            <a
              href="/active/8934837741ec16c.html"
              style="color: rgb(255, 0, 0); padding: 2px; font-size: 14px;"
            >查找附近的云店&gt;&gt;</a>
          </div>
        </div>
        <div class="recommend-pdt" style>
          <div class="recommend-pdt-title">您可能会喜欢</div>
          <div class="slider-div">
            <ul id="slider_ul">
              <li>
                <a href="/product/992/1342">
                  <img src="//oss.static.nubia.cn/active/5db0f9b77e7451.png" />
                </a>
                <p class="prodectName">红魔战鼓便携式TWS音箱</p>
                <p class="prodectPrice">¥88</p>
              </li>
              <li>
                <a href="/product/991/1343">
                  <img src="//oss.static.nubia.cn/active/5db0fc633eae792.png" />
                </a>
                <p class="prodectName">百变魔龙盲盒手办</p>
                <p class="prodectPrice">¥69</p>
              </li>
              <li>
                <a href="/product/990/1340">
                  <img src="//oss.static.nubia.cn/active/5da98bc28effa80.png" />
                </a>
                <p class="prodectName">红魔3/3S钢化磨砂玻璃屏幕保护膜</p>
                <p class="prodectPrice">¥59</p>
              </li>
              <li>
                <a href="/product/986/1341">
                  <img src="//oss.static.nubia.cn/active/5da98f5b33c5a96.png" />
                </a>
                <p class="prodectName">红魔电容游戏手柄</p>
                <p class="prodectPrice">¥59</p>
              </li>
              <li>
                <a href="/product/842/1210">
                  <img src="//oss.static.nubia.cn/active/5d4259f246d3f74.png" />
                </a>
                <p class="prodectName">红魔弹夹移动电源</p>
                <p class="prodectPrice">¥149</p>
              </li>
              <li>
                <a href="/product/844/1173">
                  <img src="//oss.static.nubia.cn/active/5cc50c85d3fe217.png" />
                </a>
                <p class="prodectName">红魔电竞向量保护套（3和3S通用）</p>
                <p class="prodectPrice">¥79</p>
              </li>
              <li>
                <a href="/product/976/1326">
                  <img src="//oss.static.nubia.cn/active/5d8c81976623e21.png" />
                </a>
                <p class="prodectName">红魔加长电竞数据线&nbsp;（2M）</p>
                <p class="prodectPrice">¥49</p>
              </li>
              <li>
                <a href="/product/978/1328">
                  <img src="//oss.static.nubia.cn/active/5d8c83ea07f3b47.png" />
                </a>
                <p class="prodectName">红魔手机支架</p>
                <p class="prodectPrice">¥39</p>
              </li>
              <li>
                <a href="/product/987/1337">
                  <img src="//oss.static.nubia.cn/active/5da98c1b3a8cb19.png" />
                </a>
                <p class="prodectName">飞智八爪鱼手柄</p>
                <p class="prodectPrice">¥358</p>
              </li>
              <li>
                <a href="/product/988/1338">
                  <img src="//oss.static.nubia.cn/active/5da98c4d18d9741.png" />
                </a>
                <p class="prodectName">飞智游戏键盘</p>
                <p class="prodectPrice">¥299</p>
              </li>
              <li>
                <a href="/product/989/1339">
                  <img src="//oss.static.nubia.cn/active/5da98bf391a9a15.png" />
                </a>
                <p class="prodectName">飞智键鼠转换器</p>
                <p class="prodectPrice">¥129</p>
              </li>
            </ul>
          </div>
        </div>
        <!-- 大量图片 -->
        <div class="slider_info">
          <div class="wap_content">
            <div :class="['wap_content_title',{'wap_content_guding':scrollflag}]">
              <a class="active">概述</a>
              <a class>参数</a>
            </div>
            <div>
              <div class="wap_content_summary" style="position: relative;">
                <img
                  src="https://oss.static.nubia.cn/active/5d70b5d18f79897.jpg?imageView2/q/85"
                  alt
                />
                <img
                  src="https://oss.static.nubia.cn/active/5d70b5d1db40327.jpg?imageView2/q/85"
                  alt
                />
                <img
                  src="https://oss.static.nubia.cn/active/5d70d45e42dfe33.jpg?imageView2/q/85"
                  alt
                />
                <img
                  src="https://oss.static.nubia.cn/active/5d70b5d2490de98.jpg?imageView2/q/85"
                  alt
                />
                <img
                  src="https://oss.static.nubia.cn/active/5d70b5d21b7f361.jpg?imageView2/q/85"
                  alt
                />
                <img
                  src="https://oss.static.nubia.cn/active/5d70b5d1edaa979.jpg?imageView2/q/85"
                  alt
                />
                <img
                  src="https://oss.static.nubia.cn/active/5d70b5d0e85a553.jpg?imageView2/q/85"
                  alt
                />
                <img
                  src="https://oss.static.nubia.cn/active/5d70b5d2044cc20.jpg?imageView2/q/85"
                  alt
                />
                <img
                  src="https://oss.static.nubia.cn/active/5d70b5d1179c894.jpg?imageView2/q/85"
                  alt
                />
                <img
                  src="https://oss.static.nubia.cn/active/5d70b5d2e7c4a5.jpg?imageView2/q/85"
                  alt
                />
                <img
                  src="https://oss.static.nubia.cn/active/5d70b5d17ad7d3.jpg?imageView2/q/85"
                  alt
                />
                <img
                  src="https://oss.static.nubia.cn/active/5d775f94a647478.jpg?imageView2/q/85"
                  alt
                />
                <img
                  src="https://oss.static.nubia.cn/active/5d70b5d17075635.jpg?imageView2/q/85"
                  alt
                />
                <img
                  src="https://oss.static.nubia.cn/active/5d70b5d19314d70.jpg?imageView2/q/85"
                  alt
                />
                <img
                  src="https://oss.static.nubia.cn/active/5d70b5d2f254a97.jpg?imageView2/q/85"
                  alt
                />
                <img
                  src="https://oss.static.nubia.cn/active/5d70b5d2e8ced74.jpg?imageView2/q/85"
                  alt
                />
                <img
                  src="https://oss.static.nubia.cn/active/5d70b5d25365868.jpg?imageView2/q/85"
                  alt
                />
                <img
                  src="https://oss.static.nubia.cn/active/5d70b5d36056990.jpg?imageView2/q/85"
                  alt
                />
                <img
                  src="https://oss.static.nubia.cn/active/5d8c7d685497f27.jpg?imageView2/q/85"
                  alt
                />
                <div
                  style="padding:20px 0;text-align: center;border:2px solid #f00;background: #fff;"
                >
                  <h2
                    style="font-size: 30px;font-weight: 600;color:#f00;margin-bottom: 16px; "
                  >售后服务说明</h2>
                  <p>已激活的努比亚手机不支持七天无理由退货。</p>
                  <p>由于联网后手机会自动激活，请确认需求后再激活使用。</p>
                </div>
              </div>
              <div class="wap_content_params">
                <img
                  src="https://oss.static.nubia.cn/active/5d70b48e8065a87.jpg?imageView2/q/85"
                  alt
                />
                <img
                  src="https://oss.static.nubia.cn/active/5d70b48e7f8b513.jpg?imageView2/q/85"
                  alt
                />
                <img
                  src="https://oss.static.nubia.cn/active/5d70b48e7f39a16.jpg?imageView2/q/85"
                  alt
                />
                <img
                  src="https://oss.static.nubia.cn/active/5d70b48e8251537.jpg?imageView2/q/85"
                  alt
                />
                <img
                  src="https://oss.static.nubia.cn/active/5d70b48e6d67214.jpg?imageView2/q/85"
                  alt
                />
                <img
                  src="https://oss.static.nubia.cn/active/5d70b48e7f74062.jpg?imageView2/q/85"
                  alt
                />
                <img
                  src="https://oss.static.nubia.cn/active/5d70b48e9016258.jpg?imageView2/q/85"
                  alt
                />
                <img
                  src="https://oss.static.nubia.cn/active/5d70b48ebd55120.jpg?imageView2/q/85"
                  alt
                />
                <img
                  src="https://oss.static.nubia.cn/active/5d70b48ebc4ef17.jpg?imageView2/q/85"
                  alt
                />
                <img
                  src="https://oss.static.nubia.cn/active/5d70b48e979a531.jpg?imageView2/q/85"
                  alt
                />
                <img
                  src="https://oss.static.nubia.cn/active/5d70b48e9d5ba19.jpg?imageView2/q/85"
                  alt
                />
              </div>
            </div>
          </div>
        </div>
        <!-- 尾部 -->
        <div class="btn-group" style="display: block;">
          <div class="btn-group-action">
            <a id="btn-kefu" href="javascript:void(0);" kfhref="/live800.php?a=showchatbox">
              <img
                alt
                src="//shop-soa-static.nubia.com/images/newVersion/message(gray).png?v=1572517539"
              />
              <span>客服</span>
            </a>
            <a id="btn-collect" pid="1309">
              <!---->
              <img alt src="//shop-soa-static.nubia.com/images/newVersion/collect.png?v=1572517539" />
              <span>收藏</span>
            </a>
            <a id="btn-shopCar" href="/cart/show">
              <img
                alt
                src="//shop-soa-static.nubia.com/images/newVersion/cart(gray).png?v=1572517539"
              />
              <span>购物车</span>
              <!---->
            </a>
          </div>
          <div class="btn-group-result">
            <a id="btn-addtocart" sid="1309" class="icon-addshop">
              <span>加入购物车</span>
            </a>
            <form id="btn-buy" method="POST" action="/order/check">
              <input type="hidden" name="buy_from" value="1" />
              <input id="params" type="hidden" name="item_param" />
              <a class="button active_button">立即购买</a>
            </form>
            <span style="display: none;">立即预约, 已售罄, 整点抢购</span>
          </div>
        </div>
        <div class="toTop" :style="{display:Top}" @click="toTOP">
          <img alt src="//shop-soa-static.nubia.com/images/buy_mobile/toTop.png?v=1572517539" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      scrollFlag: false,
      scrollflag: 0,
      Top: "",
      data: {}
    };
  },
  methods: {
    getData() {
      axios
        .get("http://localhost:3000/finddata", {
          params: {
            cuteid: this.$route.params.cateid,
            goodid: this.$route.params.goodid
          }
        })
        .then(res => {
          this.data = res.data.goodData;
        });
    },
    handleScroll() {
      let _this = this;
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(scrollTop)
      if (scrollTop) {
        _this.scrollFlag = true;
        _this.Top = "block";
      } else {
        _this.scrollFlag = false;
        _this.Top = "none";
      }
      if (scrollTop > 1100) {
        _this.scrollflag = 1;
      } else {
        _this.scrollflag = 0;
      }
    },
    toTOP() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    fanhui() {
      this.$router.push("/cete");
    }
  },
  created() {
    this.getData();
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="stylus" scoped>
ol, ul {
  list-style: none;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

li, img, label, input {
  vertical-align: middle;
}

body, h1, h2, h3, p, dl, dd, ol, ul, th, td, form, fieldset, input, button, textarea {
  margin: 0;
  padding: 0;
}

.headerNav {
  /* display: inline-block; */
  z-index: 1;
}

.back, .pullDown {
  width: 3em;
  height: 3em;
  display: inline-block;
  position: absolute;
  z-index: 1;
}

.back {
  top: 1.5em;
  left: 1.5em;
}

.back>img, .pullDown>img {
  width: 100%;
}

.pullDown {
  top: 1.5em;
  right: 1.5em;
}

.NavPopup {
  display: none;
  position: absolute;
  right: 0px;
  background: rgba(255, 255, 255, 0.8);
  width: 7.5rem;
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  box-sizing: border-box;
}

.NavPopup li {
  width: 100%;
  height: 2.9em;
}

.NavPopup li a {
  display: inline-block;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.NavPopup li a img {
  width: 20% !important;
  margin-right: 0.8rem;
  min-width: 0 !important;
}

.NavPopup li a span {
  display: inline-block;
  width: 80%;
  text-align: left;
  color: rgb(126, 126, 126);
  font-size: 1.2em;
}

.message img, .collect img {
  transform: scale(1.2);
}

.header {
  display: none;
  position: fixed;
  top: 0rem;
  left: 0px;
  height: 4em !important;
  background-color: #fff;
  z-index: 99;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.search-w {
  background: rgb(255, 255, 255);
  border: none;
  display: flex;
}

.header .left {
  margin-left: 1rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header .center {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header .right {
  margin-right: 1rem;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* width: 20%; */
  min-width: 3%;
}

.pdt-desc {
  margin-bottom: 1px;
  position: relative;
}

.pdt-desc {
  font-size: 18px;
  background: #fff;
  line-height: 1.5;
  padding: 10px 1rem;
  text-align: left;
  margin-top: 1px;
  margin-bottom: 5px;
}

.pdt-desc .pdt-title {
  color: rgb(25, 25, 25);
  font-weight: bold;
}

.bds_more {
  background-image: url('https://shop-soa-static.nubia.com/images/newVersion/share.png'); // shop-soa-static.nubia.com/images/newVersion/share.png);
  background-size: contain;
  color: #333;
  line-height: 16px;
  height: 20px;
  width: 20px;
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;
}

.pdt-details {
  display: inline-block;
  width: 100%;
  font-size: 15px !important;
  margin: 0.4rem 0 0.8rem 0;
  font-family: 'agency fb';
}

.pdt-details * {
  font-size: 15px !important;
  font-family: 'agency fb';
}

.mui-content .pdt-price {
  font-size: 1.3rem;
  display: inline-block;
  width: 100%;
  font-family: 'Gotham-Medium';
}

.seletGroup {
  width: 100%;
  display: inline-block;
  background: #fff;
  margin: 0.3rem 0;
  padding: 0rem 1rem;
}

.promo-sell {
  background: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid rgb(238, 238, 238);
  padding: 1.5rem 0px;
}

.promo-sell .title {
  width: 15%;
  font-size: 0.9rem;
  color: rgb(134, 134, 134);
}

.promo-info {
  width: 85%;
  display: inline-block;
}

.promo-info p {
  width: 100%;
  margin-bottom: 0.4rem;
  color: rgb(53, 53, 53);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.wrap-txt {
  margin-right: 0.75rem;
  color: rgb(255, 94, 94);
  padding: 0rem 0.5rem;
  border-radius: 0.3rem;
  border: 1px solid rgb(255, 94, 94);
  background: white;
  font-size: 0.9rem;
}

.promo-info p span {
  display: inline-block;
  width: 75%;
  font-size: 0.9rem;
}

.seleted {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5rem 0px;
}

.seletedTitle, .addressTitle {
  width: 15%;
  font-size: 0.9rem;
  color: rgb(134, 134, 134);
}

.open-selet, .open-address {
  width: 5%;
}

.address {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5rem 0px;
  background: #fff;
  border-top: 1px solid rgb(238, 238, 238);
}

.addressInfo {
  width: 80%;
  display: inline-block;
}

#cityResult {
  font-size: 0.9rem;
  color: rgb(57, 57, 57);
}

.address .status {
  margin-top: 0.3rem;
  font-size: 0.85rem;
  padding-right: 2rem;
}

.address .status .expressprefix {
  color: rgb(255, 94, 94);
}

.address .status .expresstime {
  color: rgb(120, 120, 120);
}

.recommend-pdt {
  background: #fff;
  line-height: 1.5;
  padding: 1.7rem 1rem;
  height: auto;
  overflow: hidden;
  margin-bottom: 0.3rem;
}

.recommend-pdt-title {
  font-size: 1rem;
  color: rgb(25, 25, 25);
}

.slider-div {
  margin-top: 1rem;
}

.recommend-pdt ul {
  overflow-x: auto;
  display: -webkit-box;
}

.recommend-pdt ul li {
  width: 49%;
  height: 15rem;
  margin-right: 5px;
  text-align: center;
  background: #F8F8F8;
  padding: 1rem 1rem 0rem 1rem;
}

.recommend-pdt ul li a {
  background-color: #fff;
  display: block;
}

.recommend-pdt ul li .prodectName {
  font-size: 1rem;
  color: rgb(50, 50, 50);
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-all;
  text-align: center;
  margin-top: 0.3rem;
  font-family: 'Gotham-book';
}

.recommend-pdt ul li .prodectPrice {
  margin-top: 0.5rem;
  color: rgb(255, 94, 94);
  font-size: 1rem;
  text-align: center;
  font-family: 'Gotham-book';
}

.recommend-pdt img {
  width: 100%;
  background: rgb(248, 248, 248);
}

.wap_content {
  padding-bottom: 0px !important;
  padding-top: 3rem;
  position: relative;
  text-align: center;
}

.wap_content_title {
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  background: #fff;
  color: #000;
  width: 100%;
}

.wap_content_guding {
  position: fixed;
  top: 4em;
}

.wap_content_title>a.active {
  color: #ff4d4d;
  border-bottom: 1px solid #ff4d4d;
}

.wap_content_title>a {
  float: left;
  width: 50%;
  height: 100%;
  font-size: 1rem;
  color: #000;
  border-bottom: 1px solid #ccc;
}

#slider_info img {
  width: 100%;
}

.wap_content img {
  width: 100%;
  max-width: 750px;
}

.btn-group {
  height: 50px;
  position: fixed;
  z-index: 999;
  bottom: 0;
  background: #fff;
  width: 100%;
  text-align: center;
  vertical-align: middle;
  border-top: 1px solid rgb(230, 230, 230);
}

.btn-group .btn-group-action {
  width: 44% !important;
  float: left;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.6rem;
}

#btn-kefu, #btn-collect, #btn-shopCar {
  width: 30%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(156, 156, 156);
  font-size: 0.7rem;
  padding-top: 0.4rem;
  position: relative;
}

.btn-group-action img {
  width: 45%;
}

.btn-group .btn-group-result {
  width: 56% !important;
  float: right;
  height: 100%;
}

#btn-addtocart {
  margin-top: 0px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  color: rgb(70, 70, 70);
  background-color: #F8F8F8;
  float: left;
  margin-left: 0;
  font-size: 0.95rem;
}

#btn-buy {
  width: 50%;
  float: left;
  height: 100%;
  background: rgb(255, 93, 93);
  display: flex;
  justify-content: center;
  align-items: center;
}

#btn-buy a {
  font-size: 0.95rem;
  line-height: 50px;
  color: white;
}

.toTop {
  width: 40px;
  height: 40px;
  position: fixed;
  right: 1rem;
  bottom: 4rem;
  display: none;
}
</style>
