import { Link, useNavigate } from "react-router-dom";

function Header() {

  const navigate = useNavigate();

  const name = localStorage.getItem("username");
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <header>
      <h1>🛍️ MyShop KL University</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/products1">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/admin">Admin</Link>
      </nav>

      <div>
        {name ? `Welcome, ${name}` : ""}
      </div>

      {isLoggedIn && (
        <button onClick={handleLogout} className="lo">
          Logout
        </button>
      )}
    </header>
  );
}

export default Header;
