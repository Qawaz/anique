import styled from '@emotion/styled';
import React, { ReactElement, MouseEvent, forwardRef } from 'react';

import { DataGridColumn } from '../../../../types';

interface DataGridHeaderProps {
  className?: string;
  column: DataGridColumn;
  index: number;
  onClick: (event: MouseEvent<HTMLTableCellElement>) => void;
}

const AniqueDataGridHeader = forwardRef<
  HTMLTableCellElement,
  DataGridHeaderProps
>(
  (
    { column: { name, label }, index, className, onClick },
    ref
  ): ReactElement => {
    return (
      <th
        className={`Anique-DataGridColumn ${className || ''}`}
        key={index}
        data-name={name}
        data-sort={''}
        onClick={onClick}
        ref={ref}
      >
        <div className="Anique-DataGridColumnContent">
          <span className="Anique-DataGridColumnLabel">{label}</span>
          <span className={`Anique-DataGridColumnSort`}>
            <i className={`text-base text-slate-600 fas `}></i>
          </span>
        </div>
      </th>
    );
  }
);

export const DataGridHeader = styled(AniqueDataGridHeader)(
  ({ theme: { color, fontSize } }) => `
    cursor: pointer;
    padding: 10px;
    
    .Anique-DataGridColumnContent {

      .Anique-DataGridColumnLabel {
        font-size: ${fontSize.fontSize4};
      }

      .Anique-DataGridColumnSort {
        padding-left: 8px;
        padding-right: 8px;
      }
    }
  `
);
