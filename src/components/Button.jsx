import "./button.css";

function Button({ content, listenClick }) {
  console.log("hhh");
  return (
    <button className="btn" onClick={() => listenClick()}>
      {content}
    </button>
  );
}

export default Button;
