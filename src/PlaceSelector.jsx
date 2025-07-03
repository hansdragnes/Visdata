import React from 'react';

function PlaceSelector({ onSelect }) {
  return (
    <select onChange={(e) => onSelect(e.target.value)} defaultValue="">
      <option value="" disabled>Velg et sted</option>
      <option value="place">Stedsregister (dummyjson)</option>
    </select>
  );
}

export default PlaceSelector;