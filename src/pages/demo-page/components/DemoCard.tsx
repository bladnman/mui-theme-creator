import { Card, Typography } from '@mui/material';
import { VStack } from '@components/mui-stacks.tsx';
import Box from '@mui/material/Box';

export function DemoCard() {
  return (
    <Card
      sx={{
        padding: 3,
        minWidth: 200,
        mx: 4,
      }}
    >
      <VStack spacing={1}>
        <Typography>Welcome to my theme</Typography>
        <Box
          sx={{
            backgroundColor: 'bg.light',
            color: 'appColor.main',
            borderColor: 'appColor.main',
            borderStyle: 'solid',
            borderWidth: 2,
            borderRadius: 2,
            padding: 3,
          }}
        >
          appColor.main
        </Box>
        {['primary', 'secondary', 'warning', 'error', 'info', 'success'].map(
          (color) => (
            <Typography sx={{ color: `${color}.main` }} key={color}>
              {color}.main
            </Typography>
          ),
        )}
      </VStack>
    </Card>
  );
}
