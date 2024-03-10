import { Typography, TypographyVariant } from '@mui/material';
import React from 'react';
import { HStack } from '@components/mui-stacks.tsx';
import Box from '@mui/material/Box';

export function DemoText({
  variant,
  children,
}: {
  variant: TypographyVariant;
  children?: React.ReactNode;
}) {
  return (
    <HStack hAlign={'leading'}>
      <Box
        sx={{
          width: 120,
          flexShrink: 0,
        }}
      >
        <Typography
          component={'div'}
          variant={variant}
          display="block"
          gutterBottom
          fontWeight={'bolder'}
        >
          {variant}
        </Typography>
      </Box>
      <Typography
        component={'div'}
        variant={variant}
        display="block"
        gutterBottom
      >
        {children}
      </Typography>
    </HStack>
  );
}
