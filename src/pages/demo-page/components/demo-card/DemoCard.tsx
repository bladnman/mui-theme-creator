import { Card, Typography } from '@mui/material';
import { HStack, VStack } from '@components/mui-stacks.tsx';
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
        <Typography variant={'h5'}>Demo Card</Typography>
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

        <HStack>
          {['primary', 'secondary'].map((color) => (
            <Typography sx={{ color: `${color}.main` }} key={color}>
              {color}.main
            </Typography>
          ))}
        </HStack>
        <HStack>
          {['warning', 'error', 'info', 'success'].map((color) => (
            <Typography sx={{ color: `${color}.main` }} key={color}>
              {color}.main
            </Typography>
          ))}
        </HStack>
      </VStack>
    </Card>
  );
}
