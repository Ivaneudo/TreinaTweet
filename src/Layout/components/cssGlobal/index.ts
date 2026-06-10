import { theme } from './theme.js';
import { GlobalStyles } from './globalStyles.js';

export { theme, GlobalStyles };

type MyThemeType = typeof theme;

declare module '@emotion/react' {
  export interface Theme extends MyThemeType {}
}