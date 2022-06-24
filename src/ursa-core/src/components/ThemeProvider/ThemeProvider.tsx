import React, { FC, ReactElement, ReactNode } from 'react';
import {
  css,
  Global,
  Theme,
  ThemeProvider as EmotionThemeProvider
} from '@emotion/react';

export interface ThemeProviderProps {
  theme: Theme;
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme
}): ReactElement => {
  return (
    <EmotionThemeProvider theme={theme}>
      <Global
        styles={css`
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            src: url('https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2')
              format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
              U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
              U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          :root {
            color-scheme: ${theme.color['--ursa-color-scheme']};
            font-size: 15px;
            font-family: 'Roboto', 'Helvetica', sans-serif;
          }
          div,
          section,
          article,
          p,
          span,
          a,
          ul,
          li {
            margin: 0;
            padding: 0;
          }
          h1,
          h2,
          h3,
          h4,
          h5 {
            font-weight: bold;
          }
        `}
      />
      {children}
    </EmotionThemeProvider>
  );
};
