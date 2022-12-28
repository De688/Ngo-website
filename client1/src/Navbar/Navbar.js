import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Navbar.css";
import { signOut } from "firebase/auth";

function Navbar() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const signout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const gotosignpage = () => {
    navigate("/signin");
  };
  return (
    <div className="main-navbar-component" onClick={gotosignpage}>
      {!user ? (
        <div className="navbar-logini-logo">
          <FiLogIn className="sign-in-logo" />
          <div className="sign-in">
            <Link to="/signin" className="signinlink">
              Sign In
            </Link>
          </div>
        </div>
      ) : (
        <div className="logedininfo">
          <img src={user?.photoURL || ""} alt="image" className="userimage" />
          <div className="username">{user?.displayName}</div>
          <button type="button" onClick={signout} className="logoutbtn">
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
