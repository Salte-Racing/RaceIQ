import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ApiResponse {
  message: string;
  environment: string;
}

function App() {
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          process.env.REACT_APP_API_URL || 'http://localhost:3000'
        );
        setApiResponse(response.data);
      } catch (err) {
        setError('Failed to fetch data from API');
        console.error('Error:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Your App</h1>
        {apiResponse && (
          <div>
            <p>{apiResponse.message}</p>
            <p>Environment: {apiResponse.environment}</p>
          </div>
        )}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
    </div>
  );
}

export default App;
