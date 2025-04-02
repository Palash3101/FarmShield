import React from "react";
import "../styles/Login.css";

function Login() {
  return (
    <div className="login-overlay">
    <h1>Login to FarmShield</h1>
    <form className="login-form">
        <div className="form-group">
        <label htmlFor="username">Username or email address</label>
        <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username or email"
            required
        />
        </div>
        <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
        />
        </div>
        <button type="submit" className="login-button">
        Sign in
        </button>
    </form>
    <div className="login-footer">
        <p>
        New to FarmShield?{" "}
        <a href="/signup" className="signup-link">
            Create an account
        </a>
        </p>
    </div>
    </div>
  );
}

export default Login;
