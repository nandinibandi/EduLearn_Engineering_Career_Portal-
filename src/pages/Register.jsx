import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};
    if (name.trim() === "") newErrors.name = "Name is required";
    if (!email.includes("@")) newErrors.email = "Enter a valid email";
    if (password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (confirmPassword !== password) newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault(); // stop the page from reloading
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    // Frontend-only demo: save users in localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const alreadyExists = users.find((u) => u.email === email);

    if (alreadyExists) {
      setErrors({ email: "This email is already registered" });
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! Please login.");
    navigate("/login");
  }

  return (
    <div className="page form-page">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <label>Name</label>
        <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        {errors.name && <p className="error">{errors.name}</p>}

        <label>Email</label>
        <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Password</label>
        <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {errors.password && <p className="error">{errors.password}</p>}

        <label>Confirm Password</label>
        <input className="input" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

        <button className="btn" type="submit">Register</button>
        <p className="small-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
