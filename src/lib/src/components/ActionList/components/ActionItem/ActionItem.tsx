import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { ActionListItem } from '../../../../types';
import { UnstyledButton } from '../../../UnstyledButton';

const AniqueActionItem = ({
  id,
  className,
  label,
  ariaLabel,
  url,
  onAction,
  onMouseEnter,
  onTouchStart,
  disabled,
  helpText,
  prefix,
  suffix,
  active,
  role
}: ActionListItem & { className?: string }): ReactElement => {
  /*****************************************************************************************/
  /** Content Markup */
  /*****************************************************************************************/
  const prefixMarkup = prefix ? (
    <span className="Anique-ActionItemPrefix">{prefix}</span>
  ) : undefined;

  const contentMarkup = (
    <span className="Anique-ActionItemContent">
      <span className="Anique-ActionItemLabel">{label}</span>
      {helpText && <p className="Anique-ActionItemHelpText">{helpText}</p>}
    </span>
  );

  const suffixMarkup = suffix ? (
    <span className="Anique-ActionItemSuffix">{suffix}</span>
  ) : undefined;

  const actionItemMarkup = (
    <span className="Anique-ActionItemContainer">
      {prefixMarkup}
      {contentMarkup}
      {suffixMarkup}
    </span>
  );

  /*****************************************************************************************/
  /** Render ActionItem */
  /*****************************************************************************************/
  return (
    <UnstyledButton
      id={id}
      className={`Anique-ActionItem ${className || ''}`}
      url={disabled ? undefined : url}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={onAction}
      role={role}
    >
      {actionItemMarkup}
    </UnstyledButton>
  );
};

export const ActionItem = styled(AniqueActionItem)(
  ({ theme: { color }, helpText }) => `
      cursor: pointer;
      border: 0;
      margin: 0;
      appearance: none;
      width: 100%;
      text-align: left;
      padding: 0.625rem 0.5rem;
      border-radius: 0.25rem;
      outline: 2px solid transparent;
      transition: outline-color 0.2s linear;

      &:focus {
        outline-color: ${color.accentColor};
      }

      &:active {
        outline: none;
        background: ${color.actionPressed};
      }

      &: hover {
        background: ${color.actionPressed};
      }

      .Anique-ActionItemContainer {
        margin: 0;
        padding: 0;
        line-height: 1;
        display: flex;
        gap: 1.25rem;
      }

      & .Anique-ActionItemContent {
        display: flex;
        flex-direction: ${helpText ? 'column' : 'row'};
        align-items: ${helpText ? 'flex-start' : 'center'};

        & > .Anique-ActionItemLabel {
            min-width: 0;
            max-width: 100%;
            flex: 1 1 auto;
            color: ${color.textPrimary};
          }
        ${
          helpText &&
          `& > .Anique-ActionItemHelpText {
            color: ${color.textSecondary};
            padding-top: 0.325rem;
          }`
        }
      }
    `
);
