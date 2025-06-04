import React from 'react';
import driverProfiles from '../../data/driverProfiles';
import raceResults from '../../data/raceResults';

function PredictionForm({
  mode,
  predictions,
  selectedRace,
  submittedPredictions,
  handleSelectChange,
  handleSubmit,
}) {
  
  const getPredictionClass = (position, prediction) => {
  const correctDriver = raceResults[selectedRace]?.[position];


 // console.log(`Position: ${position}`);
 // console.log(`Prediction: "${prediction}"`);
 // console.log(`Correct: "${correctDriver}"`);
  

  if (!correctDriver) return '';
  return prediction.trim() === correctDriver.trim() ? 'correct' : 'incorrect';
};

  return (
    <form className="predictions-form" onSubmit={(e) => e.preventDefault()}>
      <section>
        <legend>Podium Predictions</legend>

        {['first', 'second', 'third'].map((position) => (  //iterates over each position
          <div key={position} className="dropdown-group">
            <label htmlFor={`position-${position}`}>{position.toUpperCase()}</label>
            <select
              id={`position-${position}`}
              value={predictions[position]}
              onChange={(e) => handleSelectChange(e, position)}
              className={
                mode === 'past' && predictions[position]  //appliesstyles 
                  ? getPredictionClass(position, predictions[position])
                  : ''
              }
              disabled={mode === 'past'}  //prevents changing predictions after the race
            >
              <option value="">-- Select Driver --</option>
              {driverProfiles.map((driver) => (
                <option key={driver.name} value={driver.name}>
                  {driver.name} - {driver.team}
                </option>
              ))}
            </select>
          </div>
        ))}

        {mode === 'upcoming' && (
          <button
            type="button"
            className="submit-btn"
            onClick={handleSubmit}
            disabled={!!submittedPredictions[selectedRace]}  //disable button is prediction already submitted
          >
            {submittedPredictions[selectedRace] ? 'Submitted' : 'Submit Predictions'}
          </button>
        )}
      </section>
    </form>
  );
}

export default PredictionForm;
