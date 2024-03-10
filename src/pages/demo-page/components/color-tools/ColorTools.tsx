import { useStoreContext } from '@components/Store.tsx';
import ColorRow from '@pages/demo-page/components/color-tools/parts/ColorRow.tsx';
import { VStack } from '@components/mui-stacks.tsx';

export default function ColorTools() {
  const { colors } = useStoreContext();
  console.log('ColorTools', colors);
  const renderColorRows = () => {
    return Object.keys(colors).map((key: string) => {
      const colorArray = colors[key];
      return <ColorRow key={key} name={key} colors={colorArray} />;
    });
  };
  return (
    <VStack hAlign={'leading'} sx={{ mx: 2 }} spacing={1}>
      {renderColorRows()}
    </VStack>
  );
}
