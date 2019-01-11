    let mobile = document.querySelector(".mobile")
    let cha =document.querySelector(".cha")
    let password = document.getElementsByClassName("password")[0]
    let ico = document.querySelector(".ico")
    let submit = document.querySelector(".btn")
    let error = document.querySelector(".error");
    
    mobile.addEventListener('click',function(){
        show(cha)
    });

    mobile.addEventListener("blur",function(){
        phoneBlur(mobile.value,cha)
    })
   
    cha.addEventListener('click',function(){
        chaClick(mobile.value,cha)
    });

    mobile.oninput = function(){
        changeColor(mobile,password,null,submit)
    }
    password.oninput = function(){
        changeColor(mobile,password,null,submit)
    }

    //显示隐藏密码 
    ico.addEventListener("click",function(){
        let iceClose = document.querySelector(".ico-close")
        changPassword(iceClose,ico,password)
    })
    submit.onclick = function(){
        passwordLogin(mobile.value,password.value)
    }
