"use client";

import { useState } from "react";
import Map from "./map";

export default function Dashboard() {

  // Lookup system
  const [name, setName] = useState("");
  const [result, setResult] = useState("");

  function lookup() {
    if (name.toLowerCase() === "john carter") {
      setResult("VALID OH LICENSE — NO WARRANTS");
    } else {
      setResult("NO RECORD FOUND");
    }
  }

  // Case system
  const [caseId, setCaseId] = useState("LC-" + Math.floor(Math.random()*100000));
  const [incidentType, setIncidentType] = useState("");
  const [county, setCounty] = useState("");
  const [location, setLocation] = useState("");
  const [officer, setOfficer] = useState("");
  const [status, setStatus] = useState("");

  function addCase() {
    setCaseId("LC-" + Math.floor(Math.random()*100000));
    setIncidentType("");
    setCounty("");
    setLocation("");
    setOfficer("");
    setStatus("New case created");
  }

  function saveCase() {
    setStatus("Case saved");
  }

  function deleteCase() {
    setStatus("Case deleted");
    addCase();
  }

  function validateCase() {
    if (!incidentType || !county) {
      setStatus("Missing required fields");
      return;
    }
    setStatus("Case validated");
  }

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>

      {/* Top bar */}
      <div style={{ background: "#222", padding: 10 }}>
        Unit 0722 — Athens OSHP
        <button style={{ float: "right" }} onClick={() => window.location.href="/"}>
          Logout
        </button>
      </div>

      <div style={{ display: "flex", flex: 1 }}>

        {/* Sidebar */}
        <div style={{ width: 200, background: "#1c1c1c", padding: 10 }}>
          <h4>Admin</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>Offense</li>
            <li>Summary</li>
            <li>Suspect</li>
            <li>Victim</li>
            <li>Vehicle</li>
            <li>Officer Notes</li>
          </ul>
        </div>

        {/* Main panel */}
        <div style={{ flex: 1, padding: 15, background: "#2a2a2a", display: "flex", gap: 15 }}>

          {/* Left column: lookup + case editor */}
          <div style={{ width: 400 }}>

            {/* Lookup */}
            <div style={{ background: "#111", padding: 10, marginBottom: 10 }}>
              <h3>Person Lookup</h3>
              <input placeholder="Enter name" onChange={e => setName(e.target.value)} />
              <button onClick={lookup}>Search</button>
              <p>{result}</p>
            </div>

            {/* Case buttons */}
            <div style={{ marginBottom: 10 }}>
              <button onClick={addCase}>Add</button>
              <button onClick={saveCase}>Save</button>
              <button onClick={deleteCase}>Delete</button>
              <button onClick={validateCase}>Validate</button>
            </div>

            <h3>Local Case Editor</h3>
            <p><b>Case ID:</b> {caseId}</p>

            {/* Case form */}
            <div style={{ background: "#ddd", padding: 10, color: "black" }}>

              <label>Incident Type</label><br />
              <input
                style={{ background: "yellow" }}
                value={incidentType}
                onChange={e => setIncidentType(e.target.value)}
              /><br /><br />

              <label>County</label><br />
              <input
                style={{ background: "yellow" }}
                value={county}
                onChange={e => setCounty(e.target.value)}
              /><br /><br />

              <label>Location</label><br />
              <input
                style={{ background: "yellow" }}
                value={location}
                onChange={e => setLocation(e.target.value)}
              /><br /><br />

              <label>Reporting Officer</label><br />
              <input
                style={{ background: "yellow" }}
                value={officer}
                onChange={e => setOfficer(e.target.value)}
              />
            </div>

            <p>Status: {status}</p>

          </div>

          {/* Map column */}
          <div style={{ flex: 1 }}>
            <Map />
          </div>

        </div>
      </div>
    </div>
  );
}
