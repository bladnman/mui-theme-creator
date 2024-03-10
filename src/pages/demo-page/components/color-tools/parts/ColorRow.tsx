import { HStack } from '@components/mui-stacks.tsx';
import { Typography } from '@mui/material';
import InteractiveSwatch from '@pages/demo-page/components/color-tools/parts/InteractiveSwatch.tsx';
import LinkIcon from '@mui/icons-material/Link';
import LinkOffIcon from '@mui/icons-material/LinkOff';

import { useState } from 'react';
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
  const [isLocked, setIsLocked] = useState(false);
  const handleLockChange = () => {
    const newIsLocked = !isLocked;
    setIsLocked(newIsLocked);

    if (newIsLocked) {
      colorArray[1] = colorArray[0];
      onChange(name, colorArray);
    }
  };
  const handleColorChange = (color: string, index: number) => {
    const newColors = [...colorArray];
    newColors[index] = color;

    // match change if we are locked
    if (isLocked) {
      if (index === 0) {
        newColors[1] = color;
      } else {
        newColors[0] = color;
      }
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

        <HStack
          sx={{
            opacity: isLocked ? 1.0 : 0.5,
            px: 0.5,
          }}
          onClick={handleLockChange}
        >
          {isLocked ? (
            <LinkIcon fontSize={'small'} />
          ) : (
            <LinkOffIcon fontSize={'small'} />
          )}
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
