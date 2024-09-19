import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH2bb4SrePzFs3RZQ-BUOiRi4Hkk0kl6o",
  authDomain: "vuedashboard-31004.firebaseapp.com",
  projectId: "vuedashboard-31004",
  storageBucket: "vuedashboard-31004.appspot.com",
  messagingSenderId: "482244465267",
  appId: "1:482244465267:web:27b32715bc5eacbac5d006"
};

  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  
  // Initialize Firebase Authentication
  const auth = getAuth(firebaseApp);
  
  export { auth };