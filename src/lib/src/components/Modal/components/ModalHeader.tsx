import React, { FC, ReactElement } from 'react';
import styled from '@emotion/styled';
import { ModalHeaderProps } from '../../../types';
import { ModalCloseButton } from './ModalCloseButton';

const AniqueModalHeader: FC<ModalHeaderProps> = ({
  title,
  className,
  onClose
}): ReactElement => {
  return (
    <div className={`AniqueModalHeader ${className || ''}`}>
      {title && (
        <div className="AniqueModalHeader-title">
          <h2>{title}</h2>
        </div>
      )}
      <ModalCloseButton onClick={onClose} />
    </div>
  );
};

export const ModalHeader = styled(AniqueModalHeader)(
  ({ theme: { color } }) => `
      position: relative;
      display: flex;
      align-items: flex-start;
      flex-shrink: 0;
      background-color: ${color.bgPrimary};
      padding-bottom: 1em;
      border-bottom: 1px solid ${color.borderPrimary};
  `
);
