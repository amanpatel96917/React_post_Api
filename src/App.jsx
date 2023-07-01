import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  function saveData(e) {
    let data = { name, email, mobile };
    e.preventDefault();
    console.log({ name, email, mobile });
    fetch("http://localhost:4000/posts", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
  return (
    <>
      <form>
        <br />
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <br />
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          value={mobile}
          onChange={(event) => setMobile(event.target.value)}
        />
        <br />
        <br />

        <button onClick={saveData}>Submit</button>
      </form>
    </>
  );
}

export default App;
