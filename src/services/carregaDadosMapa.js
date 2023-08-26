import axios from 'axios';

const API_KEY = '438551F6-27DB-11EE-A77F-42010A800009';

const SENSOR_URLS = [
  'https://api.purpleair.com/v1/sensors/161261?fields=name%2C%20latitude%2C%20longitude%2C%20pm2.5',
  'https://api.purpleair.com/v1/sensors/161259?fields=name%2C%20latitude%2C%20longitude%2C%20pm2.5',
  'https://api.purpleair.com/v1/sensors/161279?fields=name%2C%20latitude%2C%20longitude%2C%20pm2.5',
  'https://api.purpleair.com/v1/sensors/161291?fields=name%2C%20latitude%2C%20longitude%2C%20pm2.5',
  'https://api.purpleair.com/v1/sensors/165061?fields=name%2C%20latitude%2C%20longitude%2C%20pm2.5',
  'https://api.purpleair.com/v1/sensors/165063?fields=name%2C%20latitude%2C%20longitude%2C%20pm2.5',
  'https://api.purpleair.com/v1/sensors/165067?fields=name%2C%20latitude%2C%20longitude%2C%20pm2.5',
  'https://api.purpleair.com/v1/sensors/31509?fields=name%2C%20latitude%2C%20longitude%2C%20pm2.5',
];

export const fetchAirQualityData = async () => {
  try {
    const responses = await axios.all(
      SENSOR_URLS.map((url) =>
        axios.get(url, {
          headers: {
            'X-API-Key': API_KEY,
          },
        })
      )
    );

    // Extrair os dados de cada resposta
    const sensorData = responses.map((response) => response.data.sensor);
    return sensorData;
  } catch (error) {
    console.error('Erro ao obter os dados da API do PurpleAir:', error);
    throw error;
  }
};
