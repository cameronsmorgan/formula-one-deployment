const BASE_FUNCTION_URL = '/.netlify/functions';

/*
 * fetches the race schedule for a given season.
 * param {string} season - The season year (e.g., '2019').
 * returns {Array} - Array of race objects.
 */
export const fetchRaceSchedule = async (season) => {
  try {
    const response = await fetch(`${BASE_FUNCTION_URL}/getRaceSchedule?season=${season}`);
    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("Schedule data is not an array");
    }

    return data;
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
    const response = await fetch(`${BASE_FUNCTION_URL}/getRaceResults?season=${season}&round=${round}`);
    const data = await response.json();

    if (!data || !data.Results) {
      throw new Error("Invalid race data");
    }

    return data;
  } catch (error) {
    console.error(`Error fetching race results for ${season} round ${round}:`, error);
    return null;
  }
};