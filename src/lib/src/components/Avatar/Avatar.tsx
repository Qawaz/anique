import React, { FC, ReactElement, ReactNode } from 'react';
import styled from '@emotion/styled';
import { useTestId } from '../../utilities';

export interface AvatarProps {
  children?: ReactNode;
  className?: string;
  src?: string;
  alt?: string;
  variant?: 'rounded' | 'square';
  size?: 'small' | 'medium' | 'large';
  bgColor?: string;
}

const AvatarImage = styled.img(
  ({ width, height }) => `
        width: ${width || 'auto'};
        height: ${height || 'auto'};
    `
);

const AniqueAvatar: FC<AvatarProps> = (props): ReactElement => {
  const { children, className, src, alt, size } = props;

  let avatarType: 'image' | 'external' | 'placeholder';
  let testid: string | { 'data-testid': undefined | string } = 'avatar';

  if (src) {
    avatarType = 'image';
  } else if (typeof children === 'string') {
    avatarType = 'placeholder';
    testid += '-placeholder';
  } else {
    avatarType = 'external';
    testid += '-external';
  }

  const px = size === 'small' ? '28' : size === 'large' ? '112' : '56';

  testid = useTestId(testid) as { 'data-testid': undefined | string };

  const avatarMarkup = {
    image: (
      <AvatarImage
        className="Anique-AvatarImage"
        src={src}
        alt={alt}
        width={px}
        height={px}
        {...testid}
      />
    ),
    placeholder: (
      <span
        className="Anique-AvatarPlaceholder"
        title={alt || (children as string)}
        {...testid}
      >
        {children ? (children as string).charAt(0).toUpperCase() : 'U'}
      </span>
    ),
    external: (
      <span className="Anique-AvatarExternal" {...testid}>
        {children}
      </span>
    )
  };

  return (
    <div className={`Anique-Avatar ${className || ''}`}>
      {avatarMarkup[avatarType]}
    </div>
  );
};

export const Avatar = styled(AniqueAvatar)(
  ({ theme: { color, border }, src, variant, size, bgColor }) => {
    const avatarPx = `${
      !src
        ? size === 'small'
          ? '28px'
          : size === 'large'
          ? '112px'
          : '56px'
        : 'auto'
    }`;

    return `
      width: ${avatarPx};
      height: ${avatarPx};
      border-radius: ${
        variant === 'square' ? 0 : border.borderRadiusFull
      };
      background-color: ${
        !src ? (bgColor ? bgColor : color.cardImgBg) : 'none'
      };
      & > img {
          width: ${
            size === 'small' ? '28px' : size === 'large' ? '112px' : '56px'
          };
          height: ${
            size === 'small' ? '28px' : size === 'large' ? '112px' : '56px'
          };
          border-radius: ${
            variant === 'square' ? 0 : border.borderRadiusFull
          };
      }

      & > span {
          display: flex;
          flex-grow: 1;
          justify-content: center;
          align-items: center;
          height: 100%;
          color: ${color.textPrimary};
          font-weight: bold;
      }
  `;
  }
);
