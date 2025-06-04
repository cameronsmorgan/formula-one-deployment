import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RaceSelector from '../../components/RaceSelector';
import RaceResultsTable from '../../components/RaceResultsTable';
import { fetchRaceSchedule, fetchRaceResults } from '../../data/ergastAPI';

function YearArchivePage() {
  const { year } = useParams();
  
  const [schedule, setSchedule] = useState([]);
  const [selectedRound, setSelectedRound] = useState('');
  const [raceData, setRaceData] = useState(null);

  useEffect(() => {
    const loadSchedule = async () => {
      const races = await fetchRaceSchedule(year);
      setSchedule(races);
    };
    loadSchedule();
  }, [year]);

  useEffect(() => {
    const loadRaceData = async () => {
      if (selectedRound) {
        const data = await fetchRaceResults(year, selectedRound);
        setRaceData(data);
      }
    };
    loadRaceData();
  }, [selectedRound, year]);

  return (
    <main className="year-archive-page" style={{ paddingTop: '100px' }}>
      <header>
        <h1>Archive for {year}</h1>
      </header>
      <section>
        <RaceSelector races={schedule} onSelect={setSelectedRound} />
      </section>
      {raceData && (
        <section>
          <RaceResultsTable race={raceData} />
        </section>
      )}
    </main>
  );
}

export default YearArchivePage;
