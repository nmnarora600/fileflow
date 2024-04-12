// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVhL3qX3dX54Cs0jGl7CDlLiWy4VV2ILI",
  authDomain: "fileflow-saas.firebaseapp.com",
  projectId: "fileflow-saas",
  storageBucket: "fileflow-saas.appspot.com",
  messagingSenderId: "859357977356",
  appId: "1:859357977356:web:4cc4c74af4dc1436b90729",
  measurementId: "G-T7QR8PRY0J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);