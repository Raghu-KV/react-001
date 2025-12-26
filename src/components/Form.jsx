import { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isEmailError, setIsEmailError] = useState(false);
  const [isPassError, setIsPassError] = useState("");

  console.log("rerendering");

  const onSubmit = () => {
    console.log(email, password);

    if (!email) {
      setIsEmailError(true);
    } else {
      setIsEmailError(false);
    }

    if (!password) {
      setIsPassError("Password is required");
    } else if (password.length < 6) {
      setIsPassError("Password must be above 6");
    } else {
      setIsPassError("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      {isEmailError && <p>Email is required</p>}

      <br />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      {isPassError && <p>{isPassError}</p>}
      <br />
      <button onClick={() => onSubmit()}>submit</button>
    </div>
  );
}

export default Form;
