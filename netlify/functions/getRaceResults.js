export async function handler(event) {
  const season = event.queryStringParameters.season;
  const round = event.queryStringParameters.round;

  try {
    const response = await fetch(`https://ergast.com/api/f1/${season}/${round}/results.json`);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data.MRData.RaceTable.Races[0]),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: `Failed to fetch race results: ${error.message}` }),
    };
  }
}
