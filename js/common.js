window.onload = function(){
    let mobile = document.querySelector(".mobile");
    let cha = document.getElementsByClassName('cha')[0];
    let error = document.querySelector(".error");
    let submit = document.querySelector('.btn');
    // var mobileValue = mobile.value; -??为什么赋值之后调用不可以
    // 手机校对 11位数字
    var mReg = /^[1][3,4,5,7,8][0-9]{9}$/;
    // 验证码 4位或者6位数字
    var vReg = /^(\d{4}$)|(^\d{6}$)/; 

    //添加事件方法一： addEventListener 支持浏览器IE9以上，IE8以下用addEvent（onEvent,function(){}）兼容。
    mobile.addEventListener('click',function(){
        // 显示
        cha.style.display = "block";
    });

    mobile.addEventListener("blur",function(){
        if(mobile.value == null || mobile.value == undefined || mobile.value == ""){
        }else if(!mReg.test(mobile.value)){
            error.style.display = "block"
            error.innerHTML = "手机号格式错误"
        }
        cha.style.display = "none";
        
    })
    // ？？？没有实现
    cha.addEventListener('click',function(){
        mobile.value = ""; 
        cha.style.display = "none";
    });
    //手机验证11位
    function mobileReg(value) {
        if(value == null || value == undefined || value == ""){
            hint(error,"请输入11位手机号")
            return
        }else if(!mReg.test(value)){
            hint(error,"手机号格式错误")
            return
        }
    }
    // 短信验证码4位或6位
    function verifyReg(value) {
    if(value == undefined || value == null || vReg == ""){
            hint(error,"请输入验证码")
            return
        }else  if(!vReg.test(value)){
            hint(error,"验证码不对")
            return 
        } 
    }

    // 验证码倒计时（60）秒
    var count = 60
    //60秒倒计时
    function countDown(){ 
            if(count==0){
                verifyBnt.innerHTML = "获取验证码"
                count = 60
                return
            }else{
                verifyBnt.innerHTML = "剩余"+ count+"秒"
                count--
            }
            setTimeout(function(){
                countDown()
            },1000);
        }

    // 提交按键
    submit.onclick = function(){
        if(mobile.value == "" || verify.value == ""){
            error.style.display = "block"
            error.innerHTML = "手机号和验证码不能为空"
            return
        }
    }
    // 提示
    function hint(error,content){
        error.style.display = "block"
        error.innerHTML = content
    }
}