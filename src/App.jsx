import { useState } from "react";
import Button from "./components/Button";
import Form from "./components/Form";

function App() {
  const [num, setNum] = useState(10);

  const [clicked, setClicked] = useState(false);

  const addFunc = () => {
    setNum(num + 1);
  };

  const subFunc = () => {
    setNum(num - 1);
  };

  console.log("rendered");

  return (
    <div>
      {/* <p>the number is : {num} </p>
      <Button
        content={clicked ? "another content" : "click"}
        listenClick={() => setClicked(true)}
      />
      <p>-----</p>
      <Button content="Click to subract" func={subFunc} />
      <Button content="to console" func={() => console.log("click")} /> */}

      <Form />
    </div>
  );
}

export default App;
