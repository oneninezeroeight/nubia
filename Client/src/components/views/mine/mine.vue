<template>
  <div class="user_center">
    <div class="user_header common"><a
        href="https://account.nubia.com/profile/login/?back_url=https%3A%2F%2Fm.nubia.com%2Forder%2Faccount%2FwapIndex"
        class="account_login">
        <div class="user_img"
          style="background: url(&quot;//oss.static.nubia.cn/upload/59c0c0948d26a56.png&quot;) center center / 100% 100% no-repeat;">
        </div>
      </a>
      <div class="user_name">
        <div class="name "><router-Link style="color: white;" to="login">登录/注册</router-Link></div> <a
          >
          <div class="class over_hide">普通会员</div>
        </a>
      </div> <a class="register" style="display: none;">登录/注册</a>
      <div class="user_set" style="display: none;"><a href="">
          <div class="user_news"><span class="news_num" style="display: none;"></span></div>
        </a>
        <div class="user_setting" style="display: none;"></div>
      </div> <a href="/order/memberMessage" class="message"><i class="messageTip"></i> <img alt=""
          src="//shop-soa-static.nubia.com/images/buy_mobile/message.png?v=1568096745"></a>
    </div>
    <div class="ticket">
      <ul>
        <li v-for="(item,index) in ticket" :key=index :class="item.class"><a><b>{{item.price}}</b>
            <p>{{item.p}}</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="order">
      <div class="my_order">
        <div>我的订单</div>
        <div class="my_order_all"><a href="/order/orderList?type=4">查看全部</a></div>
      </div>
      <ul>
        <li v-for="(item,index) in order" :key="index" :class="item.class"><a>
            <div class="order_icon"><img :src="item.src" alt=""><span class="news_num">{{item.num}}</span></div>
            <p>{{item.p}}</p>
          </a></li>
      </ul>
    </div>
    <div class="tool">
      <div class="tool_header">我的工具</div>
      <ul>
        <li v-for="(item,index) in tools" :key="index"><a><img :src="item.img">
            <p>{{item.p}}</p>
          </a></li>
      </ul>
    </div>
    <div class="serve">
      <div class="serve_header">售后服务 <div class="my_order_all"><a href="/active/d968faff44af43d.html">查看全部</a></div>
      </div>
      <ul>
        <li v-for="(item,index) in server" :key="index"><a><img :src="item.img">
            <span>{{item.span}}</span></a></li>
      </ul>
    </div>
    <Footer :offset=4></Footer>
  </div>

</template>
<script>
import Footer from '../../footer/footer.vue'
import Login from '../../views/login/login.vue'
  export default {
    data() {
      return {
        ticket: [{
            class: 'un_used_coupon',
            p: '优惠券',
            price: 0
          },
          {
            class: "recycle_amount",
            p: '回收代金券',
            price: 0
          },
          {
            class: "collection_num",
            p: "收藏",
            price: 0
          },
          {
            class: "credit",
            p: "积分",
            price: 0
          },
        ],
        order: [{
            class: "un_paid_num",
            src: "https://oss.static.nubia.cn/upload/5af40b793ef4969.png",
            num: 0,
            p: "待付款"
          },
          {
            class: "un_receive_num",
            src: "https://oss.static.nubia.cn/upload/5af40b795611e76.png",
            num: 0,
            p: "待收货"
          },
          {
            class: "ywc",
            src: "//oss.static.nubia.cn/upload/5af40b795606f26.png",
            num: 0,
            p: "已完成"
          },
          {
            class: "hsdd",
            src: "https://oss.static.nubia.cn/upload/5af40b795659e4.png",
            num: 0,
            p: "回收订单"
          },
        ],
        tools: [{
          img: 'https://oss.static.nubia.cn/upload/5af40b7955d592.png',
          p: '会员中心'
        }, {
          img: 'https://oss.static.nubia.cn/upload/5af40b79632ab57.png',
          p: '收货地址'
        }, {
          img: 'https://oss.static.nubia.cn/upload/5af40b797bb6195.png',
          p: '我的预约'
        }, {
          img: 'https://oss.static.nubia.cn/upload/5af40b797ae6b40.png',
          p: 'NB码'
        }, {
          img: 'https://shop-soa-static.nubia.com/images/medal.png?v=1568096745',
          p: '专属勋章'
        }],
        server:[{
          img:'https://oss.static.nubia.cn/upload/5af40b799bed555.png',
          span:'售后网点'
        },{
          img:'https://oss.static.nubia.cn/upload/5af40b799bc3234.png',
          span:'以旧换新'
        },{
          img:'https://oss.static.nubia.cn/upload/5af40b799c09b79.png',
          span:'真伪查询'
        },{
          img:'https://oss.static.nubia.cn/upload/5b1a23bd3bc2156.png',
          span:'非保价格查询'
        },{
          img:'https://oss.static.nubia.cn/upload/5b1a23bd4950870.png',
          span:'寄修服务'
        },{
          img:'https://oss.static.nubia.cn/upload/5b1a23bd51b4c1.png',
          span:'意外保障服务'
        },{
          img:'https://oss.static.nubia.cn/upload/5af40b798965a57.png',
          span:'售后订单'
        }]
      }
    },
    components: {
      Footer
    }
  }

</script>
