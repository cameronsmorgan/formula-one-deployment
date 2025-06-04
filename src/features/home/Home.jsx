import React from "react";
import Carousel from "../../components/Carousel";
import { useFavorites } from "../../context/FavouriteContext";
import '../../components/Carousel.css';
import './Home.css';

function Home() {
  const { favoriteDriver, favoriteConstructor } = useFavorites(); 

  return (
      <main className="home-container">
      <header className="hero">
        <h1>Welcome to Formula 1 Central</h1>
        <p>Your one-stop hub for standings, race schedules, predictions & more.</p>
      </header>

      <section aria-label="Image Carousel">
        <Carousel />
      </section>

      <section className="features" aria-label="Main Features">
        <article className="feature-box">
          <h2>🏁 Race Schedule</h2>
          <p>Stay updated with all upcoming Grand Prix events.</p>
        </article>
        <article className="feature-box">
          <h2>🏆 Standings</h2>
          <p>Updated driver & constructor championship points.</p>
        </article>
        <article className="feature-box">
          <h2>📊 Predictions</h2>
          <p>Submit your podium predictions for each race.</p>
        </article>
        <article className="feature-box">
          <h2>🗃️ Archives</h2>
          <p>Access data from your favourite grand prix of the past</p>
        </article>
      </section>

      {(
        <section className="my-favourites" aria-label="Your Favourite Driver and Constructor">
          <h2>My Favourites</h2>
          
 
          {!favoriteDriver && !favoriteConstructor && (
            <p>Select your favourite driver and constructor.</p> //displays only if no favourite driver/team
          )}

          <div className="favourites-grid">
            {favoriteDriver&&(
              <article className="driver-card">
                <figure>
                  <img src={favoriteDriver.image} alt={favoriteDriver.name} />
                  <figcaption><h3>{favoriteDriver.name}</h3></figcaption>
                </figure>
                <p><strong>Team:</strong> {favoriteDriver.team}</p>
                <p><strong>DOB:</strong> {favoriteDriver.dob}</p>
                <p><strong>Nationality:</strong> {favoriteDriver.nationality}</p>
                <div className="stats">
                  <div><strong>Wins:</strong> {favoriteDriver.wins}</div>
                  <div><strong>Titles:</strong> {favoriteDriver.titles}</div>
                  <div><strong>Points:</strong> {favoriteDriver.points}</div>
                  <div><strong>Podiums:</strong> {favoriteDriver.podiums}</div>
                </div>
              </article>
            )}


            {favoriteConstructor && (
              <article className="constructor-card" >
                <figure>
                  <img src={favoriteConstructor.logo} alt={favoriteConstructor.name} />
                  <figcaption><h3>{favoriteConstructor.name}</h3></figcaption>
                </figure>
                <p><strong>Team Principal:</strong> {favoriteConstructor.teamPrincipal}</p>
                <p><strong>First Entry:</strong> {favoriteConstructor.firstEntry}</p>
                <p><strong>Country:</strong> {favoriteConstructor.country}</p>
                <div className="stats">
                  <div><strong>Championships:</strong> {favoriteConstructor.championships}</div>
                  <div><strong>Wins:</strong> {favoriteConstructor.wins}</div>
                  <div><strong>Poles:</strong> {favoriteConstructor.poles}</div>
                  <div><strong>Podiums:</strong> {favoriteConstructor.podiums}</div>
                </div>
              </article>
            )}
          </div>
</section>
      )}
    </main>
  );
}

export default Home;