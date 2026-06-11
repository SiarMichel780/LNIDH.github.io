import { db } from "./firebase-config.js";

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

//test /\
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAkqPf9ixvTvU5zk9DxdlhQXfqKdcqT3n4",
  authDomain: "lnidh-plots.firebaseapp.com",
  projectId: "lnidh-plots",
  storageBucket: "lnidh-plots.firebasestorage.app",
  messagingSenderId: "423595215521",
  appId: "1:423595215521:web:b2f34ae2c6840920f97ee0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

// \/ test down
window.testFirebase = async () => {

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
