import PopupState, { bindPopover, bindTrigger } from 'material-ui-popup-state';
import Box from '@mui/material/Box';
import Swatch from '@pages/demo-page/components/color-tools/parts/Swatch.tsx';
import { Popover } from '@mui/material';
import { ChromePicker, ColorResult } from 'react-color';
import { LightTheme } from '@theme/theme.tsx';
interface InteractiveSwatchProps {
  color: string;
  onClick: (color: string) => void;
}
export default function InteractiveSwatch({
  color,
  onClick,
}: InteractiveSwatchProps) {
  const swatchSize = 15;
  const handleChange = (color: ColorResult /*, event*/) => {
    onClick(color.hex);
  };
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <>
          <Box {...bindTrigger(popupState)}>
            <Swatch color={color} size={swatchSize} />
          </Box>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          >
            <Box
              sx={{
                [`input[id*="rc-editable-input-"]`]: {
                  backgroundColor: '#fff',
                },
              }}
            >
              <ChromePicker color={color} onChange={handleChange} />
            </Box>
          </Popover>
        </>
      )}
    </PopupState>
  );
}
