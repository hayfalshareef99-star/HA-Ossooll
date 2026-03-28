import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

const handleRegister = () => {
  if (!name || !email || !password || !confirmPassword) {
    alert("Please fill all fields");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
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
          <h1 className="auth-login__title">Create Account</h1>

          <p className="auth-login__subtitle">
            Create your account to continue.
          </p>

          <input
            type="text"
            placeholder="Enter your Name"
            className="auth-login__input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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

          <input
            type="password"
            placeholder="Confirm Password"
            className="auth-login__input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button className="auth-login__primary-btn" onClick={handleRegister}>
            Create Account
          </button>

          <p className="auth-login__bottom-text">
            Already have an account? <Link to="/">Sign in</Link>
          </p>
        </section>

        <section className="auth-login__image-card">
          <img
            src="/login-image.JPG"
            alt="Register Illustration"
            className="auth-login__image"
          />
        </section>
      </main>
    </div>
  );
};

export default Register;