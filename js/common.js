//手机校对 11位数字
var mReg = /^[1][3,4,5,7,8][0-9]{9}$/
//短信验证码校对 4位或者6位数字
var vReg = /^(\d{4}$)|(^\d{6}$)/
//判断密码是6-20位字符串
var pReg = /^([a-z0-9\.\@\!\#\$\%\^\&\*\(\)]){6,20}$/
//图片验证码
var cReg = /^[0-9]{4}$/

//显示 
function show(Valus){
    Valus.style.display = "block";
}
// 
function phoneBlur(phone,cha){
    if(phone == null || phone == undefined || phone == ""){
    }else if(!mReg.test(phone)){
        hint(error,"手机号格式错误")
    }
    cha.style.display = "none";
}
// ？？？没有实现
function chaClick(phone,cha){
    debugger;
    phone.value = ""; 
    cha.style.display = "none";
}  
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
// 
function passwordReg(value){
    if(value == "" || !pReg.test(value)){
        hint(error,"密码不正确")
    }
 }
// 验证码倒计时（60）秒
var count = 60
//60秒倒计时
function countDown(verifyBnt,phone,registerFrom){ 
    if(phone == ""){
        hint(error,"请输入11位手机号")
        return
    }else if(!mReg.test(phone)){
        hint(error,"手机号格式错误")
        return
    }else{
        if(count==0){
            verifyBnt.innerHTML = "获取验证码"
            count = 60
            return
        }else{
            if(count == 60){
                getSenddsms(phone,registerFrom)
            }
            verifyBnt.innerHTML = "剩余"+ count+"秒"
            count--
        }
        setTimeout(function(){
            countDown(verifyBnt,phone,registerFrom)
        },1000);
    }
}
// 信息提示样式
function hint(error,content){
    error.style.display = "block"
    error.innerHTML = content
    clearTimeout(timer)
    var timer = setTimeout(function(){
        error.style.display = "none"
    },2000)
}
//显示隐藏密码
// js 移出class样式
// elemt.classList.add("类名")
// ico.classList.remove("ico-open")
function changPassword(iceClose,ico,password){
    if(iceClose != null){
        ico.classList.add("ico-open")
        ico.classList.remove("ico-close")
        password.type = "text"
        iceClose  = null;
    }else{
        ico.classList.remove("ico-open")
        ico.classList.add("ico-close")
        password.type = "password"
    }
}

// 获取图片验证码接口
function getcathpa(from){
    var getcathpa = 'http://localhost:8096/api/get_pic_captcha'
    var params = {
        from: from
    }
    axios.post(getcathpa, params).then(function (response) {
        cath.src = response.data.data.imgurl
    })
    .catch(function (error) {
        console.log(error);
    });
}
// 发送短信验证码
function getSenddsms(phone,registerFrom){
    if(mReg.test(phone)){
        let getSenddsms = "http://localhost:8096/api/send_sms"
        var params = {
            phone : phone,
            registerFrom :registerFrom
        }
        axios.post(getSenddsms,params)
        .then(function(response){
            hint(error,response.data.data.text)
        })
        .catch(function(error){
            console.log(error);
        })
    }else{
        return
    }
}

// 短信登录接口
function phoneLogin(phone,verifyCode){
    if(mReg.test(phone) && vReg.test(verifyCode)){
        var getPhone = " http://localhost:8096/api/login"
        var params ={
            phone : phone,
            verifyCode : verifyCode
        }
        axios.post(getPhone,params)
        .then(function(response){
            hint(error,response.data.data.text)
        })
        .catch(function(error){
            console.log(error);
        })
    }else if(!vReg.test(verifyCode)){
        hint(error,"验证码位数不正确")
        return
    }
    
}
//账号密码登录接口
function passwordLogin(phone,password){
    if(mReg.test(phone) && pReg.test(password)){
        var getPasswordURL = "http://localhost:8096/api/login_normal" 
        var params = {
            phone : phone,
            password : password
        }
        axios.post(getPasswordURL,params)
        .then(function(response){
            hint(error,response.data.data.text)
        })
        .catch(function(error){
            console.log(error);
        })
    }else{
        return
    }
}
// 注册接口和登录接口
function Register(url,phone,capth,verifyCode,respassword){
    if(!mReg.test(phone)){
        return
    }else{
        var params = {
            phone : phone,
            captha : capth,
            verifyCode:verifyCode,
            respassword :respassword
        }
        axios.post(url,params)
        .then(function (response) {
            hint(error,response.data.data.text)
        })
        .catch(function (error) {
            console.log(error)
        })
    }
}

function changeColor(mobile,verify,verifyBnt,submit){
    if(verifyBnt!= null){
        if(mobile.value.length == 11){
            verifyBnt.style.color = "#333"
        }else{
            verifyBnt.style.color = "#9a9a9a"
        }
    }
    if(mobile.value != "" && verify.value != ""){
        submit.style.background = "#333"
    }else{
        submit.style.background = "#a5a5a5"
    }
}

function changeColorReg(mobile,code,verifyBnt,password,verify,submit){
    if(verifyBnt != null){
        if(mobile.value != "" && code.value != ""){
            verifyBnt.style.color = "#333"
        }else{
            verifyBnt.style.color = "#9a9a9a"
        }
    }
    if(mobile.value != "" && verify.value != "" && code.value != "" && password.value != ""){
        submit.style.background = "#333"
    }else{
        submit.style.background = "#a5a5a5"
    }
}

