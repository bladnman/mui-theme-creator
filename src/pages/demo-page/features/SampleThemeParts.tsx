import Background from '@components/Background.tsx';
import { HStack, VStack } from '@components/mui-stacks.tsx';
import { DemoType } from '@pages/demo-page/components/demo-type/DemoType.tsx';
import { DemoCard } from '@pages/demo-page/components/demo-card/DemoCard.tsx';
import { DemoAppBar } from '@pages/demo-page/components/demo-app-bar/DemoAppBar.tsx';
import DemoButtons from '@pages/demo-page/components/demo-buttons/DemoButtons.tsx';

export function SampleThemeParts() {
  return (
    <Background>
      <VStack hAlign={'leading'}>
        <HStack spacing={3}>
          <VStack hAlign={'leading'}>
            <DemoAppBar />

            {/*  B O D Y  */}
            <VStack sx={{ px: 3, py: 3 }} spacing={3}>
              <DemoButtons />

              <VStack
                sx={{
                  maxHeight: '15em',
                  overflowY: 'scroll',
                  border: '1px solid',
                  borderColor: 'fg.light',
                  borderRadius: '5px',
                  padding: '10px',
                }}
              >
                <DemoType />
              </VStack>

              <DemoCard />
            </VStack>
          </VStack>
        </HStack>
      </VStack>
    </Background>
  );
}
