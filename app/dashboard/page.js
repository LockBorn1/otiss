"use client";

import { useState, useEffect } from "react";
import Map from "./map";

export default function Dashboard() {

  // ---- STATE ----
  const [night, setNight] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const [cases, setCases] = useState([]);
  const [citations, setCitations] = useState([]);
  const [dispatch, setDispatch] = useState([]);
  const [warrants] = useState(["John Doe — Active Warrant"]);
  const [plates] = useState({ "ABC123": "Clear", "HOT911": "Stolen Vehicle" });

  const [officers] = useState([
    "Milner 0722",
    "Walker 0911",
    "Davis 1023"
  ]);

  // ---- LOAD STORAGE ----
  useEffect(() => {
    setCases(JSON.parse(localStorage.getItem("cases") || "[]"));
    setCitations(JSON.parse(localStorage.getItem("citations") || "[]"));
  }, []);

  function save(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  // ---- CASE ----
  function newCase() {
    const c = { id: "LC-" + Date.now(), officer: "Milner 0722" };
    const updated = [...cases, c];
    setCases(updated);
    save("cases", updated);
  }

  // ---- CITATION ----
  function addCitation() {
    const c = "Citation #" + (citations.length + 1);
    const updated = [...citations, c];
    setCitations(updated);
    save("citations", updated);
  }

  // ---- DISPATCH ----
  function addDispatch() {
    setDispatch([...dispatch, "Traffic Stop — Main St"]);
  }

  // ---- PLATE SCAN ----
  function scanPlate() {
    const plate = prompt("Enter plate:");
    alert(plates[plate] || "No record");
  }

  // ---- SIREN ----
  function siren() {
    const audio = new Audio("https://actions.google.com/sounds/v1/alarms/siren.ogg");
    audio.play();
  }

  // ---- EXPORT ----
  function exportReport() {
    const blob = new Blob([JSON.stringify(cases, null, 2)]);
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "cases.json";
    a.click();
  }

  return (
    <div style={{
      height: "100vh",
      background: night ? "#000" : "#2a2a2a",
      color: night ? "#0f0" : "white",
      display: "flex",
      flexDirection: "column"
    }}>

      {/* TOP BAR */}
      <div style={{ background: "#222", padding: 10 }}>
        Athens RP MDT

        <button onClick={() => setNight(!night)}>Night Mode</button>
        <button onClick={siren}>Siren</button>

        <span
          style={{ float: "right", cursor: "pointer" }}
          onClick={() => setProfileOpen(!profileOpen)}
        >
          👤
        </span>

        {profileOpen && (
          <div style={{
            position: "absolute",
            right: 10,
            top: 40,
            background: "#333",
            padding: 10
          }}>
            Trooper Milner 0722
            <br />
            <button onClick={() => window.location.href="/"}>
              Logout
            </button>
          </div>
        )}
      </div>

      <div style={{ display: "flex", flex: 1 }}>

        {/* SIDEBAR */}
        <div style={{ width: 220, background: "#1c1c1c", padding: 10 }}>
          <h4>MDT Menu</h4>

          <button onClick={newCase}>New Case</button>
          <button onClick={addCitation}>Citation</button>
          <button onClick={addDispatch}>Dispatch</button>
          <button onClick={scanPlate}>Plate Scan</button>
          <button onClick={exportReport}>Export</button>

          <h4>Officers</h4>
          {officers.map(o => <div key={o}>{o}</div>)}
        </div>

        {/* MAIN */}
        <div style={{ flex: 1, padding: 15, display: "flex", gap: 15 }}>

          <div style={{ width: 400 }}>
            <h3>Cases</h3>
            {cases.map(c => <div key={c.id}>{c.id}</div>)}

            <h3>Citations</h3>
            {citations.map((c,i) => <div key={i}>{c}</div>)}

            <h3>Dispatch CAD</h3>
            {dispatch.map((d,i) => <div key={i}>{d}</div>)}

            <h3>Warrants</h3>
            {warrants.map((w,i) => <div key={i}>{w}</div>)}
          </div>

          <div style={{ flex: 1 }}>
            <Map />
          </div>

        </div>
      </div>
    </div>
  );
}
