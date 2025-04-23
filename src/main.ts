import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { env_local } from "./env";
import  VueCookies  from "vue-cookies";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: env_local.apiKey,
  authDomain: env_local.authDomain,
  projectId: env_local.projectId,
  storageBucket: env_local.storageBucket,
  messagingSenderId: env_local.messagingSenderId,
  appId: env_local.appId,
  measurementId: env_local.measurementId,
};

// Initialize Firebase
initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const app = createApp(App);

app.use(router).use(VueCookies,{expires: '1d'}).mount("#app");
