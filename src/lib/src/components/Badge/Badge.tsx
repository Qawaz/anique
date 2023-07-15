import styled from '@emotion/styled';
import React, { FC, ReactElement, ReactNode } from 'react';

export interface BadgeProps {
  /** The main display content for the badge */
  children?: ReactNode;
  /** The className attribute of the Badge component */
  className?: string;
  badgeContent?: number;
  color?: string;
  invisible?: boolean;
  showZero?: boolean;
  /** The maximum number before the badge content truncates */
  max?: number;
  variant?: 'dot' | 'text' | 'outline';
  anchorOrigin?: {
    horizontal: 'top' | 'right' | 'bottom' | 'left';
    vertical: 'top' | 'right' | 'bottom' | 'left';
  };
}

const AniqueBadge = ({
  children,
  className,
  badgeContent,
  color,
  invisible,
  showZero,
  max,
  variant,
  anchorOrigin
}: BadgeProps): ReactElement => {
  const content =
    badgeContent && max && badgeContent > max ? `${max}+` : badgeContent;

  return (
    <div className={`Anique-BadgeContainer ${className || ''}`}>
      {children && <div className="Anique-BadgeComponent">{children}</div>}
      {!invisible && (
        <div className="Anique-Badge">
          {variant === 'dot' ? null : (
            <div className="Anique-BadgeContent">{content}</div>
          )}
        </div>
      )}
    </div>
  );
};

export const Badge = styled(AniqueBadge)(
  ({
    theme: { color, fontSize, border },
    color: badgeColor,
    children,
    variant
  }) => `
  cursor: pointer;
  display: inline-flex;
  position: relative;

    .Anique-Badge {
      display: flex;
      position: ${!children ? 'static' : 'absolute'};;
      bottom: ${!children ? 0 : '0.2em'};
      left: ${!children ? 0 : '0.3em'};
      align-items: center;
      justify-content: center;
      padding: 5px;
      min-width: ${variant === 'dot' ? '10px' : '22px'};
      min-height: ${variant === 'dot' ? '10px' : '22px'};
      z-index: 1;
      border-radius: ${border.borderRadiusFull};
      background-color: ${badgeColor ? badgeColor : color.btnAlert};
      transform: scale(0.9);

      & > .Anique-BadgeContent {
        font-size: ${fontSize.fontSize1};
        font-weight: bold;
        color: #fff;
      }
    }
  `
);
