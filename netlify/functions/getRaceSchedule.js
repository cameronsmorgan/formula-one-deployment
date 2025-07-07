export async function handler(event) {
  const season = event.queryStringParameters.season;

  try {
    const response = await fetch(`https://ergast.com/api/f1/${season}.json`);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data.MRData.RaceTable.Races),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: `Failed to fetch schedule: ${error.message}` }),
    };
  }
}