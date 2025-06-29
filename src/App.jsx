import React, { useState } from 'react';
import DataSelector from './DataSelector';
import DataDisplay from './DataDisplay';
import PlaceSelector from './PlaceSelector';

function App() {
  const [source, setSource] = useState('');

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Velg datakilde</h1>
     
      <DataSelector onSelect={setSource} />
      {source && <DataDisplay source={source} />}
    </div>
  );
}

export default App;
