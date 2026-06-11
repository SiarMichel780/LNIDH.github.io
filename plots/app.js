const usernameInput =
document.getElementById("usernameInput");

const saveUserBtn =
document.getElementById("saveUserBtn");

const loginScreen =
document.getElementById("loginScreen");

const mainScreen =
document.getElementById("mainScreen");

const welcomeText =
document.getElementById("welcomeText");

const savedUsername =
localStorage.getItem("plotsUsername");

if(savedUsername){

    loginScreen.style.display="none";

    mainScreen.style.display="block";

    welcomeText.textContent =
        `Welcome ${savedUsername}`;

}

saveUserBtn.addEventListener("click",()=>{

    const username =
    usernameInput.value.trim();

    if(!username) return;

    localStorage.setItem(
        "plotsUsername",
        username
    );

    location.reload();

});
