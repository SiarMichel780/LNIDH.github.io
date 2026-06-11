alert("button clicked");

const username = usernameInput.value.trim();

if (!username) {
    alert("enter a username");
    return;
}

loginScreen.style.display = "none";
mainScreen.style.display = "block";
welcomeText.textContent = `Welcome ${username}`;
