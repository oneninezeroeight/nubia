<template  slot-scope="scope">
    <div>
       <div class="layout">
           <p class="main_title" style="magrin-top:10px;">用手机号注册</p>
           <div class="line"></div>
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
       <div style="width:90%;margin:0 auto;">
           <div class="input_box" style="width:60%;"></div>
       </div>
       <div style="width:90%;margin:0 auto;"></div>

    </div>
</template>
<script>
import '../../../assets/register'
export default {
    
}
</script>