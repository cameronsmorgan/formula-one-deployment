import React from "react";
import { Link } from "react-router-dom";
import './ArchiveCard.css';

function ArchiveCard({ year }) {
  return (
    <Link to={`/archives/${year}`} className="archive-card" aria-label={`Archive for year ${year}`}>
      <article className="card-content">
        <span className="card-box" aria-hidden="true">{year}</span>
        <p className="card-label">{year}</p>
      </article>
    </Link>
  );
}

export default ArchiveCard;
