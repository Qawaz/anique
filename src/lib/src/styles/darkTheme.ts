import {CommonAnimation, CommonBorder, CommonColor, CommonFont, CommonFontSize, CommonResultColors} from './common';
import {AniqueTheme} from "../types/theme";

export const darkTheme: AniqueTheme = {
    animation: CommonAnimation,
    border: CommonBorder,
    font: CommonFont,
    fontSize: CommonFontSize,
    color: {
        ...CommonColor,
        ...CommonResultColors,

        primary: "#17cfb9",
        primary100: "#2ce8d2",
        primary200: "#55ecdb",
        primary300: "#7ef1e3",
        primary400: "#a8f5ec",
        primary500: "#d1faf5",

        accent: "#3b82f6",
        accent100: "#5996f7",
        accent200: "#77a8f9",
        accent300: "#94bbfa",
        accent400: "#b1cefb",
        accent500: "#cee0fd",

        bg: "rgb(2,7,13)",
        bgPrimary: '#02070d',

        bg100: "#07182c",
        bg200: "#0c284b",
        bg300: "#11396a",
        bg400: "#154784",
        bg500: "#1957a3",

        onBg: "rgb(255,255,255)",
        textPrimary: '#fff',

        onBg100: "#ededed",
        onBg200: "#dbdbdb",
        onBg300: "#c9c9c9",
        onBg400: "#b8b8b8",
        onBg500: "#a6a6a6",

        textSecondary: 'rgba(153, 159, 164, 1)',
        textTertiary: 'rgba(128, 128, 128, 1)',

        backdrop: 'rgba(15, 23, 42, 1)',
        borderPrimary: 'rgba(71, 85, 105, 1)',
        navBgPrimary: 'rgba(22, 78, 99, 1)',
        actionPressed: 'rgb(14,14,14)',
        navItemBgActive: 'rgba(204, 251, 241, 1)',
        navItemBgHovered: 'rgba(21, 94, 117, 1)'
    }
}