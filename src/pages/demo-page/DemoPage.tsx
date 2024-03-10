import { HStack, VStack } from '@components/mui-stacks.tsx';
import { StoreProvider } from '@components/Store.tsx';
import { DarkTheme, LightTheme } from '@theme/theme.tsx';
import ColorTools from '@pages/demo-page/components/color-tools/ColorTools.tsx';
import { SampleThemeParts } from '@pages/demo-page/features/SampleThemeParts.tsx';

export default function DemoPage() {
  return (
    <StoreProvider>
      <HStack spacing={1} vAlign={'leading'}>
        {/*  D E M O  */}
        <VStack vFill sx={{ padding: 3 }}>
          <LightTheme>
            <SampleThemeParts />
          </LightTheme>

          <DarkTheme>
            <SampleThemeParts />
          </DarkTheme>
        </VStack>

        {/*  T O O L S  */}
        <ColorTools />
      </HStack>
    </StoreProvider>
  );
}
