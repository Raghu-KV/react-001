function ProductDisplay({ img, title, price }) {
  return (
    <div style={{ border: "solid 1px black", borderRadius: "20px" }}>
      <img src={img} alt="product img" height={"200px"} />
      <p>{title}</p>

      <p>₹{price}</p>
    </div>
  );
}

export default ProductDisplay;
