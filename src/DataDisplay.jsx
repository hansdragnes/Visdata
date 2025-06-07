
const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;
const dogApiKey = import.meta.env.VITE_DOG_API_KEY;


import React, { useEffect, useState } from 'react';

function DataDisplay({ source }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let url = '';
      if (source === 'carts') {
        url = 'https://dummyjson.com/carts/';
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
