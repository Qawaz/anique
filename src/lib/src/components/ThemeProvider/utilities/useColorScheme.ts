import {useState, useEffect, SetStateAction, Dispatch} from 'react';

export enum ColorScheme {
    Dark = 0,
    Light = 1
}

export const getColorScheme = (): ColorScheme =>
    process.env.NODE_ENV !== 'production'
        ? ColorScheme.Light
        : window.matchMedia('(prefers-color-scheme: dark)').matches
            ? ColorScheme.Dark
            : ColorScheme.Light;

export const useColorScheme = (initial ?: ColorScheme) : [ColorScheme, Dispatch<SetStateAction<ColorScheme>>] => {
    const colorSchemeStateArr = useState<ColorScheme>(initial ?? ColorScheme.Dark);
    const [colorScheme, setColorScheme] = colorSchemeStateArr
    useEffect(() => {
        if (process.env.NODE_ENV === 'test' && colorScheme) return;
        if (typeof window !== "undefined") {
            setColorScheme(getColorScheme())
            const media = window.matchMedia('(prefers-color-scheme: dark)');
            /** Run the first time */
            setColorScheme(media.matches ? ColorScheme.Dark : ColorScheme.Light);
            const themeSetter = () => {
                if (media.matches) {
                    setColorScheme(ColorScheme.Dark);
                } else setColorScheme(ColorScheme.Light);
            };
            media.addEventListener('change', themeSetter);
            return () => media.removeEventListener('change', themeSetter);
        }
        return;
    }, []);
    return colorSchemeStateArr;
};
