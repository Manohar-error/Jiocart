import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";

const SearchResults = () => {
  const { products, loading } = useProducts();
  const location = useLocation();

  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get("query") || "";
    setQuery(searchQuery);

    if (searchQuery.trim() !== "") {
      const results = products.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFiltered(results);
    } else {
      setFiltered([]);
    }
  }, [location.search, products]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Products</h2>
      <input
        type="text"
        placeholder="Search by product name..."
        value={query}
        onChange={() => { }}
        style={{
          padding: "8px",
          width: "100%",
          maxWidth: 400,
          marginBottom: 20,
        }}
        disabled
      />
      {loading ? (
        <p>Loading...</p>
      ) : filtered.length > 0 ? (
        <ul>
          {filtered.map((item) => (
            <li key={item.id}>
              <Link to={`/product/${item.id}`} style={{ textDecoration: "none", color: "white" }}>
                {item.title} - ${item.price}
              </Link>
            </li>
          ))}
        </ul>
      ) : query ? (
        <p>No products found!</p>
      ) : null}
    </div>
  );
};

export default SearchResults;
