import { useStoreContext } from '@components/Store.tsx';
import ColorRow from '@pages/demo-page/components/color-tools/parts/ColorRow.tsx';
import { VStack } from '@components/mui-stacks.tsx';
import CopyToClipboardButton from '@pages/demo-page/components/color-tools/parts/CopyToClipboardButton.tsx';
import { Typography } from '@mui/material';

export default function ColorTools() {
  const { colors, setColors } = useStoreContext();
  const renderColorRows = () => {
    const handleColorChange = (name: string, colorArray: string[]) => {
      colors[name] = colorArray;
      setColors({ ...colors });
    };
    return Object.keys(colors).map((key: string) => {
      const colorArray = colors[key];
      return (
        <ColorRow
          key={key}
          name={key}
          colorArray={colorArray}
          onChange={handleColorChange}
        />
      );
    });
  };
  return (
    <VStack
      hAlign={'leading'}
      sx={{ mx: 2, position: 'sticky', top: '50px' }}
      spacing={1}
    >
      {renderColorRows()}
      <CopyToClipboardButton
        label={'Colors'}
        contentToCopy={JSON.stringify(colors)}
      />
      <Typography>
        To use the colors in your project, you can copy the colors and paste
        them into your{' '}
        <a
          href={
            'https://github.com/bladnman/mui-theme-creator/blob/main/src/theme/theme.tsx'
          }
          target="_blank"
        >
          theme.tsx
        </a>
      </Typography>
    </VStack>
  );
}
