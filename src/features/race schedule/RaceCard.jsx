import React from 'react';

const RaceCard = ({ race }) => {
  if (!race) return <p>Select a race to see details</p>;

  return (
    <article className="race-card">
      <h3>{race.raceName}</h3>
      <p><strong>Country:</strong> {race.country}</p>
      <p><strong>Circuit:</strong> {race.circuitName}</p>
      <p><strong>Date:</strong> {race.date}</p>
      <p><strong>Time:</strong> {race.time}</p>
    </article>
  );
};

export default RaceCard;