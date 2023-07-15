import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

export interface LabelProps {
  /** The unique ID of the Label */
  id: string;
  /** The className attribute of the Label */
  className?: string;
  /** The ID of the element the Label is for */
  htmlFor?: string;
  /** The contents of the Label */
  children?: ReactNode;
  /** Required indicator for the label */
  required?: boolean;
}

const AniqueLabel = ({ id, className, htmlFor, children }: LabelProps) => {
  return (
    <label
      id={id}
      className={`Anique-Label ${className || ''}`}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};

export const Label = styled(AniqueLabel)(
  ({ required }) => `
       ${
         required &&
         `&:after {
            content: '*';
            color: red;
            padding-left: 0.625rem;
        }`
       }
    `
);
