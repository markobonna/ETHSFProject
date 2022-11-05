// Modular Firebase v.9 Initialization.
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "@firebase/database";

const clientCredentials = {
    apiKey: "AIzaSyA8XEiYj_bgJmuN6ctZt1rnqLWgbJVhwiQ",
    authDomain: "ethsf2022.firebaseapp.com",
    projectId: "ethsf2022",
    storageBucket: "ethsf2022.appspot.com",
    messagingSenderId: "488676685169",
    appId: "1:488676685169:web:9249150c2463ce7faa72d0"
};

function initFirebase() {
    if (typeof window !== undefined) {
        initializeApp(clientCredentials);
        console.log("Firebase has been init successfully");
    }
}

const app = initializeApp(clientCredentials);

const db = getFirestore(app);

const realDB = getDatabase(app);

export { initFirebase, db, realDB };