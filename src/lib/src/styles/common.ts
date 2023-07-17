import {Border, Font, FontSize, Animation, ResultColors, DeprecatedOldCommonColors} from "../types/theme";

export const CommonResultColors: ResultColors = {
    success: "rgb(21,87,36)",
    onSuccess: '#fff',
    warning: "rgb(133,100,4)",
    onWarning: '#fff',
    error: "rgb(239,68,68)",
    onError: "rgb(189,189,189)",
    info: "rgb(68,148,239)",
    onInfo: "rgb(189,189,189)"
}

export const CommonColor: DeprecatedOldCommonColors = {
    btnPrimary: 'rgba(20, 184, 166, 1)',
    btnPrimaryHovered: 'rgba(13, 148, 136, 1)',
    btnBasic: 'rgba(255, 255, 255, 1)',
    btnAlert: 'rgba(239, 68, 68, 1)',
    btnAlertHovered: 'rgba(220, 38, 38, 1)',
    btnDisabled: 'rgba(203, 213, 225, 1)',
    linkPrimary: 'rgba(59, 130, 246, 1)',
    linkPrimaryHovered: 'rgba(37, 99, 235, 1)',
    borderSecondary: 'rgba(148, 163, 184, 1)',
    tagBgBasic: 'rgba(156, 163, 175, 1)',
    tagText: 'rgba(30, 41, 59, 1)',
    tabSelected: 'rgba(234, 88, 12, 1)',
    cardImgBg: 'rgba(21, 128, 61, 1)',
    badgeImgBg: 'rgba(21, 128, 61, 1)',
    accentColor: 'rgba(59, 130, 246, 1)',
    accentColorHovered: 'rgba(96, 165, 250, 1)',
    neutral: 'rgb(228 229 231 / 1)',
    textSuccess: 'rgb(21 87 36 / 1)',
    textWarning: 'rgb(133 100 4 / 1)',
    textError: 'rgb(239 68 68 / 1)',
    textSubdued: 'rgb(128 128 128 / 1)',
    white: "#fff",
    black: "#000"
}

export const CommonFont: Font = {
    fontPrimary: 'Roboto, Helvetica, Arial, sans-serif',
    fontSecondary: 'Roboto, Helvetica, Arial, sans-serif', // could be "Quicksand, sans-serif"
}

export const CommonFontSize: FontSize = {
    fontSize1: '0.75rem',
    fontSize2: '0.84375rem',
    fontSize3: '0.875rem',
    fontSize4: '0.9375rem',
    fontSize5: '1rem',
    fontSize6: '1.0625rem',
    fontSize7: '1.25rem',
    fontSize8: '1.3125rem',
    fontSize9: '1.5rem',
    fontSize10: '1.625rem',
    fontSize11: '1.6875rem',
    fontSize12: '1.75rem',
    fontSize13: '2.135rem',
    fontSize14: '2.625rem'
}

export const CommonBorder: Border = {
    borderRadiusLg: '0.25rem',
    borderRadiusXl: '0.5rem',
    borderRadius2xl: '1rem',
    borderRadiusFull: '9999px'
}

export const CommonAnimation: Animation = {
    timing: {
        animationTimingEase: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        animationTimingSlider: 'cubic-bezier(0.05, 0.95, 0.35, 1.05)',
        animationTimingSlideStop: 'cubic-bezier(0.05, 0.05, 0, 1)',
        animationTimingThrottle: 'cubic-bezier(0.95, 0, 0.95, 0.25)'
    }
}
