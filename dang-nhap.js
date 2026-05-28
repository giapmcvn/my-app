  // Import the functions you need from the SDKs you need
  import { initializeApp, getApp, getApps } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCygeMWanp1LjJUD9B_ls6Z6nKZE4Bw7og",
    authDomain: "vcg-store.firebaseapp.com",
    projectId: "vcg-store",
    storageBucket: "vcg-store.firebasestorage.app",
    messagingSenderId: "889034854707",
    appId: "1:889034854707:web:07de19e5f9194ac6d12e46"
  };

  // Initialize Firebase
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const auth = getAuth(app);

  function signUpWithEmail(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorCode}: ${errorMessage}`);
        throw error;
      });
  }

  window.vcgFirebaseApp = app;
  window.vcgFirebaseAuth = auth;
  window.vcgCreateUserWithEmailAndPassword = createUserWithEmailAndPassword;
  window.vcgSignUpWithEmail = signUpWithEmail;
