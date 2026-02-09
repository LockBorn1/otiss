"use client";

import { useState } from "react";
import Map from "./map";

export default function Dashboard() {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");

  function lookup() {
    if (name.toLowerCase() === "john carter") {
      setResult("VALID OH LICENSE — NO WARRANTS");
    } else {
      setResult("NO RECORD FOUND");
    }
  }

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "#222", padding: 10 }}>
        Unit 0722 — Athens RP Terminal
        <button style={{ float: "right" }} onClick={() => window.location.href="/"}>
          Logout
        </button>
      </div>

      <div style={{ display: "flex", flex: 1 }}>
        <div style={{ width: 350, padding: 15, background: "#111" }}>
          <h3>Person Lookup</h3>

          <input placeholder="Enter name" onChange={e => setName(e.target.value)} />
          <button onClick={lookup}>Search</button>

          <p>{result}</p>
        </div>

        <div style={{ flex: 1 }}>
          <Map />
        </div>
      </div>
    </div>
  );
}
