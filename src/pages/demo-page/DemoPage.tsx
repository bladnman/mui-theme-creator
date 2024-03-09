import { VStack } from '@components/mui-stacks.tsx';
import { DarkTheme, LightTheme } from '@theme/AppThemeProvider.tsx';
import { SampleThemeParts } from '@pages/demo-page/components/SampleThemeParts.tsx';

export default function DemoPage() {
  return (
    <VStack vFill sx={{ padding: 3 }}>
      <DarkTheme>
        <SampleThemeParts />
      </DarkTheme>
      <LightTheme>
        <SampleThemeParts />
      </LightTheme>
    </VStack>
  );
}
