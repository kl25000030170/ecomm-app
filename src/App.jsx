import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Cart from "./Components/Cart";
import Products1 from "./Components/Products1";
import Signup from "./Components/Signup";
import Admin from "./Components/Admin";
import AdminLogin from "./Components/AdminLogin";

function App() {
  return (
    <HashRouter>
    
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products1" element={<Products1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />

        {/* ✅ Admin Routes */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
   
    </HashRouter>
  );
}

export default App;
