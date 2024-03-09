import Box from '@mui/material/Box';
import { ExampleText } from '@pages/demo-page/components/ExampleText.tsx';

export function DemoType() {
  return (
    <Box sx={{ width: '100%' }}>
      {['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map((variant) => (
        // @ts-expect-error - TS2322: Type 'string' is not assignable to type 'TypographyVariant'.
        <ExampleText variant={variant}>Heading</ExampleText>
      ))}

      {['subtitle1', 'subtitle2'].map((variant) => (
        // @ts-expect-error - TS2322: Type 'string' is not assignable to type 'TypographyVariant'.
        <ExampleText variant={variant}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur
        </ExampleText>
      ))}

      {['body1', 'body2'].map((variant) => (
        // @ts-expect-error - TS2322: Type 'string' is not assignable to type 'TypographyVariant'.
        <ExampleText variant={variant}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </ExampleText>
      ))}

      {['button', 'caption', 'overline'].map((variant) => (
        // @ts-expect-error - TS2322: Type 'string' is not assignable to type 'TypographyVariant'.
        <ExampleText variant={variant}>Text</ExampleText>
      ))}
    </Box>
  );
}
