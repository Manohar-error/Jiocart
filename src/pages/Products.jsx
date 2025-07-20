import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import backgroundImage from "../assets/productbg.jpg";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      const clothing = res.data.filter((item) =>
        item.category.toLowerCase().includes("clothing")
      );
      setProducts(clothing);
    });
  }, []);

  return (
    <section className="products-section">
      <div className="overlay">
        <header>
          <h2 className="products-heading">Start Your Style Journey</h2>
        </header>

        <main className="products-main">
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>

      {/* Inline CSS moved to <style> for clarity and reusability */}
      <style>
        {`
          .products-section {
            min-height: 100vh;
            background-image: url(${backgroundImage});
            background-size: cover;
            background-position: center;
            color: white;
            display: flex;
            justify-content: center;
            padding: 2rem 1rem;
          }

          .overlay {
            width: 100%;
            max-width: 1300px;
            display: flex;
            flex-direction: column;
            align-items: center;
            backdrop-filter: brightness(0.9);
            padding: 1rem;
            border-radius: 12px;
          }

          .products-heading {
            font-size: clamp(2rem, 5vw, 3rem);
            margin-bottom: 2rem;
            text-align: center;
            color: #4B3832;
            font-weight: 700;
            letter-spacing: 1px;
          }

          .products-main {
            width: 100%;
          }

          .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 2rem;
            width: 100%;
          }

          @media (max-width: 768px) {
            .products-grid {
              grid-template-columns: 1fr;
              gap: 1.2rem;
            }
            .products-heading {
              font-size: 1.75rem;
              margin-bottom: 1.5rem;
            }
          }
        `}
      </style>
    </section>
  );
}
