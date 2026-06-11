import { db } from "./firebase-config.js";

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

//test /\

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

let savedUsername =
localStorage.getItem("plotsUsername");

let savedInvite =
localStorage.getItem("plotsInvite");

function showInviteScreen() {

    document.body.innerHTML = `
        <div style="text-align:center;padding:50px;color:white;">
            <h1>LNIDH Plots</h1>

            <p>Invite Code Required</p>

            <input
                id="inviteInput"
                placeholder="Invite Code"
            >

            <br><br>

            <button id="inviteBtn">
                Enter
            </button>
        </div>
    `;

    document
        .getElementById("inviteBtn")
        .onclick = () => {

            const code =
                document
                .getElementById("inviteInput")
                .value
                .trim();

            if(code === INVITE_CODE){

                localStorage.setItem(
                    "plotsInvite",
                    "true"
                );

                location.reload();

            } else {

                alert("Wrong code");

            }

        };

}

if(savedInvite !== "true"){

    showInviteScreen();

} else {

    if(savedUsername){

        loginScreen.style.display = "none";

        mainScreen.style.display = "block";

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

}

// \/ test down
window.testFirebase = async () => {

document.getElementById("testBtn")
  ?.addEventListener("click", testFirebase);
  
  try {

    await addDoc(
      collection(db, "test"),
      {
        message: "LNIDH Plots Test",
        created: Date.now()
      }
    );

    alert("Firebase Connected!");

  } catch (err) {

    console.error(err);

    alert("Firebase Failed");
  }
};
