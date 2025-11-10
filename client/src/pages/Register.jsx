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
        <div className="loginRight">
          <form>
            <input placeholder="Username" required className="loginInput" />
            <input
              placeholder="Email"
              required
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              className="loginInput"
              type="password"
            />
            <input
              placeholder="Enter Password Again"
              required
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">Log Into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
