let mobile = document.querySelector(".mobile");
let cha = document.getElementsByClassName('cha')[0];
let error = document.querySelector(".error");
let verify = document.getElementsByClassName('verify')[0];
let verifyBnt = document.querySelector('.verify-bnt');
let submit = document.querySelector('.btn');

//添加事件方法一： addEventListener 支持浏览器IE9以上，IE8以下用addEvent（onEvent,function(){}）兼容。
mobile.addEventListener('click',function(){
    show(cha)
});

mobile.addEventListener("blur",function(){
    phoneBlur(mobile.value,cha)
})
// ？？？没有实现
// cha.addEventListener('click',function(){
//     debugger;
//     chaClick(mobile,cha)
// });
cha.onclick = function(){
    chaClick(mobile,cha)
}
//添加事件方法二：onElemt的用法；
verify.onblur = function(){
    verifyReg(verify.value)
}

mobile.oninput = function(){
    changeColor(mobile,verify,verifyBnt,submit)
}

verify.oninput = function(){
    changeColor(mobile,verify,null,submit)
}
// 添加事件方法三：在html中添加onElemt = "functionName()"
//点击发送验证码
verifyBnt.onclick = function(){
    countDown(verifyBnt,mobile.value,0)
}
// 提交数据
submit.onclick = function() {
    phoneLogin(mobile.value,verify.value)
}