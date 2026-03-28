import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    localStorage.setItem("token", "123");
    navigate("/dashboard");
  };

  return (
    <div className="auth-login">
      <header className="auth-login__header">
        <img src="/logo.png" alt="AH-OSSOOL" className="auth-login__logo" />
      </header>

      <main className="auth-login__main">
        <section className="auth-login__card">
          <h1 className="auth-login__title">Admin Login</h1>

          <p className="auth-login__subtitle">
            Welcome back! Please log in to continue to your account.
          </p>

          <input
            type="email"
            placeholder="Enter your Email"
            className="auth-login__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter your Password"
            className="auth-login__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label className="auth-login__check-row">
            <input type="checkbox" className="auth-login__checkbox" />
            <span className="auth-login__check-text">Keep me logged in</span>
          </label>

          <button className="auth-login__primary-btn" onClick={handleLogin}>
            Sign In
          </button>

          <button className="auth-login__google-btn">
            <span className="auth-login__google-icon">G</span>
            Sign In With Google
          </button>

          <p className="auth-login__bottom-text">
            Need an account? <Link to="/register">Create one!</Link>
          </p>
        </section>

        <section className="auth-login__image-card">
          <img
            src="/login-image.JPG"
            alt="Login Illustration"
            className="auth-login__image"
          />
        </section>
      </main>
    </div>
  );
};

export default Login;