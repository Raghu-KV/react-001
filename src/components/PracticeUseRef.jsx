import { useRef } from "react";

function PracticeUseRef() {
  const inputRef = useRef();

  let i = 10;
  const addNum = () => {
    i = i + 1;
    console.log(inputRef.current.value);
  };

  console.log("rendered");
  return (
    <div>
      <h1>Useref practice</h1>

      <input type="text" ref={inputRef} />

      <button onClick={() => addNum()}>Add number</button>
    </div>
  );
}
export default PracticeUseRef;

//export import, spread, rest
