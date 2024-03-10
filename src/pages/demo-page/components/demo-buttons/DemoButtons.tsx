import { Button, Tooltip, Typography } from '@mui/material';
import { HStack, VStack } from '@components/mui-stacks.tsx';

export default function DemoButtons() {
  const renderColorButtons = (color: string, idx: number) => {
    const label = 'Button';
    return (
      <HStack key={idx}>
        <Tooltip
          title={"<Button color={'" + color + "'} variant={'contained'}>"}
        >
          {/*@ts-expect-error - forcing a color string*/}
          <Button color={color} variant={'contained'}>
            {label}
          </Button>
        </Tooltip>

        <Tooltip
          title={"<Button color={'" + color + "'} variant={'outlined'}>"}
        >
          {/*@ts-expect-error - forcing a color string*/}
          <Button color={color} variant={'outlined'}>
            {label}
          </Button>
        </Tooltip>

        <Tooltip title={"<Button color={'" + color + "'} variant={'text'}>"}>
          {/*@ts-expect-error - forcing a color string*/}
          <Button color={color} variant={'text'}>
            {label}
          </Button>
        </Tooltip>

        <Typography variant={'caption'}>
          color: <b>{color}</b>
        </Typography>
      </HStack>
    );
  };
  return (
    <VStack hAlign={'leading'}>
      {[
        'primary',
        'secondary',
        'appColor',
        'warning',
        'error',
        'info',
        'success',
      ].map((color, idx) => renderColorButtons(color, idx))}
    </VStack>
  );
}
