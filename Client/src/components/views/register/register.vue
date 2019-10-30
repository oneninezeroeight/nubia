<template>
    <div>
       <div class="layout">
           <p class="main_title" style="magrin-top:10px;">用手机号注册</p>
           <div class="registerline"></div>
           <div class="input_box">
               <input type="text" name="mobile" id="mobile_id" class="con_inputbox" autocomplete="off" placeholder="请输入您的手机号">
               <div id="mobile_tag" class="error_tipsp">
                   <em class="error_ico"></em>
                   <div class="error_tips">
                       <div class="et_con">
                           <p></p>
                           <em></em>
                       </div>
                   </div>
               </div>
           </div>
           <div class="input_box">
               <input type="password" name="newPassword" id="np_id" class="con_inputbox" placeholder="6-16个字符(数字、字母、符号至少包含两种)">
               <i id="eye" class="pwd-eye hide"></i>
               <div id="pwd_tag" class="error_tipsp">
                   <em class="error_ico"></em>
                   <div class="error_tips">
                       <div class="et_con">
                           <p></p>
                           <em></em>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <div style="width:90%;margin:0 auto;" class="imgcode">
           <div class="input_box" style="width:60%; margin-left:15px">
               <input style="width:100%" type="text" name="captcha" class="con_inputbox" autocomplete="off" placeholder="请输入图片验证码" id="captcha">
                <Codetest/>
           </div>
           
       </div>
       <p class="tips_title" style="font-size:12px;text-align:center;">注册即表示您同意遵守努比亚帐户的<a href="/res/html/agreement.html" class="first agreement" target="_blank">用户协议</a>和<a class="first agreement" href="/res/html/privacy.html" target="_blank">隐私协议</a></p>
   <div class="btn_area">
      	<input name="myradio" type="hidden" value="mobile">
      	<input type="hidden" name="back_url" value="https://m.nubia.com/account.php">
	
		<input id="sbtn" class="foo_btn orange_linear" value="注册" type="submit" style="border:none;height: 40px;border-radius: 20px;width: 90%;margin:0 auto;display:block;float:none;">
      </div>
    </div>
</template>
<script>
import '../../../assets/register.css'
import Codetest from '../../Vcode/codetest.vue'
export default {
    components: {
        Codetest
    }
}
</script>