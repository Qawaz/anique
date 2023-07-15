import React, {FC, ReactElement, MouseEvent, MouseEventHandler} from 'react';
import {IconSource} from '../../types';
import styled from '@emotion/styled';
import type {Color as ThemeColor} from '../../types/theme';
import {generateUniqueID, useTestId} from '../../utilities';

type ThemColorKey = keyof ThemeColor;

const COLORS_WITH_BACKDROPS = ['success', 'info', 'warning', 'alert'];

export interface IconProps {
    /** The SVG contents to display in the icon (icons should fit in a 20 × 20 pixel viewBox) */
    source: IconSource;
    /** Set the color for the SVG fill */
    color?: ThemColorKey;
    bgColor?: ThemColorKey;
    /** Set the size for the SVG */
    size?: 'small' | 'medium' | 'large';
    /** Show a backdrop behind the icon */
    backdrop?: boolean;
    /** Descriptive text to be read to screenreaders */
    accessibilityLabel?: string;
    className?: string;
    onClick?: MouseEventHandler<HTMLSpanElement> | undefined
}

const AniqueIcon: FC<IconProps> = (
    {
        source: IconSVGComponent,
        color,
        size,
        backdrop,
        accessibilityLabel,
        className,
        onClick
    }
): ReactElement => {
    /*****************************************************************/
    // Find the typeof source as sourceType
    /*****************************************************************/

    let sourceType: 'function' | 'placeholder' | 'external';
    let testid: string | { 'data-testid': undefined | string } = 'icon';

    if (typeof IconSVGComponent === 'function') {
        sourceType = 'function';
    } else if (IconSVGComponent === 'placeholder') {
        sourceType = 'placeholder';
        testid += '-placeholder';
    } else {
        sourceType = 'external';
        testid += '-external';
    }

    testid = useTestId(testid) as { 'data-testid': undefined | string };

    /*********************************************************************************/
    // Show warning if color provided for sourceType "external" in development mode,
    // i.e. if the icon is not a react component included in icons
    /*********************************************************************************/
    if (
        color &&
        sourceType === 'external' &&
        process.env.NODE_ENV === 'development'
    ) {
        console.warn(
            'Recoloring external SVGs is not supported. Set the intended color on your SVG instead.'
        );
    }
    /*********************************************************************************/
    /** Show warning if backdrop is not available in development  */
    /*********************************************************************************/
    if (
        backdrop &&
        color &&
        !COLORS_WITH_BACKDROPS.includes(color) &&
        process.env.NODE_ENV === 'development'
    ) {
        console.warn(
            `The ${color} variant does not have a supported backdrop color`
        );
    }
    /*********************************************************************************/
    /** Content Markup based on sourceType */
    /*********************************************************************************/
    const _id = generateUniqueID('Anique-Icon');
    const iconMarkup = {
        function: (
            <IconSVGComponent
                className="Anique-IconSVG"
                focusable="false"
                aria-hidden="true"
                {...testid}
            />
        ),
        placeholder: <div className="Anique-IconPlaceholder" {...testid} />,
        external: (
            <img
                className="Anique-IconSVG"
                src={`data:image/svg+xml;utf8,${IconSVGComponent}`}
                alt=""
                aria-hidden="true"
                {...testid}
            />
        )
    };
    return (
        <span id={_id} className={`Anique-Icon ${className || ''}`} onClick={onClick}>
      {iconMarkup[sourceType]}
    </span>
    );
};

export const Icon = styled(AniqueIcon)(
    (props) => {
        const {theme: {color, fontSize}, color: IconColor, bgColor, size} = props
        const x = props.color
        const computedProps = {
            size: '1rem'
        };
        switch (size) {
            case 'small':
                computedProps.size = fontSize.fontSize3;
                break;
            case 'medium':
                computedProps.size = fontSize.fontSize6;
                break;
            case 'large':
                computedProps.size = fontSize.fontSize7;
                break;
            default:
                computedProps.size = fontSize.fontSize5;
                break;
        }
        return {
            display: 'block',
            height: computedProps.size,
            width: computedProps.size,
            maxHeight: '100%',
            maxWidth: '100%',

            svg: {
                fill: IconColor ? color[IconColor] : 'currentColor',
                backgroundColor: bgColor ? color[bgColor] : 'none'
            },
            '&:hover': {
                color: 'auto',
                backgroundColor: 'auto'
            }
        };
    }
);
