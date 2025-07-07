const BASE_URL = 'https://ergast.com/api/f1';

/*
 * fetches the race schedule for a given season.
 * param {string} season - The season year (e.g., '2019').
 * returns {Array} - Array of race objects.
 */
export const fetchRaceSchedule = async (season) => {
  try {
    const response = await fetch(`${BASE_URL}/${season}.json`);
    const data = await response.json();
    return data.MRData.RaceTable.Races;
  } catch (error) {
    console.error(`Error fetching race schedule for ${season}:`, error);
    return [];
  }
};


/*
 * fetches race results for a specific race in a season.
 * param {string} season - The season year.
 * param {string} round - The round number of the race.
 * returns {Object} - Race result object.
 */
export const fetchRaceResults = async (season, round) => {
  try {
    const response = await fetch(`${BASE_URL}/${season}/${round}/results.json`);
    const data = await response.json();
    return data.MRData.RaceTable.Races[0];
  } catch (error) {
    console.error(`Error fetching race results for ${season} round ${round}:`, error);
    return null;
  }
};