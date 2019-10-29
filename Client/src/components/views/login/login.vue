<template>
<div>
    <div class="layout">
        <div class="container_01 mt20a">
            <a href="">
                <img src="" alt="" class="img-responsive">
            </a>
        </div>
        <div class="container_02 mt20">
            <div class="input_box">
                <em class="id-icon"></em>
                <input type="text" name="username" id="username" value="" placeholder="邮箱/手机号码/用户名">
                <div id="username_tag" class="error_tipsp" style="display:block;">
                    <em class="error_ico"></em>
                    <div class="error_tips">
                        <div class="et_con">
                            <p>用户名不能为空</p>
                            <em></em>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
            <div class="input_box">
                <em class="pwd-icon"></em>
                <input type="password" name="password" id="userpwd" placeholder="密码">
                <i id="eye" class="pwd-eye hide"></i>
                <div id="userpwd_tag" class="error_tipsp" style="display:block;">
                    <em class="error_ico"></em>
                    <div class="error_tips">
                        <div class="et_con">
                            <p>密码不能为空</p>
                            <em></em>
                        </div>
                    </div>
                </div>
            </div>
            <span>
                <a style="color:#e8380d;" href="">手机验证码登录</a>
            </span>
            <div class="btn-reg">
                <input type="hidden" name="back_url" id="" value=""> 
                <input type="button" name="" id="sbtn" class="reg_btn orange_linear" value="立即登录" style="border:none">
            </div>
        </div>
        <div class="row tl_c">
            <div class="horizontal divider">
                <i>其他方式登录</i>
            </div>
            <div>
                <label for="">
                    <a href="" class="qq"></a>
                    <a href="" class="weibo"></a>
                    <a href="" class="alipay"></a>
                </label>
            </div>
        </div>
    </div>
    <div class="btn-bottom">
        <a href="">立即注册</a>
        <span style="color:#ddd">|</span>
        <a href="">忘记密码？</a>
    </div>
</div>
</template>
<script>
export default {

}
</script>
<style>
    
</style>