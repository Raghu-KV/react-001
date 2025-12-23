import { useState } from "react";
import Button from "./components/Button";
import Form from "./components/Form";
import PracticeUseEffect from "./components/PracticeUseEffect";
import ProductList from "./components/ProductList";
import NavBar from "./components/NavBar";

function App() {
  const [num, setNum] = useState(10);

  const [clicked, setClicked] = useState(false);

  const [show, setShow] = useState(true);

  const addFunc = () => {
    setNum(num + 1);
  };

  const subFunc = () => {
    setNum(num - 1);
  };

  console.log(show, setShow);

  return (
    <div>
      <NavBar />
      {/* <p>the number is : {num} </p>
      <Button
        content={clicked ? "another content" : "click"}
        listenClick={() => setClicked(true)}
      />
      <p>-----</p>
      <Button content="Click to subract" func={subFunc} />
      <Button content="to console" func={() => console.log("click")} /> */}

      {/* <Form /> */}
      {/* 
      <button onClick={() => setShow(!show)}>click</button>
      {show && <PracticeUseEffect />} */}

      <ProductList />
    </div>
  );
}

export default App;
