import { Chip } from '@mui/material';

interface SwatchProps {
  color: string;
}
export default function ChipSwatch({ color }: SwatchProps) {
  return <Chip size={'small'} label={color} sx={{ backgroundColor: color }} />;
}
