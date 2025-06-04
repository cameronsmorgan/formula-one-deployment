import React, { useState } from 'react';
import driversProfiles from '../../data/driverProfiles';
import { useFavorites } from '../../context/FavouriteContext';

const DriverProfiles = () => {
  const [selectedDriver, setSelectedDriver] = useState(driversProfiles[0]);
  const { favoriteDriver, updateFavoriteDriver } = useFavorites();

  return (
    <section className="profile-content">
      <aside className="driver-list">
        <h2>Drivers</h2>
        <ul>
          {driversProfiles.map((driver) => (
            <li
              key={driver.name}
              className={driver.name === selectedDriver.name ? "selected" : ""}
              onClick={() => setSelectedDriver(driver)}
            >
              {driver.name}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  updateFavoriteDriver(driver);
                }}
                style={{
                  marginLeft: '10px',
                  backgroundColor: favoriteDriver?.name === driver.name ? 'gold' : 'lightgray',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  padding: '2px 6px',
                }}
                aria-label={`Mark ${driver.name} as favorite`}
              >
                ★
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <article className="driver-card">
        <figure>
          <img src={selectedDriver.image} alt={selectedDriver.name} />
          <figcaption><h2>{selectedDriver.name}</h2></figcaption>
        </figure>
        <p><strong>DOB:</strong> {selectedDriver.dob}</p>
        <p><strong>Team:</strong> {selectedDriver.team}</p>
        <p><strong>Nationality:</strong> {selectedDriver.nationality}</p>
        <div className="stats">
          <div><strong>Wins:</strong> {selectedDriver.wins}</div>
          <div><strong>Titles:</strong> {selectedDriver.titles}</div>
          <div><strong>Points:</strong> {selectedDriver.points}</div>
          <div><strong>Podiums:</strong> {selectedDriver.podiums}</div>
        </div>
      </article>
    </section>
  );
};

export default DriverProfiles;