import React from 'react';

function PlaceSelector({ onSelect }) {
  return (
    <select onChange={(e) => onSelect(e.target.value)} defaultValue="">
      <option value="" disabled>Velg en datakilde</option>
      <option value="carts">Handlekurv (dummyjson)</option>
    </select>
  );
}

export default PlaceSelector;