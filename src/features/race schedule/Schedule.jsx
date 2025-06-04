
import React, { useState, useEffect } from 'react';
import './Schedule.css';
import Countdown from './Countdown';
import RaceCard from './RaceCard';
import RaceCalendar from './RaceCalendar';

function Schedule() {
  const [races, setRaces] = useState([]);
  const [selectedRace, setSelectedRace] = useState(null);
  const [nextRace, setNextRace] = useState(null);
  const [calendarDate, setCalendarDate] = useState(new Date());

  useEffect(() => {
    const fetchRaceData = async () => {
      try {
        const response = await fetch('https://f1api.dev/api/2025');
        const data = await response.json();
        //console.log(data)
        const formattedRaces = data.races.map((race) => {
          const dateStr = race.schedule?.race?.date;
          const timeStr = race.schedule?.race?.time;
          const dateTime = new Date(`${dateStr}T${timeStr}`);
         // console.log(race)
          return {
            raceName: race.raceName,
            circuitName: race.circuit?.circuitName,
            country: race.circuit?.country,
            date: dateStr,
            time: timeStr,
            dateTime,
          };
        });

        const now = new Date();
        const upcoming = formattedRaces  //filters upcoming races to soonest
          .filter((race) => race.dateTime > now)
          .sort((a, b) => a.dateTime - b.dateTime)[0];

        setRaces(formattedRaces);
        setNextRace(upcoming);
        setSelectedRace(upcoming);
        setCalendarDate(upcoming.dateTime);
      } catch (error) {
        console.error('Failed:', error);
      }
    };

    fetchRaceData();
  }, []);

  const handleDateChange = (date) => {
    setCalendarDate(date);
    const match = races.find(
      (race) => race.dateTime.toDateString() === date.toDateString()
    );
    if (match) {
      setSelectedRace(match);
    }
  };

  return (
    <main className="schedule-wrapper">
      {nextRace && <Countdown targetDate={nextRace.dateTime} />}

      <section className="schedule-main">
        {/* LEFT COLUMN – RACE CARD */}
        <section className="race-details-column" aria-label="Race Details">
          <header>
            <h2 id="race-details-title">Race Details</h2>
          </header>
          <RaceCard race={selectedRace} />
        </section>

        {/* RIGHT COLUMN – CALENDAR */}
        <RaceCalendar
          races={races}
          calendarDate={calendarDate}
          onDateChange={handleDateChange}
        />
      </section>
    </main>
  );
}

export default Schedule;