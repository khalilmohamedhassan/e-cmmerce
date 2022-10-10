
let user_login = document.querySelector("#username");
let password_login = document.querySelector("#password");

let sign_In_Btn = document.getElementById("sign-In");


let getuser = localStorage.getItem("userName");
let getpassword = localStorage.getItem("password");




sign_In_Btn.addEventListener("click" , login);

function login(e){
        e.preventDefault(); //
        if(user_login.value === "" || password_login.value === ""){
          alert("please fill Data ")
        }else{
            if((getuser && getuser.trim() === user_login.value.trim()) && (getpassword && getpassword === password_login.value)){
               
                   setTimeout(function(){
                     window.location = "index.html";
                } , 1500)
            } 
            else{
                console.log("username or passowar is wrong !!")
            }
        }
       
}