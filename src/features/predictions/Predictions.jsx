import React, { useEffect, useState } from 'react';
import fetchRaceSchedule from '../../utils/fetchRaceSchedule';
import { getStoredPredictions, savePredictionToStorage } from '../../utils/predictionStorage';
import PredictionForm from './PredictionForm';
import RaceDropdown from '../../components/RaceDropdown';
import './Predictions.css';

function Predictions() {
  const [mode, setMode] = useState('upcoming');
  const [raceData, setRaceData] = useState([]);
  const [selectedRace, setSelectedRace] = useState('');
  const [predictions, setPredictions] = useState({ first: '', second: '', third: '' });  //stores predictions
  const [submittedPredictions, setSubmittedPredictions] = useState(getStoredPredictions()); //loads predictions from local storage 

  useEffect(() => {
    const loadData = async () => {
      const races = await fetchRaceSchedule();
      setRaceData(races);
    };
    loadData();
  }, []);

  const today = new Date();

  const filteredRaces = raceData.filter((race) =>   //filters races into upcoming/past based on time & mode
    mode === 'upcoming' ? race.dateTime > today : race.dateTime <= today
  );

  const handleSelectChange = (e, position) => {  //updates prediction fields whne user selects their 3 drivers
    setPredictions({ ...predictions, [position]: e.target.value });
  };

  useEffect(() => {
    if (selectedRace) {
      const stored = submittedPredictions[selectedRace];
      if (stored) {
        setPredictions(stored);  //load predictions
      } else {
        setPredictions({ first: '', second: '', third: '' }); //reset predictions
      }
    }
  }, [selectedRace, submittedPredictions]);

  const handleSubmit = () => {
    if (!predictions.first || !predictions.second || !predictions.third) {
      alert('Please select all three positions before submitting.');
      return;
    }

    savePredictionToStorage(selectedRace, predictions);
    setSubmittedPredictions((prev) => ({
      ...prev,
      [selectedRace]: predictions,
    }));
  };

  return (
    <main className="predictions-container">
      <header>
        <h1 className="predictions-heading">Predictions</h1>
      </header>

      <section className="toggle-container" aria-label="Toggle race button">
        <button
          className={`toggle-btn ${mode === 'upcoming' ? 'active' : ''}`}
          onClick={() => setMode('upcoming')}
        >
          Upcoming
        </button>
        <button
          className={`toggle-btn ${mode === 'past' ? 'active' : ''}`}
          onClick={() => setMode('past')}
        >
          Past
        </button>
      </section>

      <section aria-label="Race selection">
        <RaceDropdown
          races={filteredRaces}
          selectedRace={selectedRace}
          setSelectedRace={setSelectedRace}
        />
      </section>

      {selectedRace && (
        <section aria-label="Prediction form">
          <PredictionForm
            mode={mode}
            predictions={predictions}
            selectedRace={selectedRace}
            submittedPredictions={submittedPredictions}
            handleSelectChange={handleSelectChange}
            handleSubmit={handleSubmit}
          />
        </section>
      )}
    </main>
  );
}

export default Predictions;
