const BASE_URL = 'https://api.jolpi.ca/ergast/f1'; // Using Jolpica replacement

export const fetchRaceSchedule = async (season) => {
  try {
    const response = await fetch(`${BASE_URL}/${season}.json`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const races = data?.MRData?.RaceTable?.Races;

    if (!Array.isArray(races)) {
      console.log('Unexpected response structure:', data);
      throw new Error('Schedule data is not an array');
    }

    return races;
  } catch (error) {
    console.error(`Error fetching race schedule for ${season}:`, error);
    return [];
  }
};

export const fetchRaceResults = async (season, round) => {
  try {
    const response = await fetch(`${BASE_URL}/${season}/${round}/results.json`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const race = data?.MRData?.RaceTable?.Races?.[0];

    if (!race) {
      console.log('Unexpected race result structure:', data);
    }

    return race || null;
  } catch (error) {
    console.error(`Error fetching race results for ${season} round ${round}:`, error);
    return null;
  }
};