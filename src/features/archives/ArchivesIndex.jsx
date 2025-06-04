import React from 'react';
import { Link } from 'react-router-dom';
import './ArchivesIndex.css'; // Ensure this file exists
import img2019 from '../../assets/images/2019 (1).jpg';
import img2020 from '../../assets/images/2020.jpg';
import img2021 from '../../assets/images/2021.jpg';
import img2022 from '../../assets/images/2022.jpg';
import img2023 from '../../assets/images/2023.jpg';
import img2024 from '../../assets/images/2024.jpg';

const archiveData = [
  { year: '2019', image: img2019 },
  { year: '2020', image: img2020 },
  { year: '2021', image: img2021 },
  { year: '2022', image: img2022 },
  { year: '2023', image: img2023 },
  { year: '2024', image: img2024 },
];

function ArchivesIndex() {
  return (
     <main className="archives-page">
      <header>
        <h1 className="archives-title">Archives</h1>
        <h2 className="archives-subtitle">Season selector</h2>
      </header>
      <section className="archives-grid">
        {archiveData.map(({ year, image }) => (  //takes user to year specific archive page
          <article key={year} className="archive-card-wrapper"> 
            <Link to={`/archives/${year}`} className="archive-card">  
              <img src={image} alt={`Season ${year}`} className="archive-image" />
            </Link>
            <div className="archive-label">{year}</div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default ArchivesIndex;