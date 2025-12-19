import "./practice.css";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");

  // console.log(arr);

  const whenSubmit = () => {
    console.log("submitted");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={() => whenSubmit()}>Submit</button>

      {email ? <h1>email is available</h1> : null}
    </div>
  );
}

export default App;
