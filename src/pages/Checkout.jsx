import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import backgroundImage from "../assets/backgorund logo.jpg";

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    cashOnDelivery: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.cashOnDelivery) {
      setError("You must select the Cash on Delivery option to proceed.");
      return;
    }
    if (form.name && form.address && form.phone) {
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(form.phone)) {
        setError("Please enter a valid 10-digit phone number.");
        return;
      }
      if (cart.length === 0) {
        setError("Your cart is empty.");
        return;
      }
      setSubmitted(true);
      clearCart();
    } else {
      setError("All fields are required.");
    }
  };

  if (submitted) {
    return (
      <div
        className="wrapper"
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          flexDirection: "column",
          padding: "2rem",
        }}
      >
        <h2 style={{ fontSize: "2rem", textAlign: "center", color: "#FFFFFF" }}>
          🎉 Order placed successfully!
        </h2>
        <p style={{ color: "#FFFFFF", fontSize: "20px" }}>
          Thank you for shopping with us!
        </p>
      </div>
    );
  }

  return (
    <>
      <style>
        {`
          @media (min-width: 768px) {
            .card {
              width: 70%;
              margin: 0 auto;
              background: rgba(255, 255, 255, 0.9);
            }
          }

          @media (min-width: 1024px) {
            .wrapper {
              width: 100%;
              height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .card {
              max-width: 500px;
              padding: 3rem;
            }
          }

          @media (max-width: 767px) {
            .card {
              width: 90%;
              padding: 1.5rem;
              background: rgba(255, 255, 255, 0.95);
            }
          }
        `}
      </style>
      <div
        className="wrapper"
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <div className="card" style={styles.card}>
          <h2 style={styles.heading}>Checkout</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            {error && <p style={styles.error}>{error}</p>}
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              style={styles.input}
            />
            <input
              type="text"
              placeholder="Address"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              style={styles.input}
            />
            <input
              type="tel"
              placeholder="Phone (10 digits)"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              pattern="[0-9]{10}"
              style={styles.input}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <input
                type="checkbox"
                checked={form.cashOnDelivery}
                onChange={(e) =>
                  setForm({ ...form, cashOnDelivery: e.target.checked })
                }
                style={{ transform: "scale(1.2)" }}
              />
              <label style={{ color: "black", fontSize: "1rem" }}>
                Cash on Delivery (required)
              </label>
            </div>
            <button
              type="submit"
              style={{
                ...styles.button,
                background: isHovered
                  ? styles.buttonHover.background
                  : styles.button.background,
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

const styles = {
  card: {
    width: "100%",
    maxWidth: "400px",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    color: "black",
    background: "white",
    margin: "0 auto",
  },
  heading: {
    textAlign: "center",
    marginBottom: "1.5rem",
    color: "#191919",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "0.75rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    background: "#FEFBEA",
    color: "black",
  },
  button: {
    background: "#333333",
    color: "#fff",
    border: "none",
    padding: "0.75rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1.1rem",
    transition: "background 0.3s",
  },
  buttonHover: {
    background: "#555555",
  },
  error: {
    color: "red",
    fontSize: "0.9rem",
    marginBottom: "0.5rem",
    textAlign: "center",
  },
};