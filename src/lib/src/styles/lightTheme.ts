import {CommonAnimation, CommonBorder, CommonColor, CommonFont, CommonFontSize, CommonResultColors} from './common';
import {AniqueTheme} from "../types/theme";

export const lightTheme: AniqueTheme = {
    font: CommonFont,
    fontSize: CommonFontSize,
    border: CommonBorder,
    animation: CommonAnimation,
    color: {
        ...CommonColor,
        ...CommonResultColors,

        primary: "#17cfb9",
        primary100: "#12a190",
        primary200: "#0f8a7b",
        primary300: "#0d7367",
        primary400: "#0a5c52",
        primary500: "#08453e",

        accent: "#3b82f6",
        accent100: "#1a6ef4",
        accent200: "#0b5ce0",
        accent300: "#094ebe",
        accent400: "#07409c",
        accent500: "#06327a",

        bg: "rgb(246,246,247)",
        bgPrimary: '#f6f6f7',

        bg100: "#e1e1e5",
        bg200: "#ccccd1",
        bg300: "#b6b6be",
        bg400: "#a0a0ab",
        bg500: "#8b8b98",

        onBg: "rgb(0,0,0)",
        textPrimary: '#000',

        onBg100: "#171717",
        onBg200: "#2e2e2e",
        onBg300: "#454545",
        onBg400: "#5c5c5c",
        onBg500: "#737373",

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
