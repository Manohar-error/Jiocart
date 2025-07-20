import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to the cart!");
      return;
    }
    addToCart({ ...product, size: selectedSize });
  };

  return (
    <div
      style={{
        ...styles.card,
        ...(isHovered ? styles.cardHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
    <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}><img src={product.image} alt={product.title} style={styles.image} />
      </Link>
      <h4 style={styles.title}>{product.title}</h4>
      <div style={styles.sizeContainer}>
        <p style={styles.label}>Select Size:</p>
        <div style={styles.sizes}>
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              style={{
                ...styles.sizeButton,
                ...(selectedSize === size ? styles.sizeButtonSelected : {}),
              }}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div style={styles.priceAndButtonContainer}>
        <p style={styles.price}>₹{product.price.toFixed(2)}</p>
        <button
          onClick={handleAddToCart}
          style={{
            ...styles.button,
            ...(isButtonHovered ? styles.buttonHover : {}),
          }}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          <ShoppingCart style={styles.icon} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    padding: "1rem",
    textAlign: "center",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "transform 0.3s, box-shadow 0.3s",
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box",
  },
  cardHover: {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
  },
  image: {
    width: "100%",
    height: "auto",
    maxHeight: "180px",
    objectFit: "contain",
    marginBottom: "1rem",
  },
  title: {
    color: "black",
    fontSize: "1rem",
    height: "3em",
    overflow: "hidden",
  },
  sizeContainer: {
    marginBottom: "1rem",
  },
  label: {
    fontSize: "1rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    color: "#333333",
  },
  sizes: {
    display: "flex",
    gap: "0.5rem",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  sizeButton: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "1px solid #ccc",
    background: "#fff",
    color: "#333333",
    cursor: "pointer",
    fontSize: "0.8rem",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 0.3s, transform 0.2s",
  },
  sizeButtonSelected: {
    background: "#333333",
    color: "#fff",
    transform: "scale(1.1)",
  },
  priceAndButtonContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "auto",
    gap: "0.5rem",
    flexWrap: "wrap",
  },
  price: {
    color: "#333333",
    fontWeight: "bold",
    fontSize: "20px",
    margin: "1px",
  },
  button: {
    background: "#333333",
    color: "#fff",
    border: "none",
    padding: "0.5rem",
    borderRadius: "6px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    background: "#555555",
  },
  icon: {
    fontSize: "1.2rem",
  },
};
