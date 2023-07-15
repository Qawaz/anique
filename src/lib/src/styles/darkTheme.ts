import {CommonAnimation, CommonBorder, CommonColor, CommonFont, CommonFontSize} from './common';
import {AniqueTheme} from "../types/theme";

export const darkTheme: AniqueTheme = {
    animation: CommonAnimation,
    border: CommonBorder,
    font: CommonFont,
    fontSize: CommonFontSize,
    color: {
        ...CommonColor,
        colorScheme: 'dark',
        bgPrimary: 'rgba(4, 12, 24, 1)',
        textPrimary: 'rgba(255, 255, 255, 1)',
        textSecondary: 'rgba(153, 159, 164, 1)',
        textTertiary: 'rgba(128, 128, 128, 1)',
        backdrop: 'rgba(15, 23, 42, 1)',
        borderPrimary: 'rgba(71, 85, 105, 1)',
        navBgPrimary: 'rgba(22, 78, 99, 1)',
        actionPressed: 'rgba(241, 242, 243, 1)',
        navItemBgActive: 'rgba(204, 251, 241, 1)',
        navItemBgHovered: 'rgba(21, 94, 117, 1)'
    }
}