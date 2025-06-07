import React from 'react';

function DataSelector({ onSelect }) {
  return (
    <select onChange={(e) => onSelect(e.target.value)} defaultValue="">
      <option value="" disabled>Velg en datakilde</option>
      <option value="countries">Land (REST Countries)</option>
      <option value="weather">Vær (OpenWeatherMap)</option>
      <option value="cats">Katter (The Cat API)</option>
    </select>
  );
}

export default DataSelector;
