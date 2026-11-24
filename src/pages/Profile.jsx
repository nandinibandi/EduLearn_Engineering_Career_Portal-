import { useNavigate } from "react-router-dom";

// Props: user (logged-in user) and onLogout (function from App.jsx)
function Profile({ user, onLogout }) {
  const navigate = useNavigate();

  function handleLogout() {
    onLogout();
    navigate("/login");
  }

  return (
    <div className="page form-page">
      <div className="form">
        <h2>Welcome, {user.name}! 👋</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <button className="btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Profile;
