import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { UnstyledButton } from '../../UnstyledButton';
import { Icon } from '../../Icon';
import { ChevronUpMinor, ChevronDownMinor } from "../../../icons";

export interface AccordionHeaderProps {
  /** The unique ID of the Accordion Header */
  id: string;
  /** The visible label of the Accordion Header */
  label: string;
  /** Whether the Accordion is active */
  active?: boolean;
  /** The callback when the Accordion Header is clicked */
  onClick?(): void;
}

const StyledAccordionHeader = styled.h4(
  ({ theme: { color } }) => `
    .Anique-AccordionHeader {
        width: 100%;
        display: flex;
        justify-content: space-between;
        text-align: left;
        font-weight: bold;
        align-items: center;
        cursor: pointer;
        padding: 0.25rem;
        border-bottom: 1px solid ${color.borderPrimary};

        & > span.Anique-AccordionLabelText {
            flex-grow: 1;
            padding: 1.25rem 0.625rem;
        }
    }
    `
);

export const AccordionHeader = ({
  id,
  active,
  label,
  onClick
}: AccordionHeaderProps): ReactElement => {
  return (
    <StyledAccordionHeader className="Anique-AccordionHeaderContainer">
      <UnstyledButton
        id={id}
        className="Anique-AccordionHeader"
        onClick={onClick}
        ariaExpanded={active}
        ariaControls={`${id}-label`}
        data-active={active}
      >
        <span className="Anique-AccordionLabelText">{label}</span>
        <Icon source={active ? ChevronUpMinor : ChevronDownMinor} />
      </UnstyledButton>
    </StyledAccordionHeader>
  );
};
