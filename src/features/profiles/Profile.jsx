import React, { useState } from 'react';
import DriverProfiles from './DriverProfiles';
import ConstructorProfiles from './ConstructorProfile';
import './profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('drivers');

  return (
    <main className="profile-page">
      <header>
        <h1 className="profile-heading">Profiles</h1>
      </header>

      <nav className="toggle-container" aria-label="Profile type navigation">
        <button
          className={activeTab === "drivers" ? "toggle-btn active" : "toggle-btn"}
          onClick={() => setActiveTab("drivers")}
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

      {activeTab === "drivers" && <DriverProfiles />}
      {activeTab === "constructors" && <ConstructorProfiles />}
    </main>
  );
};

export default Profile;