import { Navigate } from "react-router-dom";

// Props: user and children (the page we want to protect)
function ProtectedRoute({ user, children }) {
  if (!user) {
    // Not logged in -> send to login page
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProtectedRoute;
