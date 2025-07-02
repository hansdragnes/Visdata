import React, { useState } from 'react';
import DataSelector from './DataSelector';
import DataDisplay from './DataDisplay';
import "@navikt/ds-css";
import { Button } from "@navikt/ds-react";
import { GuidePanel } from "@navikt/ds-react";




function App() {
  const [source, setSource] = useState('');

  return (
    <div style={{ padding: '2rem' }}>
      
      <GuidePanel>
        Velg en datakilde
        <DataSelector onSelect={setSource} />
        {source && <DataDisplay source={source} />}
      </GuidePanel>
     

    </div>
  );
  
}

export default App;
