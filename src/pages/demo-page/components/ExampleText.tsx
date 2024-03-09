import { Typography, TypographyVariant } from '@mui/material';
import React from 'react';
import { HStack } from '@components/mui-stacks.tsx';
import Box from '@mui/material/Box';

export function ExampleText({
  variant,
  children,
}: {
  variant: TypographyVariant;
  children?: React.ReactNode;
}) {
  return (
    <Typography variant={variant} gutterBottom>
      <HStack hAlign={'leading'}>
        <Box
          sx={{
            width: 120,
            flexShrink: 0,
          }}
        >
          <Typography
            variant={variant}
            display="block"
            gutterBottom
            fontWeight={'bolder'}
          >
            {variant}
          </Typography>
        </Box>
        <Typography variant={variant} display="block" gutterBottom>
          {children}
        </Typography>
      </HStack>
    </Typography>
  );
}
