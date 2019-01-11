let mobile = document.querySelector(".mobile")
let cha = document.getElementsByClassName('cha')[0]
let error = document.querySelector(".error")
let verify = document.getElementsByClassName('verify')[0];
let code = document.querySelector(".code")
let verifyBnt = document.querySelector('.verify-bnt')
let password = document.getElementsByClassName("password")[0]
let ico = document.querySelector(".ico")
let submit = document.querySelector(".btn")
let cath = document.querySelector(".cathtu");
// axios 掉接口
// 获取图片验证码
getcathpa(1)
cath.onclick =  function(){
    getcathpa(1)
}

mobile.addEventListener('click',function(){
    show(cha)
});

mobile.addEventListener("blur",function(){
    phoneBlur(mobile.value,cha)
})

cha.addEventListener('click',function(){
    chaClick(mobile.value,cha)
});

//显示隐藏密码 
ico.addEventListener("click",function(){
    let iceClose = document.querySelector(".ico-close")
    changPassword(iceClose,ico,password)
})

verify.onblur = function(){
    verifyReg(verify.value)
}
// 添加事件方法三：在html中添加onElemt = "functionName()"
//点击发送验证码
verifyBnt.onclick = function(){
    countDown(verifyBnt,mobile.value,2)
}     
submit.onclick = function(){
    if(mobile.value == "" || code.value == "" || verify.value ==""|| password.value == ""){
        error.style.display = "block"
        error.innerHTML = "填写正确的信息"
        return
    }else{
        var getRresetPasswordUrl  = "http://localhost:8096/api/reset_password" 
        Register(getRresetPasswordUrl,mobile.value,code.value,verify.value,password.value)
    }
}
mobile.oninput = function(){
    changeColorReg(mobile,code,verifyBnt,password,verify,submit)
}

code.oninput = function(){
    changeColorReg(mobile,code,verifyBnt,password,verify,submit)
}

verify.oninput = function(){
    changeColorReg(mobile,code,null,password,verify,submit)
}

password.oninput = function(){
    changeColorReg(mobile,code,null,password,verify,submit)
}