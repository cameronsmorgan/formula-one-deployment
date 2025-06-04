const fetchRaceSchedule = async () => {
  try {
    const response = await fetch('https://f1api.dev/api/2025');
    const data = await response.json();

    return data.races.map((race) => {
      const dateStr = race.schedule?.race?.date;
      const timeStr = race.schedule?.race?.time;
      const dateTime = new Date(`${dateStr}T${timeStr}`);

      return {
        id: race.id,
        raceName: race.raceName,
        circuitName: race.circuit?.circuitName,
        country: race.circuit?.country,
        date: dateStr,
        time: timeStr,
        dateTime,
      };
    });
  } catch (error) {
    console.error('Failed to fetch race schedule:', error);
    return [];
  }
};

export default fetchRaceSchedule;