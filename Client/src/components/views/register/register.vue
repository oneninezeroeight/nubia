<template>
    <div>
       <div class="layout">
           <p class="main_title" style="magrin-top:10px;">用手机号注册</p>
           <div class="registerline"></div>
           <div class="input_box">
               <input type="text" name="mobile" id="mobile_id" class="con_inputbox" autocomplete="off" placeholder="请输入您的手机号" v-model="phone">
               <div id="mobile_tag" class="error_tipsp">
                   <em class="error_ico"></em>
                   <div class="error_tips">
                       <div class="et_con">
                           <p>{{RepPhone}}</p>
                           <em></em>
                       </div>
                   </div>
               </div>
           </div>
           <div class="input_box">
               <input :type="type" name="newPassword" id="np_id" class="con_inputbox" placeholder="6-16个字符(数字、字母、符号至少包含两种)" v-model="password
               ">
               <i id="eye" :class="['pwd-eye',{'pwd-eye hide':isfac}]" @click="toggle"></i>
               <div id="pwd_tag" class="error_tipsp">
                   <em class="error_ico"></em>
                   <div class="error_tips">
                       <div class="et_con">
                           <p>{{RepPassword}}</p>
                           <em></em>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <div style="width:90%;margin:0 auto;" class="imgcode">
           <div class="input_box" style="width:60%; margin-left:15px">
               <input style="width:100%" type="text" name="captcha" class="con_inputbox" autocomplete="off" placeholder="请输入图片验证码" id="captcha" v-model="code">
                <Codetest/>
           </div>
           <div id="captcha_tag" class="error_tipsp" style="display: block; visibility: visible;">
			<em class="error_ico"></em>
			<div class="error_tips">
				<div class="et_con">
					<p>{{Code}}</p>
					<em></em>
				</div>
			</div>
		</div>
       </div>
       <p class="tips_title" style="font-size:12px;text-align:center;">注册即表示您同意遵守努比亚帐户的<a href="/res/html/agreement.html" class="first agreement" target="_blank">用户协议</a>和<a class="first agreement" href="/res/html/privacy.html" target="_blank">隐私协议</a></p>
   <div class="btn_area">
      	<input name="myradio" type="hidden" value="mobile">
      	<input type="hidden" name="back_url" value="https://m.nubia.com/account.php">
	
		<input id="sbtn" class="foo_btn orange_linear"  value="注册" type="submit" style="border:none;height: 40px;border-radius: 20px;width: 90%;margin:0 auto;display:block;float:none;" @click="reg">
      </div>
    </div>
</template>
<script>
import '../../../assets/register.css'
import Codetest from '../../Vcode/codetest.vue'
import axios from 'axios'
export default {
    data () {
        return {
            isfac:true,
            type:"password",
            PhoneError:0,
            PassError:0,
            phone:"",
            password:"",
            code:"",
            TorF:1
        }
        }
,
    methods: {
        toggle(){
            this.isfac=!this.isfac;
            if(this.type==="password"){
                this.type="text"
            }else{
                this.type="password"
            }
        },
        reg(){
        axios.get("http://localhost:3000/register",{
            params:{
            phone:this.phone,
            password:this.password
            }
        }).then((response)=>{
            let str=response.data.str
            if(str="注册成功"){
                this.$router.push('/login')
            }     
        })
    }
    },
    computed: {
      RepPhone(){
          if (this.phone === '') {
        return null
      } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.phone)) {
          this.TorF=0
        return "手机格式不正确"
      } else {
          this.TorF=1
        return null
      }
    },
    RepPassword(){
         if (this.password === ""){
                return ''
            }else if(!/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/.test(this.password)){
               this.TorF=0
               return '6-16个字符(数字、字母、符号至少包含两种)'
            }else {
                this.TorF=1
                return ''
            }
    },
    Code(){
        if (this.code==="") {
            return ''
        }else if(this.code!=this.$store.state.code){
            this.TorF=0
            return "请输入正确的验证码"
        }else{
            this.TorF=1
            return ''
        }
    },

    },
    components: {
        Codetest
    }
}
</script>