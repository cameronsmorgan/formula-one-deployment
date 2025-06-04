import React from 'react';
import { useState } from 'react';
import driverStandings from '../../data/driverStandings';
import constructorsStandings from '../../data/constructorsStandings';
import './Standings.css';

function Standings() {
  const [activeTab,setActiveTab] = useState("drivers");

  return (
     <main className="standings-container">
      <header>
        <h1 className="standings-heading">Standings</h1>
      </header>

      <nav className="toggle-container" aria-label="Toggle Tabs">
        <button
          className={activeTab === "drivers" ? "toggle-btn active" : "toggle-btn"} 
          onClick={() => setActiveTab("drivers")}  //clicking the button updates activeTab and therefore the classname
        >
          Drivers
        </button>
        <button
          className={activeTab === "constructors" ? "toggle-btn active" : "toggle-btn"}
          onClick={() => setActiveTab("constructors")}
        >
          Constructors
        </button>
      </nav>

      <section aria-label="Driver Standings Table" hidden={activeTab !== "drivers"}>
        <table className="standings-table">
          <thead>
            <tr>
              <th>Position</th>
              <th>Drivers</th>
              <th>Team</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {driverStandings.map((driver) => (  //map function loops through each driver and renders a row
              <tr key={driver.position}>
                <td>{driver.position}</td>
                <td>{driver.driver}</td>
                <td>{driver.team}</td>
                <td>{driver.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section aria-label="Constructor Standings Table" hidden={activeTab !== "constructors"}>
        <table className="standings-table">
          <thead>
            <tr>
              <th>Position</th>
              <th>Constructor</th>
              <th>Nationality</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {constructorsStandings.map((team) => (
              <tr key={team.position}>
                <td>{team.position}</td>
                <td>{team.constructor}</td>
                <td>{team.flag} {team.nationality}</td>
                <td>{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default Standings
