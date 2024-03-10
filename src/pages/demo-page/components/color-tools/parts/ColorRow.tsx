import { HStack } from '@components/mui-stacks.tsx';
import { Typography } from '@mui/material';
import { useState } from 'react';
import InteractiveSwatch from '@pages/demo-page/components/color-tools/parts/InteractiveSwatch.tsx';

interface ColorRowProps {
  name: string;
  colors: string[];
}
export default function ColorRow(props: ColorRowProps) {
  const { name, colors } = props;

  const [lightColor, setLightColor] = useState<string>(colors[0]);
  const [darkColor, setDarkColor] = useState<string>(colors[1] ?? colors[0]);

  return (
    <HStack hAlign={'leading'} spacing={0.5}>
      <HStack hAlign={'leading'} spacing={0.1}>
        <InteractiveSwatch color={lightColor} onClick={setLightColor} />
        <InteractiveSwatch color={darkColor} onClick={setDarkColor} />
      </HStack>
      <Typography variant={'body2'}>{name}</Typography>
    </HStack>
  );
}
