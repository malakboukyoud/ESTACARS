document.addEventListener("DOMContentLoaded", function () {

    const loginPage = document.getElementById("loginPage");
    const registerPage = document.getElementById("registerPage");

    const goRegister = document.getElementById("goRegister");
    const goLogin = document.getElementById("goLogin");

    loginPage.style.display = "block";

    // aller vers register
    goRegister.addEventListener("click", function(){
       
        loginPage.style.display = "none";
        registerPage.style.display = "block";
    });

    // aller vers login
    goLogin.addEventListener("click", function(){
        
        registerPage.style.display = "none";
        loginPage.style.display = "block";
    });

});