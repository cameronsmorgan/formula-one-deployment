const BASE_URL = 'https://ergast.com/api/f1';

export const fetchRaceSchedule = async (season) => {
  try {
    const response = await fetch(`${BASE_URL}/${season}.json`);
    const data = await response.json();

    const races = data?.MRData?.RaceTable?.Races;

    if (!Array.isArray(races)) {
      throw new Error("Schedule data is not an array");
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
    const data = await response.json();

    return data?.MRData?.RaceTable?.Races[0];
  } catch (error) {
    console.error(`Error fetching race results for ${season} round ${round}:`, error);
    return null;
  }
};
