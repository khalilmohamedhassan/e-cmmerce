let user_information = document.querySelector("#user-information");
let userDom = document.querySelector("#user");
let links = document.getElementById("links");
let logout_Btn = document.getElementById("logout");


let checkUser = localStorage.getItem("userName")
if(checkUser){
    links.remove();
    // links.style.display = "none";
    user_information.style.display = "flex";
    userDom.innerHTML = checkUser;
}


// let getuser = localStorage.getItem("userName");
// let getpassword = localStorage.getItem("password");

logout_Btn.addEventListener("click" , function(){
    localStorage.clear();
    setTimeout(function(){
        window.location = "register.html";
    } ,1500);
 
})
