import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Home from "./pages/Home.jsx";
import Careers from "./pages/Careers.jsx";
import CareerDetails from "./pages/CareerDetails.jsx";
import Jobs from "./pages/Jobs.jsx";
import InterviewPractice from "./pages/InterviewPractice.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx";

function App() {
  // Read the saved user from localStorage once, when the app first loads.
  // This keeps the user logged in after a page refresh.
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("currentUser");
    return saved ? JSON.parse(saved) : null;
  });

  function handleLogin(loggedInUser) {
    localStorage.setItem("token", "mock-token-123");
    localStorage.setItem("currentUser", JSON.stringify(loggedInUser));
    setUser(loggedInUser);
  }

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    setUser(null);
  }

  return (
    <>
      <Navbar user={user} />
      <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:id" element={<CareerDetails />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/interview" element={<InterviewPractice />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute user={user}>
              <Profile user={user} onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<h2 className="page">Page not found</h2>} />
      </Routes>
      </main>
      <footer className="footer">
        <p>© 2026 EduLearn – Engineering Career Guidance Portal</p>
      </footer>
    </>
  );
}

export default App;
