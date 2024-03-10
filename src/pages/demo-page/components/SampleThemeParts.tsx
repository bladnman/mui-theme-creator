import Background from '@components/Background.tsx';
import { HStack, VStack } from '@components/mui-stacks.tsx';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { DemoType } from '@pages/demo-page/components/DemoType.tsx';
import { DemoCard } from '@pages/demo-page/components/DemoCard.tsx';

export function SampleThemeParts() {
  return (
    <Background>
      <VStack hAlign={'leading'}>
        <HStack spacing={3}>
          <VStack hAlign={'leading'}>
            <AppBar position="static" elevation={0}>
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Demo Appbar
                </Typography>
                <Button color="inherit">Example...</Button>
              </Toolbar>
            </AppBar>

            {/*  B O D Y  */}
            <VStack sx={{ px: 3, py: 3 }} spacing={3}>
              <VStack>
                <Typography>
                  If you wanted to buy a boat from us this is the best chance!
                </Typography>
                <HStack>
                  <Button variant={'text'}>Buy NOW</Button>
                  <Button variant={'outlined'}>Buy NOW</Button>
                  <Button variant={'contained'}>Buy NOW</Button>
                </HStack>
              </VStack>

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
