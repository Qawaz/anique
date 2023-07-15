import {useState, useEffect} from 'react';
import {ColorScheme} from '../../../types/theme';

export const getColorScheme = (): ColorScheme =>
    process.env.NODE_ENV !== 'production'
        ? 'light'
        : window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';

export const useColorScheme = () => {
    const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");

    useEffect(() => {
        if (process.env.NODE_ENV === 'test' && colorScheme) return;
        if (typeof window !== "undefined") {
            setColorScheme(getColorScheme())
            const media = window.matchMedia('(prefers-color-scheme: dark)');
            /** Run the first time */
            setColorScheme(media.matches ? 'dark' : 'light');
            const themeSetter = () => {
                if (media.matches) {
                    setColorScheme('dark');
                } else setColorScheme('light');
            };
            media.addEventListener('change', themeSetter);
            return () => media.removeEventListener('change', themeSetter);
        }
        return;
    }, []);

    return colorScheme;
};
