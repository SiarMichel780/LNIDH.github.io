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

const INVITE_CODE = "SHITRUN";

const savedInvite =
localStorage.getItem("plotsInvite");

const savedUsername =
localStorage.getItem("plotsUsername");

if(savedInvite !== "true"){

```
const code =
    prompt("Enter Invite Code");

if(code === INVITE_CODE){

    localStorage.setItem(
        "plotsInvite",
        "true"
    );

    location.reload();

}else{

    document.body.innerHTML =
        "<h1>Wrong Invite Code</h1>";

}
```

}else{

```
if(savedUsername){

    loginScreen.style.display =
        "none";

    mainScreen.style.display =
        "block";

    welcomeText.textContent =
        `Welcome ${savedUsername}`;

}
```

}

saveUserBtn.addEventListener(
"click",
()=>{

```
    const username =
        usernameInput.value.trim();

    if(!username){

        alert("Enter a username");

        return;

    }

    localStorage.setItem(
        "plotsUsername",
        username
    );

    loginScreen.style.display =
        "none";

    mainScreen.style.display =
        "block";

    welcomeText.textContent =
        `Welcome ${username}`;

}
```

);
