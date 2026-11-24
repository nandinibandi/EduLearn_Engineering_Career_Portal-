import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// Prop: onLogin (function from App.jsx that saves the login)
function Login({ onLogin }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.includes("@") || password === "") {
      setError("Please enter a valid email and password");
      return;
    }

    // Mock authentication: check the users saved during registration
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      setError("Invalid email or password");
      return;
    }

    onLogin({ name: foundUser.name, email: foundUser.email });
    navigate("/profile");
  }

  return (
    <div className="page form-page">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label>Email</label>
        <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password</label>
        <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        {error && <p className="error">{error}</p>}

        <button className="btn" type="submit">Login</button>
        <p className="small-text">
          New here? <Link to="/register">Create an account</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
