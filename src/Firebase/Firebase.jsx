// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAETa97nKnLwICHKPXGYP_RVGmakUwFLDo",
    authDomain: "online-skills-project.firebaseapp.com",
    projectId: "online-skills-project",
    storageBucket: "online-skills-project.appspot.com",
    messagingSenderId: "277435131868",
    appId: "1:277435131868:web:46f2ee2d919f0c6c1c1119"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;