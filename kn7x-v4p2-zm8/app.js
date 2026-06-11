alert(“app.js loaded”);

const usernameInput = document.getElementById(“usernameInput”);
const saveUserBtn = document.getElementById(“saveUserBtn”);
const loginScreen = document.getElementById(“loginScreen”);
const mainScreen = document.getElementById(“mainScreen”);
const welcomeText = document.getElementById(“welcomeText”);

saveUserBtn.addEventListener(“click”, () => {

alert("button clicked");
const username = usernameInput.value.trim();
if (!username) {
    alert("enter a username");
    return;
}
loginScreen.style.display = "none";
mainScreen.style.display = "block";
welcomeText.textContent = `Welcome ${username}`;

});
