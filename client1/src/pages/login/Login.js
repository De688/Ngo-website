import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const signinwithgoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    navigate("/");
  };
  return (
    <section className="login-main-container">
      <div className="login-wrapper">
        <div className="loginheader">Sign In and stay Connected</div>
        <button
          type="button"
          onClick={signinwithgoogle}
          className="loginbutton"
        >
          Sign In with Google
        </button>
      </div>
    </section>
  );
}

export default Login;
