 
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDmTGp3P57fEkAPDfGygdtyR48UFNClH4A",
//   authDomain: "login-and-signup-c3a16.firebaseapp.com",
//   projectId: "login-and-signup-c3a16",
//   storageBucket: "login-and-signup-c3a16.appspot.com",
//   messagingSenderId: "663980637501",
//   appId: "1:663980637501:web:e851fccc23d70e5f2b5954",
//   measurementId: "G-BTHB6CVHQZ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAhIpZzL5vXPLowAbgFVGKccHTtDqDpzn4",
    authDomain: "expense-managment-system-95be6.firebaseapp.com",
    projectId: "expense-managment-system-95be6",
    storageBucket: "expense-managment-system-95be6.appspot.com",
    messagingSenderId: "1039397126771",
    appId: "1:1039397126771:web:80002218ffd888c2c52006",
    measurementId: "G-V66NW7N4T2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);