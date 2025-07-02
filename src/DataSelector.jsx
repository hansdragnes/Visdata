import React from 'react';

const DataSelector =({ onSelect }) =>{
  return (
    <select onChange={(e) => onSelect(e.target.value)} defaultValue="">
      <option value="" disabled>Velg en datakilde</option>
      <option value="carts">Handlekurv fra dummyjson på nett</option>
      <option value="places">Steder fra lokal fil</option>
    </select>
  );
}

export default DataSelector;
