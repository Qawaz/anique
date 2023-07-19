import {RGBAColor, RGBColor} from "../types/theme";

export function rgbColorWithOpacity(color: RGBColor, opacity: number): RGBAColor {
    // Extract the individual RGB components
    const [r, g, b] = color
        .slice(4, -1) // Remove "rgb(" and ")"
        .split(',')
        .map(Number);

    // Ensure opacity is within the valid range of 0 to 1
    const validOpacity: number = Math.min(1, Math.max(0, opacity));

    // Format the color with the provided opacity
    return `rgba(${r},${g},${b},${validOpacity})`;
}