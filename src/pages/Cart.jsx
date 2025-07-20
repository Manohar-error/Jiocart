import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import backgroundImage from '../assets/productbg.jpg';
import cartImage from '../assets/bg 1.jpg';

export default function Cart() {
  const { cart, updateQty, removeFromCart } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2);

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.banner}>
        <img src={cartImage} alt="Cart Banner" style={styles.bannerImage} />
        <div style={styles.overlay}></div>
      </div>

      <div style={styles.container}>
        <h2 style={styles.heading}>Your Cart</h2>

        {cart.length === 0 ? (
          <p style={styles.empty}>Your cart is empty.</p>
        ) : (
          <>
            <div style={styles.cartItems}>
              {cart.map((item) => (
                <div key={item.id} style={styles.cartItem}>
                  <div style={styles.itemDetails}>
                    <h4 style={styles.title}>{item.title}</h4>
                    <p>Size: {item.size}</p>
                    <p>Price: ₹{item.price.toFixed(2)}</p>
                  </div>
                  <div style={styles.qtyContainer}>
                    <input
                      type="number"
                      value={item.qty}
                      onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
                      min="1"
                      style={styles.input}
                    />
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={styles.removeButton}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div style={styles.footer}>
              <h3 style={styles.total}>Total: ₹{total}</h3>
              <Link to="/checkout" style={{ textDecoration: 'none', width: '100%' }}>
                <button style={styles.checkoutButton}>Proceed to Checkout</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  pageWrapper: {
    minHeight: "100vh",
    padding: "20px",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  banner: {
    width: "100%",
    maxHeight: "300px",
    overflow: "hidden",
    borderRadius: "10px",
    marginBottom: "1.5rem",
    position: "relative",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  container: {
    width: "95%",
    maxWidth: "800px",
    background: "rgba(255, 255, 255, 0.95)",
    borderRadius: "10px",
    padding: "1.5rem",
    color: "#333",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },
  heading: {
    fontSize: "1.8rem",
    marginBottom: "1.5rem",
    textAlign: "center",
  },
  empty: {
    textAlign: "center",
    fontSize: "1.2rem",
  },
  cartItems: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  cartItem: {
    display: "flex",
    flexDirection: "column",
    background: "#f1f1f1",
    padding: "1rem",
    borderRadius: "8px",
    gap: "0.5rem",
  },
  itemDetails: {
    display: "flex",
    flexDirection: "column",
    gap: "0.3rem",
  },
  title: {
    margin: 0,
    fontSize: "1.1rem",
    fontWeight: "bold",
  },
  qtyContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "1rem",
    marginTop: "0.5rem",
  },
  input: {
    width: "60px",
    padding: "0.4rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    textAlign: "center",
    background: "#36454F",
    color: "#fff",
  },
  removeButton: {
    background: "#e53935",
    color: "#fff",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  footer: {
    marginTop: "2rem",
    textAlign: "center",
  },
  total: {
    fontSize: "1.4rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  checkoutButton: {
    width: "100%",
    background: "#43a047",
    color: "#fff",
    border: "none",
    padding: "0.75rem",
    borderRadius: "8px",
    fontSize: "1.1rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};
