import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string,
      dark: string,
      background: string,
    },

    borderRadius: {
      10: string,
      8: string,
      5: string,
    },

    fonts: {
      roboto: string,
      montserrat: string,
    },
  }
}
