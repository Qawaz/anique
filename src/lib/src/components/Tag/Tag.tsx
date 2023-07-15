import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { TagProps } from '../../types';
import { MobileCancelMajor } from "../../icons";
import { Icon } from '../Icon';
import { UnstyledButton } from '../UnstyledButton';
import { useTestId } from '../../utilities';

const AniqueTag = ({
  name,
  className,
  onClick,
  onRemove
}: TagProps): ReactElement => {
  const testid = useTestId('test-tag');
  return (
    <div
      className={`Anique-Tag ${className || ''}`}
      onClick={onClick}
      {...testid}
    >
      <span className="Anique-TagName">{name}</span>
      {onRemove && (
        <UnstyledButton
          className="Anique-TagCloseButton"
          ariaLabel={`Remove ${name}`}
          onClick={onRemove}
        >
          <Icon className="Anique-TagClose" source={MobileCancelMajor} />
        </UnstyledButton>
      )}
    </div>
  );
};

export const Tag = styled(AniqueTag)(
  ({ theme: { color, fontSize, border }, onRemove }) => `
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: 0.625rem;
        font-size: ${fontSize.fontSize1};
        padding: 0.825em 1.375em;
        background-color: ${color.tagBgBasic};
        color: ${color.tagText};
        border-radius: ${border.borderRadius2xl};

        &:focus {
          outline: 1px solid ${color.btnPrimary};
        }

        ${
          onRemove &&
          `.Anique-TagClose {
            & > svg {
              fill: ${color.tagText};
              transition: opacity .15s ease-in-out;

              &:hover {
                fill: ${"#000"};
              }
            }
          }`
        }
    `
);
