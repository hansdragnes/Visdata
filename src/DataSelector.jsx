import React from 'react';

const DataSelector =({ onSelect }) =>{
  return (
    <select onChange={(e) => onSelect(e.target.value)} defaultValue="">
      <option value="" disabled>Velg en datakilde</option>
      <option value="carts">Dummyjson på nett</option>
      <option value="places">Lokal fil</option>
      <option value="company">Enhetsregisteret</option>

    </select>
  );
}

export default DataSelector;
