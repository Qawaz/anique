import {withThemeFromJSXProvider} from '@storybook/addon-styling';
import {AniqueThemeProvider} from '@qawaz/anique';
import {lightTheme, darkTheme} from '@qawaz/anique';

export const decorators = [
    withThemeFromJSXProvider({
        themes: {
            light: lightTheme,
            dark: darkTheme
        },
        defaultTheme: 'light',
        Provider: AniqueThemeProvider
    })
];

export const parameters = {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
};