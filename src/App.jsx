import React, { useState } from 'react';
import DataSelector from './DataSelector';
import DataDisplay from './DataDisplay';
import "@navikt/ds-css";
import { Button } from "@navikt/ds-react";
import { Heading, HStack, GuidePanel } from "@navikt/ds-react";
import DataEnhetsregister from './DataEnhetsregister'; 




function App() {
  const [source, setSource] = useState('');

  return (
    <div style={{ padding: '2rem' }}>
      
      <GuidePanel>
        <HStack gap="2" justify = "left">
          <Heading size="small">Velg en datakilde</Heading>
          <DataSelector onSelect={setSource} />
          <Button Nullstill
            variant="secondary"
            onClick={() => setSource('')}
            style={{ marginTop: '1rem' }}
          >Nullstill</Button>
        </HStack>
    
        {source==="carts" && source && <DataDisplay source={source} />}

        <DataEnhetsregister source={source} />
      </GuidePanel>

    </div>
  );
  
}

export default App;
