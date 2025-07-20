import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchResults from "./components/Search";
import ProductDetails from "./pages/ProductsDetails";
import LoginPage from "./pages/Login";

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <Router>
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", width: "100vw" }}>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="*" element={<h2 style={{ textAlign: "center", padding: "2rem" }}>404 - Page Not Found</h2>} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
