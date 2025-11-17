import { useRef } from "react";
import { CircularProgress } from "@material-ui/core";

function Login() {
  const email = useRef();
  const password = useRef();

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Chat App</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Chat App.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox">
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button type="submit" className="loginButton">
              {isFetching ? <CircularProgress /> : "Log In"}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
