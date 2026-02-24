import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProducts } from "../utils/localStorageHelper";

function Products1() {

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Get products from localStorage (Admin added)
    const storedProducts = getProducts();
    setProducts(storedProducts);
  }, []);

  const handleAddtocart = (p) => {

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {

      const cartData = JSON.parse(localStorage.getItem("cart")) || [];
      cartData.push(p);
      localStorage.setItem("cart", JSON.stringify(cartData));

      navigate("/cart");

    } else {
      alert("Please login first");
      setTimeout(() => {
        navigate("/login");
      }, 100);
    }
  };

  return (
    <>
      <section className="products">

        {products.length === 0 && (
          <h2>No Products Available</h2>
        )}

        {products.map((p) => (
          <div className="product" key={p.id}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>Price: ₹{p.price}</p>

            <button 
              onClick={() => handleAddtocart(p)} 
              className="p1b"
            >
              Add to Cart
            </button>

          </div>
        ))}

      </section>
    </>
  );
}

export default Products1;
