import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");  // State for selected size
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  if (!product) return <div style={styles.loading}>Loading...</div>;

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert("Please select a size before proceeding to checkout!");
      return;
    }
    // Redirect to checkout page with product details and selected size
    navigate("/checkout", { state: { product, selectedSize } });
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <div style={styles.imageContainer}>
          <img src={product.image} alt={product.title} style={styles.image} />
        </div>
        <div style={styles.details}>
          <h2 style={styles.title}>{product.title}</h2>
          <p style={styles.description}>{product.description}</p>
          <p style={styles.info}>
            <strong>Category:</strong> {product.category}
          </p>
          <p style={styles.price}>₹{product.price.toFixed(2)}</p>

          {/* Size Selection */}
          <div style={styles.sizeContainer}>
            <label style={styles.sizeLabel}>Select Size:</label>
            <select
              style={styles.sizeSelect}
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="">Select Size</option>
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          {/* Buy Now Button */}
          <button onClick={handleBuyNow} style={styles.buyNowButton}>
            Buy Now
          </button>
        </div>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .product-card {
              flex-direction: column;
              padding: 1rem;
            }
            .product-image {
              max-width: 100%;
              margin-bottom: 1rem;
            }
            .product-details {
              text-align: center;
            }
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  wrapper: {
    padding: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
    maxWidth: "1000px",
    width: "100%",
    background: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    borderRadius: "12px",
    padding: "2rem",
    boxSizing: "border-box",
  },
  imageContainer: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "400px",
    objectFit: "contain",
  },
  details: {
    flex: "2",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "1.8rem",
    marginBottom: "1rem",
    color: "#333",
  },
  description: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "1rem",
  },
  info: {
    fontSize: "1rem",
    color: "#777",
    marginBottom: "0.5rem",
  },
  price: {
    fontSize: "1.5rem",
    color: "#111",
    fontWeight: "bold",
    marginTop: "1rem",
  },
  sizeContainer: {
    margin: "1rem 0",
  },
  sizeLabel: {
    fontSize: "1rem",
    marginRight: "1rem",
    color: "#333",
  },
  sizeSelect: {
    padding: "0.5rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "150px",
  },
  buyNowButton: {
    background: "#333",
    color: "#fff",
    border: "none",
    padding: "1rem",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "1rem",
    fontSize: "1.2rem",
    width: "100%",
    transition: "background-color 0.3s",
  },
  buyNowButtonHover: {
    background: "#555",
  },
  loading: {
    padding: "2rem",
    textAlign: "center",
    fontSize: "1.2rem",
    color: "#666",
  },
};
