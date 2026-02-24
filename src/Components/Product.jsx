import { useNavigate } from "react-router-dom";

import p1 from "../assets/phone.png";

function Product() {
 const navigation=useNavigate();
 const handleAddtocart=()=>{
 const isLoggedIn = localStorage.getItem("isLoggedIn");

 if(isLoggedIn == "true"){
  navigation("/cart");

 }
 else{
  alert("Please login First");
  setTimeout(()=>{
    navigation("/login");
  }, 100);
}

}


  return (
  


    <div className="products">

      <div className="product">
        <img src={p1} alt="Luffy Gear 5 Toy" />
        <h2>Iphone 17 </h2>
        <p>Price: $500</p>
        <button className="pbtn" onClick={handleAddtocart}>Add to Cart</button>

      </div>

      <div className="product">
        <img src={p1} alt="IPHONE 17 Pro " />
        <h2>IPHONE 17 Pro</h2>
        <p>Price: $600</p>
        <button className="pbtn" onClick={handleAddtocart}>Add to Cart</button>

      </div>

      <div className="product">
        <img src={p1} alt="IPHONE 17 Pro Max" />
        <h2>IPHONE 17 Pro Max</h2>
        <p>Price: $800</p>
       <button className="pbtn" onClick={handleAddtocart}>Add to Cart</button>

      </div>

    </div>
  );
}

export default Product;
