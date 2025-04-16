import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "tu apikey",
  authDomain: "tu authDomain",
  projectId: "tu projectIdd",
  storageBucket: "tu storageBucket",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


createApp(App).use(router).mount('#app')
