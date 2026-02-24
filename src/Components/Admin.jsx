import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts, saveProducts } from "../utils/localStorageHelper";
import "./style.css";

const Admin = () => {

  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");

    if (auth === "true") {
      setIsAuthorized(true);
    } else {
      navigate("/admin-login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin-login");
  };

  const adminProducts = [
    {
      id: 2,
      name: "Samsung S23",
      price: 70000,
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400"
    },
    {
      id: 3,
      name: "OnePlus 11",
      price: 60000,
      image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400"
    },
    {
      id: 4,
      name: "MacBook Air",
      price: 120000,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400"
    },
    {
      id: 6,
      name: "Sony Headphones",
      price: 15000,
      image: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=400"
    },
    {
      id: 7,
      name: "Apple Watch",
      price: 40000,
      image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=400"
    },
    {
      id: 8,
      name: "Nike Shoes",
      price: 5000,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
    }
  ];

  // ✅ ADD PRODUCT
  const handleAddToUserPage = (product) => {
    const existingProducts = getProducts();
    const alreadyExists = existingProducts.find(
      (p) => p.id === product.id
    );

    if (!alreadyExists) {
      saveProducts([...existingProducts, product]);
      alert("Product Added to User Page");
    } else {
      alert("Product Already Added");
    }
  };

  // ❌ REMOVE PRODUCT
  const handleRemoveFromUserPage = (product) => {
    const existingProducts = getProducts();

    const updatedProducts = existingProducts.filter(
      (p) => p.id !== product.id
    );

    saveProducts(updatedProducts);
    alert("Product Removed from User Page");
  };

  if (!isAuthorized) return null;

  return (
    <div className="rr">
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0 40px",
        marginBottom: "30px"
      }}>
        <h2>Admin Panel</h2>
        <button className="lo" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <section className="products">
        {adminProducts.map((p) => (
          <div key={p.id} className="product">
            <img src={p.image} alt={p.name} />
            <h2>{p.name}</h2>
            <p>₹{p.price}</p>

            <button
              className="pbtn"
              onClick={() => handleAddToUserPage(p)}
            >
              Add to User Page
            </button>

            <button
              className="rb"
              style={{ marginTop: "10px" }}
              onClick={() => handleRemoveFromUserPage(p)}
            >
              Remove from User Page
            </button>

          </div>
        ))}
      </section>
    </div>
  );
};

export default Admin;
