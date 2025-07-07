import fetch from 'node-fetch';


export async function handler(event) {
  const season = event.queryStringParameters.season;

  if (!season) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing season parameter' }),
    };
  }

  try {
    const response = await fetch(`https://ergast.com/api/f1/${season}.json`);
    const data = await response.json();

    const races = data?.MRData?.RaceTable?.Races || [];

    return {
      statusCode: 200,
      body: JSON.stringify(races),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: `Failed to fetch schedule: ${error.message}` }),
    };
  }
}