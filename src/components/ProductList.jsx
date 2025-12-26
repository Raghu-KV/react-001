import { useState, useEffect } from "react";
import ProductDisplay from "./ProductDisplay";
import NavBar from "./NavBar";

function ProductList() {
  const [products, setProducts] = useState([]);

  const productAPICall = async () => {
    const res = await fetch("https://dummyjson.com/recipes");
    const data = await res.json();
    setProducts(data.recipes);
  };

  // productAPICall();

  useEffect(() => {
    productAPICall();
  }, []);

  // https://dummyjson.com/products

  console.log(products);

  return (
    <div>
      <h1>Products</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "10px",
        }}
      >
        {products.map((product) => (
          <ProductDisplay
            img={product.image}
            title={product.name}
            key={product.title}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
