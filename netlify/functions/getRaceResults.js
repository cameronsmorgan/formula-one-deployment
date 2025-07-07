import fetch from 'node-fetch';


export async function handler(event) {
  const { season, round } = event.queryStringParameters;

  if (!season || !round) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing season or round parameter' }),
    };
  }

  try {
    const response = await fetch(`https://ergast.com/api/f1/${season}/${round}/results.json`);
    const data = await response.json();

    const race = data?.MRData?.RaceTable?.Races?.[0];

    return {
      statusCode: 200,
      body: JSON.stringify(race || null),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: `Failed to fetch race results: ${error.message}` }),
    };
  }
}
