import React from 'react';

import { Box, VStack } from "@navikt/ds-react";

const Example = () => {
  return (
    <VStack gap="4">
      <Box padding="4" background="surface-alt-3-subtle">
        Boks 1;
      </Box>
      <Box padding="4" background="surface-info-subtle">
        Box 2;
      </Box>
    </VStack>
  );
};

export default Example;