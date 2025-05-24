import axios from 'axios';
import https from 'https';

describe('API Smoke Tests', () => {
  it('GET /cars returns 200', async () => {
    const apiUrl = process.env.API_URL || 'http://localhost:3000';

    const agent = new https.Agent({ keepAlive: false });

    const response = await axios.get(`${apiUrl}/cars`, { httpsAgent: agent });

    expect(response.status).toBe(200);
    expect(response.data.message).toBe('Hello from Lambda!');

    agent.destroy(); // optional but helpful for aggressive cleanup
  });
});
