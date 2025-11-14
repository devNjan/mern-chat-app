function Login() {
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
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
            />
            <button type="submit" className="loginButton"></button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
