export type RGBColor = `rgb(${number},${number},${number})`;

export type RGBAColor = `rgba(${number},${number},${number},${number})`


export interface DeprecatedOldCommonColors {

    /**
     * @deprecated must be replaced with one of the new colors
     */
    btnPrimary: string
    /**
     * @deprecated must be replaced with one of the new colors
     */
    btnPrimaryHovered: string
    /**
     * @deprecated must be replaced with one of the new colors
     */
    btnBasic: string
    /**
     * @deprecated must be replaced with one of the new colors
     */
    btnAlert: string
    /**
     * @deprecated must be replaced with one of the new colors
     */
    btnAlertHovered: string
    /**
     * @deprecated must be replaced with one of the new colors
     */
    btnDisabled: string
    /**
     * @deprecated must be replaced with one of the new colors
     */
    linkPrimary: string
    /**
     * @deprecated must be replaced with one of the new colors
     */
    linkPrimaryHovered: string
    /**
     * @deprecated maps to onBg300 | onBg200
     */
    borderSecondary: string
    /**
     * @deprecated must be replaced with one of the new colors
     */
    tagBgBasic: string
    /**
     * @deprecated must be replaced with one of the new colors
     */
    tagText: string
    /**
     * @deprecated must be replaced with one of the new colors
     */
    tabSelected: string
    /**
     * @deprecated must be replaced with one of the new colors
     */
    cardImgBg: string
    /**
     * @deprecated must be replaced with one of the new colors
     */
    badgeImgBg: string
    /**
     * @deprecated maps to new color success
     */
    textSuccess: string
    /**
     * @deprecated maps to new color warning
     */
    textWarning: string
    /**
     * @deprecated maps to new color error
     */
    textError: string
    /**
     * @deprecated must be replaced with one of the new colors
     */
    textSubdued: string
    /**
     * @deprecated maps to new color accent
     */
    accentColor: string
    /**
     * @deprecated use accent's variation
     */
    accentColorHovered: string
    /**
     * @deprecated must be replaced with one of the new colors introduced
     */
    neutral: string
    /**
     * @deprecated must be hardcoded where used
     */
    white: string
    /**
     * @deprecated must be hardcoded where used
     */
    black: string

}

interface OldDeprecatedThemeColors {
    /**
     * @deprecated maps to bg
     */
    bgPrimary: string
    /**
     * @deprecated maps to onBg
     */
    textPrimary: string
    /**
     * @deprecated maps to onBg100
     */
    textSecondary: string
    /**
     * @deprecated maps to onBg200
     */
    textTertiary: string
    /**
     * @deprecated must be replaced with one of the new colors
     */
    actionPressed: string
    /**
     * @deprecated must be replaced with one of the new colors
     */
    navBgPrimary: string
    /**
     * @deprecated must be replaced with one of the new colors
     */
    navItemBgActive: string
    /**
     * @deprecated must be replaced with one of the new colors
     */
    navItemBgHovered: string
    /**
     * @deprecated maps to onBg400 | onBg300
     */
    borderPrimary: string

}

interface BrandColors {
    /**
     * The primary brand color,
     * Variations can be brighter or darker,
     * Default Themes Variations : darker in light color scheme & brighter in dark color scheme
     */
    primary: string
    /**
     * The primary brand color shade 100
     */
    primary100: string
    /**
     * The primary brand color shade 200
     */
    primary200: string
    /**
     * The primary brand color shade 300
     */
    primary300: string
    /**
     * The primary brand color shade 400
     */
    primary400: string
    /**
     * The primary brand color shade 500
     */
    primary500: string
    /**
     * The secondary brand color,
     * Variations can be brighter or darker,
     * Default Themes Variations : darker in light color scheme & brighter in dark color scheme
     */
    accent: string
    /**
     * The secondary brand color shade 100
     */
    accent100: string
    /**
     * The secondary brand color shade 200
     */
    accent200: string
    /**
     * The secondary brand color shade 300
     */
    accent300: string
    /**
     * The secondary brand color shade 400
     */
    accent400: string
    /**
     * The secondary brand color shade 400
     */
    accent500: string
}

export interface ResultColors {
    /**
     * (text / background) color for success
     * must be always used over bg and onBg and their variations
     */
    success: string
    /**
     * The text color to be used over color success
     */
    onSuccess: string
    /**
     * (text / background) color for success
     * must be always used over bg and onBg and their variations
     */
    error: string
    /**
     * The text color to be used over color error
     */
    onError: string
    /**
     * (text / background) color for success
     * must be always used over bg and onBg and their variations
     */
    warning: string
    /**
     * The text color to be used over color warning
     */
    onWarning: string
    /**
     * (text / background) color for success
     * must be always used over bg and onBg and their variations
     */
    info: string
    /**
     * The text color to be used over color info
     */
    onInfo: string
}

export interface ThemeColors extends BrandColors, ResultColors, DeprecatedOldCommonColors, OldDeprecatedThemeColors {

    /**
     * bg is the main background color
     * Variations are brighter in dark mode and darker in light mode
     * e.g. dark mode : #000 , light mode : #fff
     */
    bg: RGBColor
    /**
     * brighter or darker shade of bg
     */
    bg100: string
    /**
     * brighter or darker shade of bg
     */
    bg200: string
    /**
     * brighter or darker shade of bg
     */
    bg300: string
    /**
     * brighter or darker shade of bg
     */
    bg400: string
    /**
     * brighter or darker shade of bg
     */
    bg500: string
    /**
     * onBg is content color to be used on the bg color
     * Variations are darker in dark mode and brighter in light mode
     * e.g. dark mode : #fff , light mode : #000
     */
    onBg: RGBColor
    /**
     * brighter or darker shade of onBg
     */
    onBg100: string
    /**
     * brighter or darker shade of onBg
     */
    onBg200: string
    /**
     * brighter or darker shade of onBg
     */
    onBg300: string
    /**
     * brighter or darker shade of onBg
     */
    onBg400: string
    /**
     * brighter or darker shade of onBg
     */
    onBg500: string
    /**
     * color being used for the backdrop or scrim
     */
    backdrop: string

}
