import { useState, useEffect } from "react";

function PracticeUseEffect() {
  console.log("rendered useEffect component");
  const [count, setCount] = useState(0);
  const [s, setS] = useState(100);

  useEffect(() => {
    console.log("insede use effect");

    return () => {
      console.log("un moundind");
    };
  }, [s]);
  return (
    <div>
      <p>useEffect</p>

      <button onClick={() => setCount(count + 1)}>{count}</button>

      <button onClick={() => setS(s + 1)}>{s}</button>
    </div>
  );
}

export default PracticeUseEffect;
