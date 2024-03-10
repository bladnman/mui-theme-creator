import Box from '@mui/material/Box';

interface SwatchProps {
  color: string;
  size: number;
  onClick?: (color: string) => void;
}
export default function Swatch({ color, size, onClick }: SwatchProps) {
  return (
    <Box
      style={{
        width: size,
        height: size,
        flexShrink: 0,
        backgroundColor: color,
        cursor: 'pointer',
      }}
      onClick={() => onClick?.(color)}
    />
  );
}
