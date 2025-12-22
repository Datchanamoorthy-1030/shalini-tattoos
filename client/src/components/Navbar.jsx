import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem("isAdmin");

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Shalini Tattoos</h2>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        {!isAdmin && (
          <li>
            <Link to="/admin-login">Admin</Link>
          </li>
        )}

        {isAdmin && (
          <>
            <li>
              <Link to="/admin">Dashboard</Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                style={{
                  background: "none",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
