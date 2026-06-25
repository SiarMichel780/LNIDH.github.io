const usernameInput = document.getElementById(“username”);
const loginBtn = document.getElementById(“loginBtn”);
const login = document.getElementById(“login”);
const home = document.getElementById(“home”);
const welcome = document.getElementById(“welcome”);

const savedUsername = localStorage.getItem(“plotsUsername”);

if (savedUsername) {
login.style.display = “none”;
home.style.display = “block”;
welcome.textContent = Welcome ${savedUsername}!;
}

loginBtn.addEventListener(“click”, () => {

const username = usernameInput.value.trim();
if (username === "") {
    alert("Please enter a username.");
    return;
}
localStorage.setItem("plotsUsername", username);
login.style.display = "none";
home.style.display = "block";
welcome.textContent = `Welcome ${username}!`;

});
