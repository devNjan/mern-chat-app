import axios from "axios";
import { useRef } from "react";
import { useHistory } from "react-router";

function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">ChatSocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on ChatSocial.
          </span>
        </div>
        <div className="loginRight"></div>
      </div>
    </div>
  );
}

export default Register;
