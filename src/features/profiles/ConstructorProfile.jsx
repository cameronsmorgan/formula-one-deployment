import React, { useState } from 'react';
import constructorProfiles from '../../data/constructorsProfiles';
import { useFavorites } from '../../context/FavouriteContext';

const ConstructorProfiles = () => {
  const [selectedConstructor, setSelectedConstructor] = useState(constructorProfiles[0]);
  const { favoriteConstructor, updateFavoriteConstructor } = useFavorites();

  return (
    <section className="profile-content">
      <aside className="constructor-list">
        <h2>Constructors</h2>
        <ul>
          {constructorProfiles.map((team) => (
            <li
              key={team.name}
              className={team.name === selectedConstructor.name ? "selected" : ""}
              onClick={() => setSelectedConstructor(team)}
            >
              {team.name}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  updateFavoriteConstructor(team);
                }}
                style={{
                  marginLeft: '10px',
                  backgroundColor: favoriteConstructor?.name === team.name ? 'gold' : 'lightgray',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  padding: '2px 6px',
                }}
                aria-label={`Mark ${team.name} as favorite`}
              >
                ★
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <article className="constructor-card">
        <figure>
          <img src={selectedConstructor.logo} alt={selectedConstructor.name} />
          <figcaption><h2>{selectedConstructor.name}</h2></figcaption>
        </figure>
        <p><strong>Team Principal:</strong> {selectedConstructor.teamPrincipal}</p>
        <p><strong>First Entry:</strong> {selectedConstructor.firstEntry}</p>
        <p><strong>Country:</strong> {selectedConstructor.country}</p>
        <div className="stats">
          <div><strong>World Championships:</strong> {selectedConstructor.championships}</div>
          <div><strong>Race Wins:</strong> {selectedConstructor.wins}</div>
          <div><strong>Pole Positions:</strong> {selectedConstructor.poles}</div>
          <div><strong>Podiums:</strong> {selectedConstructor.podiums}</div>
        </div>
      </article>
    </section>
  );
};

export default ConstructorProfiles;