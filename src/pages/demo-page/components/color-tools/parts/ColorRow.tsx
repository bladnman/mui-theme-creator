import { HStack } from '@components/mui-stacks.tsx';
import { Typography } from '@mui/material';
import InteractiveSwatch from '@pages/demo-page/components/color-tools/parts/InteractiveSwatch.tsx';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
interface ColorRowProps {
  name: string;
  colorArray: string[];
  onChange: (name: string, colorArray: string[]) => void;
}
export default function ColorRow({
  name,
  colorArray,
  onChange,
}: ColorRowProps) {
  const handleColorChange = (color: string, index: number) => {
    const oldColors = [...colorArray];
    const newColors = [...colorArray];
    newColors[index] = color;

    // match change if colors are the same
    if (index === 0 && oldColors[0] === oldColors[1]) {
      newColors[1] = color;
    } else if (index === 1 && oldColors[0] === oldColors[1]) {
      newColors[0] = color;
    }

    onChange(name, newColors);
  };

  return (
    <HStack hAlign={'leading'} spacing={0.5}>
      <HStack hAlign={'leading'} spacing={0}>
        <InteractiveSwatch
          color={colorArray[0]}
          onClick={(color) => handleColorChange(color, 0)}
        />

        <HStack spacing={'5px'} sx={{ px: '5px' }}>
          <HStack
            sx={{
              width: '13px',
              opacity: 0.5,
              overflow: 'hidden',
            }}
            onClick={() => {
              colorArray[0] = colorArray[1];
              handleColorChange(colorArray[1], 0);
            }}
          >
            <ChevronLeftIcon />
          </HStack>
          <HStack
            sx={{
              width: '13px',
              opacity: 0.5,
              overflow: 'hidden',
            }}
            onClick={() => {
              colorArray[1] = colorArray[0];
              handleColorChange(colorArray[1], 0);
            }}
          >
            <ChevronRightIcon />
          </HStack>
        </HStack>

        <InteractiveSwatch
          color={colorArray[1] ?? colorArray[0]}
          onClick={(color) => handleColorChange(color, 1)}
        />
      </HStack>
      <Typography variant={'body2'}>{name}</Typography>
    </HStack>
  );
}
