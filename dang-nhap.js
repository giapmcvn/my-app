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

  function getSignUpErrorMessage(error) {
    switch (error.code) {
      case "auth/email-already-in-use":
        return "Email này đã được đăng ký. Hãy đăng nhập hoặc dùng email khác.";
      case "auth/invalid-email":
        return "Email không hợp lệ. Vui lòng kiểm tra lại.";
      case "auth/missing-email":
        return "Vui lòng nhập email.";
      case "auth/missing-password":
        return "Vui lòng nhập mật khẩu.";
      case "auth/weak-password":
        return "Mật khẩu quá yếu. Hãy dùng ít nhất 6 ký tự.";
      case "auth/network-request-failed":
        return "Không thể kết nối Firebase. Vui lòng kiểm tra mạng rồi thử lại.";
      case "auth/operation-not-allowed":
        return "Firebase chưa bật đăng ký bằng email/mật khẩu.";
      default:
        return error.message || "Đã có lỗi xảy ra. Vui lòng thử lại.";
    }
  }

  function signUpWithEmail(email, password) {
    if (!email.trim()) {
      alert("Vui lòng nhập email.");
      return Promise.reject(new Error("Missing email"));
    }

    if (!password) {
      alert("Vui lòng nhập mật khẩu.");
      return Promise.reject(new Error("Missing password"));
    }

    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        alert("Tạo tài khoản thành công!");
        window.location.href = "grand.html";
        return user;
      })
      .catch((error) => {
        alert(getSignUpErrorMessage(error));
        throw error;
      });
  }

  window.vcgFirebaseApp = app;
  window.vcgFirebaseAuth = auth;
  window.vcgCreateUserWithEmailAndPassword = createUserWithEmailAndPassword;
  window.vcgSignUpWithEmail = signUpWithEmail;
