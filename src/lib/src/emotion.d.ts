import '@emotion/react';
import {AniqueTheme} from './types/theme';

declare module '@emotion/react' {
    export interface Theme extends AniqueTheme {
        // nothing here
    }
}
