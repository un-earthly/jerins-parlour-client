import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCPAgiT1cCBsohWcX1W40q8wmuFhNDEJAA",
    authDomain: "jerins-parlour-f046c.firebaseapp.com",
    projectId: "jerins-parlour-f046c",
    storageBucket: "jerins-parlour-f046c.appspot.com",
    messagingSenderId: "685821094041",
    appId: "1:685821094041:web:ead51dca322c3f382b3008"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth