import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBkF_96VHH7cpQXZv9MjLXRZ2tzRz4tIuw",
  authDomain: "netflixproject-ee4d2.firebaseapp.com",
  projectId: "netflixproject-ee4d2",
  storageBucket: "netflixproject-ee4d2.appspot.com",
  messagingSenderId: "616995722431",
  appId: "1:616995722431:web:2a9a6ed932f1dd0bb4a20a",
  measurementId: "G-W9K941VTDM",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
