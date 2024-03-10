import Box from '@mui/material/Box';
import { DemoText } from '@pages/demo-page/components/demo-type/parts/DemoText.tsx';

export function DemoType() {
  return (
    <Box sx={{ width: '100%' }}>
      {['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map((variant) => (
        // @ts-expect-error - TS2322: Type 'string' is not assignable to type 'TypographyVariant'.
        <DemoText variant={variant} key={variant}>
          Heading
        </DemoText>
      ))}

      {['subtitle1', 'subtitle2'].map((variant) => (
        // @ts-expect-error - TS2322: Type 'string' is not assignable to type 'TypographyVariant'.
        <DemoText variant={variant} key={variant}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur
        </DemoText>
      ))}

      {['body1', 'body2'].map((variant) => (
        // @ts-expect-error - TS2322: Type 'string' is not assignable to type 'TypographyVariant'.
        <DemoText variant={variant} key={variant}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </DemoText>
      ))}

      {['button', 'caption', 'overline'].map((variant) => (
        // @ts-expect-error - TS2322: Type 'string' is not assignable to type 'TypographyVariant'.
        <DemoText variant={variant} key={variant}>
          Text
        </DemoText>
      ))}
    </Box>
  );
}
