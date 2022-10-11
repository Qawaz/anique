import React, { FC, ReactElement, MouseEvent } from 'react';
import styled from '@emotion/styled';

export interface BackdropProps {
  onClick?: MouseEvent<HTMLDivElement>;
  transparent?: boolean;
  className?: string;
}

const UrsaBackdrop: FC<BackdropProps> = ({ className }): ReactElement => (
  <div className={`UrsaBackdrop ${className || ''}`} />
);

export const Backdrop = styled(UrsaBackdrop)(
  ({ theme: { color }, transparent }) => `
  background-color: ${transparent ? 'transparent' : color['--ursa-backdrop']};
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  opacity: 0.9;
  will-change: opacity;
  transition: opacity 0.2s ease-in-out;
`
);
