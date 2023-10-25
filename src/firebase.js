// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDknZwNvAIiedEwZQcwhjI6BWtJcv8sYqY",
  authDomain: "toppersclass-b0fcf.firebaseapp.com",
  projectId: "toppersclass-b0fcf",
  storageBucket: "toppersclass-b0fcf.appspot.com",
  messagingSenderId: "429215870158",
  appId: "1:429215870158:web:e4be275e1b1de0cda7349f",
  measurementId: "G-206T4MJJNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);