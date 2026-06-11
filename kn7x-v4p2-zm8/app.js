import { db } from "./firebase-config.js";

import {
collection,
addDoc,
getDocs
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

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

const createEventBtn =
document.getElementById("createEventBtn");

const eventsContainer =
document.getElementById("eventsContainer");

const INVITE_CODE = "SHITRUN";

let savedUsername =
localStorage.getItem("plotsUsername");
console.log("Username:", savedUsername);
console.log("Invite:", savedInvite);

let savedInvite =
localStorage.getItem("plotsInvite");

function showInviteScreen() {

```
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
```

}

async function loadEvents(){

```
if(!eventsContainer) return;

eventsContainer.innerHTML = "";

const snapshot =
    await getDocs(
        collection(db,"events")
    );

snapshot.forEach(doc=>{

    const event = doc.data();

    const div =
        document.createElement("div");

    div.innerHTML = `
        <h3>${event.title}</h3>

        <p>${event.description}</p>

        <p>📍 ${event.location}</p>

        <p>📅 ${event.date}</p>

        <p>⏰ ${event.time}</p>

        <p>👤 ${event.creator}</p>

        <p>🏷️ ${event.group}</p>

        <hr>
    `;

    eventsContainer.appendChild(div);

});
```

}

if(savedInvite !== "true"){

```
showInviteScreen();
```

} else {

```
if(savedUsername){

    loginScreen.style.display =
        "none";

    mainScreen.style.display =
        "block";

    welcomeText.textContent =
        `Welcome ${savedUsername}`;

    loadEvents();

}

saveUserBtn.addEventListener(
    "click",
    ()=>{

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

        loginScreen.style.display = "none";
        mainScreen.style.display = "block";
        welcomeText.textContent =
            `Welcome ${username}`;

    }
);

        location.reload();

    }
);
```

}

createEventBtn?.addEventListener(
"click",
async ()=>{

```
    const title =
        document
        .getElementById("eventTitle")
        .value
        .trim();

    const location =
        document
        .getElementById("eventLocation")
        .value
        .trim();

    const description =
        document
        .getElementById("eventDescription")
        .value
        .trim();

    const date =
        document
        .getElementById("eventDate")
        .value;

    const time =
        document
        .getElementById("eventTime")
        .value;

    const group =
        document
        .getElementById("eventGroup")
        .value;

    const creator =
        localStorage.getItem(
            "plotsUsername"
        );

    if(!title){

        alert(
            "Event name required"
        );

        return;

    }

    await addDoc(
        collection(db,"events"),
        {
            title,
            location,
            description,
            date,
            time,
            group,
            creator,
            created: Date.now()
        }
    );

    alert(
        "Event Created!"
    );

    loadEvents();

}
```

);

window.testFirebase = async () => {

```
try {

    await addDoc(
        collection(db,"test"),
        {
            message:
                "LNIDH Plots Test",
            created:
                Date.now()
        }
    );

    alert(
        "Firebase Connected!"
    );

} catch(err) {

    console.error(err);

    alert(
        "Firebase Failed"
    );

}
```

};
