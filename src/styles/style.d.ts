import 'styled-components'

export type Theme = {
  bg: string;
  purple: string;
  contrast: string;
  constrastDarker: string;
  cardBG: string;
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}