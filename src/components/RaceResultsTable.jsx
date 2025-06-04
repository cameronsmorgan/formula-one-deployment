import React from 'react';
import './ResultsTable.css';

function RaceResultsTable({ race }) {
  return (
    <section className="race-results">
      <header>
        <h2>{race.raceName} Results</h2>
      </header>
      <table>
        <thead>
          <tr>
            <th scope="col">Position</th> 
            <th scope="col">Driver</th>
            <th scope="col">Constructor</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>
          {race.Results.map((result) => (
            <tr key={result.position}>
              <td>{result.position}</td>
              <td>{result.Driver.givenName} {result.Driver.familyName}</td>
              <td>{result.Constructor.name}</td>
              <td>{result.Time ? result.Time.time : 'Lapped by Leader'}</td>  {/*Could not display times for drivers that were lapped. Times displayed were +1 Lap or +2 Laps*/}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default RaceResultsTable;
