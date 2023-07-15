import React, {PropsWithChildren, ReactElement, ReactNode} from 'react';
import {
    css,
    Global,
    Theme,
    ThemeProvider as EmotionThemeProvider, useTheme
} from '@emotion/react';

import {lightTheme, darkTheme} from '../../styles';
import {useColorScheme} from './utilities';

export function AniqueGlobalStyles() {
    const theme = useTheme()
    return (
        <Global styles={css`
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            src: url('https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2') format('woff2');
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
            color: ${theme.color['--ursa-text-primary']};
            font-family: 'Roboto', 'Helvetica', sans-serif;
            width: 100%;
            height: 100%;
          }

          div,
          section,
          article,
          blockquote,
          pre,
          hr,
          p,
          span,
          a,
          ul,
          li {
            margin: 0;
            padding: 0;
          }

          li {
            list-style: none;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-weight: bold;
            margin: 0;
          }

          table,
          thead,
          tr {
            border: 1px solid ${theme.color['--ursa-border-secondary']};
          }

          textarea {
            font-family: 'Roboto', 'Helvetica', sans-serif;
          }

          button,
          a {
            font-family: 'Roboto', 'Helvetica', sans-serif;
            cursor: pointer;
          }

          .hidden {
            display: none;
          }
        `}/>
    )
}

export function AniqueThemeProvider({theme, children}: { theme: Theme } & PropsWithChildren): ReactElement {
    return (
        <EmotionThemeProvider theme={theme}>
            <AniqueGlobalStyles/>
            {children}
        </EmotionThemeProvider>
    );
}

export function AniqueSystemThemeProvider({children}: PropsWithChildren): ReactElement {
    const colorScheme = useColorScheme()
    const selectedTheme = colorScheme === 'light' ? lightTheme : darkTheme;
    return (
        <EmotionThemeProvider theme={selectedTheme}>
            <AniqueGlobalStyles/>
            {children}
        </EmotionThemeProvider>
    );
}