
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Schedule.css'


const RaceCalendar = ({ races, calendarDate, onDateChange }) => {
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const match = races.find(  //checks if each tile matches a race day
        (race) => race.dateTime.toDateString() === date.toDateString()
      );
      return match ? 'race-day' : null; //returns this class if it is a race day
    }
    return null;
  };

  return (
    <section className="calendar-column" aria-label="Calendar">
      <h2 id="calendar-title">Race Calendar</h2>
      <Calendar
        onChange={onDateChange}
        value={calendarDate}
        tileClassName={tileClassName}
        aria-label="F1 race calendar for 2025"
      />
    </section>
  );
};

export default RaceCalendar;