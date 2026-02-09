"use client";

import { useState } from "react";

export default function Login() {
  const [u, setU] = useState("");
  const [p, setP] = useState("");

  async function login() {
    const r = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ u, p })
    });

    if (r.ok) window.location.href = "/dashboard";
    else alert("Invalid login");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url(/bg.jpg)",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div style={{ background: "rgba(0,0,0,.7)", padding: 30, borderRadius: 10 }}>
        <h2>Login</h2>

        <input placeholder="Username" onChange={e => setU(e.target.value)} />
        <br /><br />

        <input type="password" placeholder="Password" onChange={e => setP(e.target.value)} />
        <br /><br />

        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}
