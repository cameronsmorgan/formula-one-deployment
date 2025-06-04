import React from 'react';

function RaceDropdown({ races, selectedRace, setSelectedRace }) {
  return (
    <form className="dropdown-container" aria-label="Race selection form">
      <label htmlFor="race-select">Select Race:</label>
      <select
        id="race-select"
        value={selectedRace}
        onChange={(e) => setSelectedRace(e.target.value)}
      >
        <option value="">-- Select a race --</option>
        {races.map((race) => (
          <option key={race.raceName} value={race.raceName}>
            {race.raceName} – {race.date}
          </option>
        ))}
      </select>
    </form>
  );
}

export default RaceDropdown;
