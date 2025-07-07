import React from 'react';

function RaceSelector({ races, onSelect }) {
  return (
    <section className="race-selector">
      
      <select
        id="race-dropdown"
        onChange={(e) => onSelect(e.target.value)}
        
      >
        <option value="">-- Choose a race --</option>
       {Array.isArray(races) && races.map((race) => (
  <option key={race.round} value={race.round}>
    {race.raceName} - {race.Circuit.circuitName}
  </option>
))}

      </select>
    </section>
  );
}

export default RaceSelector;
