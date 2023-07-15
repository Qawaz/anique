import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { Icon } from '../Icon';
import { AlertMinor } from "../../icons";
import { generateUniqueID } from '../../utilities';

export interface ErrorProps {
  /** Id of the Error field.
   * Can be referenced with aria-describedby on any relevant fiel whose error this is supposed to be.
   */
  id?: string;
  /** The className attribute for the error */
  className?: string;
  /** The Error text */
  children: string;
  /** Icon element if any */
  icon?: boolean;
}

const StyledError = styled.p(
  ({ theme: { color, font, fontSize } }) => `
        display: inline-flex;
        flex-flow: row wrap;
        gap: 5px;
        font-family: ${font.fontPrimary};
        font-size: ${fontSize.fontSize3};
        color: ${color.btnAlert};
    `
);

export const Error = ({
  id,
  children,
  className,
  icon
}: ErrorProps): ReactElement => {
  const _id = id || generateUniqueID('error');
  return (
    <StyledError
      id={_id}
      className={`Ursa-Error ${className || ''}`}
      role="alert"
    >
      {icon && <Icon source={AlertMinor} color="btnAlert" />}
      <span id={`${_id}-text`} className="Ursa-ErrorText">
        {children}
      </span>
    </StyledError>
  );
};
