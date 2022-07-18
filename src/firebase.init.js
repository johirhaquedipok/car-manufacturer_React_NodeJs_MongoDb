// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKey,
  authDomain: process.env.REACT_APP_AUTHDOMAin,
  projectId: process.env.REACT_APP_PROJECTId,
  storageBucket: process.env.REACT_APP_STORAGEBUCKet,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERId,
  appId: process.env.REACT_APP_APPId,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
export default auth;
