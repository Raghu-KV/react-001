import { useRef } from "react";

function PracticeUseRef() {
  const paraRef = useRef();

  const addNum = () => {
    console.log(paraRef.current);
    paraRef.current.innerText = 20;
  };

  console.log("rendered");
  return (
    <div>
      <h1>Useref practice</h1>

      <p ref={paraRef}>10</p>

      <button onClick={() => addNum()}>Add number</button>
    </div>
  );
}
export default PracticeUseRef;
