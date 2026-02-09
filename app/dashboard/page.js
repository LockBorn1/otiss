"use client";

import { useState } from "react";
import Map from "./map";

export default function Dashboard() {

  const [profileOpen, setProfileOpen] = useState(false);
  const [treeOpen, setTreeOpen] = useState({
    admin: true,
    suspects: true,
    vehicles: false
  });

  const fakeAddresses = [
    "12 Court St, Athens OH",
    "441 Richland Ave, Athens OH",
    "90 N Congress St, Athens OH",
    "22 E Union St, Athens OH"
  ];

  const suspect = {
    name: "John Doe",
    warrant: "ACTIVE WARRANT",
    address: fakeAddresses[Math.floor(Math.random()*fakeAddresses.length)]
  };

  function toggle(section) {
    setTreeOpen(prev => ({ ...prev, [section]: !prev[section] }));
  }

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", fontFamily: "Arial" }}>

      {/* TOP BAR */}
      <div style={{ background: "#1a1a1a", padding: 10 }}>
        Athens MDT Simulator

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

        {/* TREE PANEL */}
        <div style={{ width: 240, background: "#202020", padding: 10, color: "#ccc" }}>

          <h4 onClick={() => toggle("admin")} style={{ cursor: "pointer" }}>
            ▶ Admin
          </h4>
          {treeOpen.admin && (
            <ul>
              <li>Local Case</li>
              <li>Summary</li>
              <li>Officer Notes</li>
            </ul>
          )}

          <h4 onClick={() => toggle("suspects")} style={{ cursor: "pointer" }}>
            ▶ Suspects
          </h4>
          {treeOpen.suspects && (
            <ul>
              <li>{suspect.name}</li>
            </ul>
          )}

          <h4 onClick={() => toggle("vehicles")} style={{ cursor: "pointer" }}>
            ▶ Vehicles
          </h4>
          {treeOpen.vehicles && (
            <ul>
              <li>Plate Lookup</li>
              <li>Impound</li>
            </ul>
          )}

          <hr />
          <div>Athens Map</div>
        </div>

        {/* MAIN WORKSPACE */}
        <div style={{ flex: 1, display: "flex", background: "#2b2b2b" }}>

          {/* INCIDENT PANEL */}
          <div style={{ width: 450, padding: 15 }}>

            <h3>Active Suspect</h3>

            <div style={{ background: "#ddd", padding: 10, color: "black" }}>
              <b>Name:</b> {suspect.name}<br />
              <b>Status:</b> <span style={{ color: "red" }}>{suspect.warrant}</span><br />
              <b>Last Known Address:</b> {suspect.address}
            </div>

            <h3>Incident Entry</h3>

            <div style={{ background: "#ddd", padding: 10, color: "black" }}>
              <label>Incident Type</label><br />
              <input style={{ background: "yellow" }} /><br /><br />

              <label>Location</label><br />
              <input style={{ background: "yellow" }} /><br /><br />

              <label>Officer</label><br />
              <input style={{ background: "yellow" }} value="Milner 0722" readOnly />
            </div>

          </div>

          {/* MAP */}
          <div style={{ flex: 1 }}>
            <Map />
          </div>

        </div>
      </div>
    </div>
  );
}
