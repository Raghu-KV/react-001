import { useState, useEffect } from "react";
import ProductDisplay from "./ProductDisplay";
import NavBar from "./NavBar";

function ProductList() {
  const [products, setProducts] = useState([]);

  const apiCall = async () => {
    const responce = await fetch("https://dummyjson.com/products");
    const data = await responce.json();
    setProducts(data.products);
  };

  useEffect(() => {
    apiCall();
  }, []);

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
        {products.map((i) => (
          <ProductDisplay img={i.images[0]} title={i.title} price={i.price} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
