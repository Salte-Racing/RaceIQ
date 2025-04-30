import axios from 'axios';

describe('API Smoke Tests', () => {
  it('GET /status returns 200', async () => {
    const apiUrl = process.env.API_URL || 'http://localhost:3000';
    const response = await axios.get(apiUrl);
    expect(response.status).toBe(200);
    expect(response.data.message).toBe('OK');
  });
});