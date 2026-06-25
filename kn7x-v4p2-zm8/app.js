alert(“JavaScript loaded!”);

const usernameInput = document.getElementById(“username”);
const loginBtn = document.getElementById(“loginBtn”);
const login = document.getElementById(“login”);
const home = document.getElementById(“home”);
const welcome = document.getElementById(“welcome”);

console.log(usernameInput);
console.log(loginBtn);
console.log(login);
console.log(home);
console.log(welcome);

loginBtn.addEventListener(“click”, () => {

alert("Continue button clicked!");
login.style.display = "none";
home.style.display = "block";
welcome.textContent = "Welcome!";

});
