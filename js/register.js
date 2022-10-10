
//Register User 
let user_name =document.getElementById("userName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let sign_up_Btn = document.getElementById("Sign-Up");
// console.log(sign_up_Btn);



sign_up_Btn.addEventListener("click", Register );
function Register (e){
        e.preventDefault(); //
        if(user_name.value === "" || email.value === "" || password.value === ""){
          alert("please fill Data ")
        }
        else{
            localStorage.setItem("userName",user_name.value);
            localStorage.setItem("email",email.value);
            localStorage.setItem("password",password.value);
        }
    
        setTimeout(function(){
            window.location = "login.html";
                

        } , 1500)
}