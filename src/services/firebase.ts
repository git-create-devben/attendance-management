// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGdiwZm9BE8zGgbQQD5vaHG95lO06U6LI",
  authDomain: "attendance-management-1147a.firebaseapp.com",
  projectId: "attendance-management-1147a",
  storageBucket: "attendance-management-1147a.firebasestorage.app",
  messagingSenderId: "818074696079",
  appId: "1:818074696079:web:244e3595f2fe73cbf8b3fa",
  measurementId: "G-40TQRGPN2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };