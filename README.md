# MUI Theme Creator

This is a simple tool to create a Material-UI theme. 
It is based on the [Material-UI Theme](https://material-ui.com/customization/theming/) documentation.

This tool is a simple web page that allows you to change the Material-UI theme and see the changes in real time.
You can then copy the values and use them in the `theme.tsx` file of your project.

### Note:
The theme that is created here is not specific only to MUI. The idea here
is to create a theme that can be used in any project in many languages.

The resulting color values that are generated are in the following formats:
```javascript
const THEME_COLORS = {
  "fg": ["#ffffff", '#000000'],
    ...
}
```
The idea is to create color-pairs. The first color is used in **LIGHT** mode
and the second color is used in **DARK** mode.