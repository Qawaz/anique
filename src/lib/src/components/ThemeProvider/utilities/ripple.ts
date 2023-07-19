import React from "react";
import {ThemeColors, RGBColor} from "../../../types/theme";
import {rgbColorWithOpacity} from "../../../utilities/ColorUtils";

export function createRipple(event: React.MouseEvent<HTMLElement>, color ?: string, duration ?: number, percentSize ?: number, followMouse ?: boolean) {
    const container = event.currentTarget;

    const circle = document.createElement("span");
    const exactDuration = (duration || 600)
    // styling
    circle.className = "anq-ripple"
    circle.style.position = "absolute"
    circle.style.borderRadius = "50%"
    circle.style.transform = "scale(0)"
    circle.style.animation = "ripple " + exactDuration + "ms linear"
    circle.style.backgroundColor = color || "rgba(255,255,255,0.7)"

    const sizeMultiplier = percentSize || 1
    // creating
    const diameter = Math.max(container.clientWidth * sizeMultiplier, container.clientHeight * sizeMultiplier);

    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    const containerRect = container.getBoundingClientRect();

    const followEventPosition = followMouse || false
    const eventX = followEventPosition ? event.clientX : containerRect.left + radius
    const eventY = followEventPosition ? event.clientY : containerRect.top + radius

    circle.style.left = `${eventX - containerRect.left - radius}px`;
    circle.style.top = `${eventY - containerRect.top - radius}px`;
    const ripple = container.getElementsByClassName("anq-ripple")[0];

    if (ripple) {
        ripple.remove();
    }

    container.appendChild(circle);
}

export function createThemedRipple(onBackground: RGBColor, event: React.MouseEvent<HTMLElement>,duration ?: number) {
    return createRipple(event, rgbColorWithOpacity(onBackground, 0.6), duration ?? 560)
}