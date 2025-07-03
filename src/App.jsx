import React, { useState } from 'react';
import DataSelector from './DataSelector';
import DataDisplay from './DataDisplay';
import "@navikt/ds-css";
import { Button } from "@navikt/ds-react";
import { HStack, GuidePanel } from "@navikt/ds-react";
import Example from './Box'; 



function App() {
  const [source, setSource] = useState('');

  return (
    <div style={{ padding: '2rem' }}>
      
      <GuidePanel>
        <HStack gap="2" justify = "left">
          Velg en datakilde
          <DataSelector onSelect={setSource} />
          <Button
            variant="secondary"
            onClick={() => setSource('')}
            style={{ marginTop: '1rem' }}
          />
        </HStack>  
        <Example/>
    
        {source && <DataDisplay source={source} />}

        
        
      </GuidePanel>

    </div>
  );
  
}

export default App;
