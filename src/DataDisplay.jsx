import React, { useEffect, useState } from 'react';

function DataDisplay({ source }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let url = '';
      if (source === 'countries') {
        url = 'https://restcountries.com/v3.1/all';
      } else if (source === 'weather') {
        const city = 'Oslo';
        const apiKey = 'DIN_API_NØKKEL'; // Sett inn din egen nøkkel
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      } else if (source === 'cats') {
        url = 'https://api.thecatapi.com/v1/images/search';
      }

      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Feil ved henting av data:', error);
      }
    }

    fetchData();
  }, [source]);

  if (!data) return <p>Laster data...</p>;

  return (
    <div>
      <h2>Data fra {source}</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default DataDisplay;
