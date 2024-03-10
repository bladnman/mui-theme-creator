import { HStack, VStack } from '@components/mui-stacks.tsx';
import { SampleThemeParts } from '@pages/demo-page/components/SampleThemeParts.tsx';
import { StoreProvider } from '@components/Store.tsx';
import { DarkTheme, LightTheme } from '@theme/theme.tsx';
import ColorTools from '@pages/demo-page/components/color-tools/ColorTools.tsx';

export default function DemoPage() {
  return (
    <StoreProvider>
      <HStack spacing={1}>
        {/*  D E M O  */}
        <VStack vFill sx={{ padding: 3 }}>
          <DarkTheme>
            <SampleThemeParts />
          </DarkTheme>
          <LightTheme>
            <SampleThemeParts />
          </LightTheme>
        </VStack>

        {/*  T O O L S  */}
        <ColorTools />
      </HStack>
    </StoreProvider>
  );
}
