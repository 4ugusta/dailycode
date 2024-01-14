import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVIEKtoitPuJRp_XG9v8Q6cjYOmMMe894",
  authDomain: "leetcode-clone-15a57.firebaseapp.com",
  projectId: "leetcode-clone-15a57",
  storageBucket: "leetcode-clone-15a57.appspot.com",
  messagingSenderId: "211921697746",
  appId: "1:211921697746:web:26db427482d44f545a660b",
  measurementId: "G-5X7VHYS7S0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);