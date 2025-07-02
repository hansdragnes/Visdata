import React from 'react';

import { Box, VStack } from "@navikt/ds-react";

const Example = () => {
  return (
    <VStack gap="4">
      <Box padding="4" background="surface-alt-3-subtle">
        Denne boksen har background=&quot;surface-alt-3-subtle&quot;
      </Box>
      <Box padding="4" background="surface-info-subtle">
        Denne boksen har background=&quot;surface-info-subtle&quot;
      </Box>
      <Box padding="4" background="surface-success-subtle">
        Denne boksen har background=&quot;surface-success-subtle&quot;
      </Box>
    </VStack>
  );
};

export default Example;