import React from "react";
import "../styles/Login.css"; // Using the same CSS as Login for consistency

function SignUp() {
  return (
    <div className="login">
      <div className="login-overlay">
        <h1>Create an Account</h1>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Choose a username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Sign Up
          </button>
        </form>
        <div className="login-footer">
          <p>
            Already have an account?{" "}
            <a href="/login" className="signup-link">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
