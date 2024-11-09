// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_MkER2k6VmOcn-fugxtqglNhGKINGFFo",
  authDomain: "tonhakaton.firebaseapp.com",
  projectId: "tonhakaton",
  storageBucket: "tonhakaton.firebasestorage.app",
  messagingSenderId: "654538657650",
  appId: "1:654538657650:web:9e0ee3a759c803bba017eb",
  measurementId: "G-Z5HZSE62NE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);