<template>
  <div>
    <div class="login">
      <div class="container_01 mt20a">
        <a href>
          <img src="http://static.nubia.cn/mobile/images/m_logo.png" alt class="img-responsive" />
        </a>
      </div>
      <div class="container_02 mt20">
        <div class="input_box">
          <em class="id-icon"></em>
          <input type="text" name="username" id="username" value placeholder="邮箱/手机号码/用户名" v-model="username"/>
          <div id="username_tag" class="login_error_tipsp" :style="{display:toglogin}">
            <em class="error_ico"></em>
            <div class="error_tips">
              <div class="et_con">
                <p v-text="user"></p>
                <em></em>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div class="pass input_box">
          <em class="pwd-icon"></em>
          <input :type="type" name="password" id="userpwd" placeholder="密码" v-model="password"/>
          <i id="eye" :class="['pwd-eye',{'pwd-eye hide':toggle}]" @click="toggle1"></i>
          <div id="userpwd_tag" class="login_error_tipsp" :style="{display:toglogin}">
            <em class="error_ico"></em>
            <div class="error_tips">
              <div class="et_con">
                <p v-text="pass"></p>
                <em></em>
              </div>
            </div>
          </div>
        </div>
        <span class="Vcode">
          <a style="color:#e8380d;" href>手机验证码登录</a>
        </span>
        <div class="btn-reg">
          <input type="hidden" name="back_url" id value />
          <input
            type="button"
            name
            id="sbtn"
            class="reg_btn orange_linear"
            value="立即登录"
            style="border:none"
            @click="loginn"
          />
        </div>
      </div>
      <div class="row tl_c">
        <div class="horizontal divider">
          <i>其他方式登录</i>
        </div>
        <div>
          <label for>
            <a href class="qq"></a>
            <a href class="weibo"></a>
            <a href class="alipay"></a>
          </label>
        </div>
      </div>
    </div>
    <div class="login-btn-bottom">
      <a href="http://localhost:8080/#/register">立即注册</a>
      <span style="color:#ddd">|</span>
      <a href>忘记密码？</a>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      toggle: true,
      type: "password",
      pass: "",
      user: "",
      password:"",
      username:"",
      toglogin:"none"
    };
  },
  methods: {
    loginn() {
        if(this.username===""||this.password===""){
            this.user="用户名不能为空"
            this.pass="密码不能为空"
            this.toglogin="block"
        }else{
            this.user=""
            this.pass=""
            this.toglogin=""
        }
        axios.get('http://localhost:3000/login', {
          params: {
            username:this.username,
            password:this.password
          }
        }).then((ret) => {
          console.log(ret.data.str);
          if(ret.data.str==="登录成功"){
            this.$store.state.title=this.username
            this.$router.push('/mine')
          }else{
            alert("")
          }
        })
    },
    toggle1() {
      this.toggle = !this.toggle;
      console.log(this.toggle);
      if (this.type === "password") {
        this.type = "text";
      } else {
        this.type = "password";
      }
    }
  }
};
</script>
<style>
</style>