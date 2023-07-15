import {CommonAnimation, CommonBorder, CommonColor, CommonFont, CommonFontSize} from './common';
import {AniqueTheme} from "../types/theme";

export const lightTheme: AniqueTheme = {
    font: CommonFont,
    fontSize: CommonFontSize,
    border: CommonBorder,
    animation: CommonAnimation,
    color: {
        ...CommonColor,
        colorScheme: 'light',
        bgPrimary: 'rgba(246, 246, 247, 1)',
        textPrimary: 'rgba(0, 0, 0, 1)',
        textSecondary: 'rgba(109, 113, 117, 1)',
        textTertiary: 'rgba(128, 128, 128, 1)',
        backdrop: 'rgba(0, 0, 0, 0.5)',
        borderPrimary: 'rgba(203, 213, 225, 1)',
        navBgPrimary: 'rgba(255, 255, 255, 1)',
        actionPressed: 'rgba(241, 242, 243, 1)',
        navItemBgActive: 'rgba(204, 251, 241, 1)',
        navItemBgHovered: 'rgba(240, 253, 250, 1)'
    }
};
