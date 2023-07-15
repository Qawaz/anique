import styled from '@emotion/styled';
import React, { FC, ReactElement } from 'react';
import { ArrowLeftMinor, ArrowRightMinor } from "../../../icons";
import { DataGridRow } from '../../../types';
import { Icon } from '../../Icon';

export interface PaginationProps {
  view: DataGridRow[] | undefined;
  rowsPerPage: number;
  currentPageNumber: number;
  prevPage: () => void;
  nextPage: () => void;
  className?: string;
}

export const AniquePagination: FC<PaginationProps> = ({
  view,
  rowsPerPage,
  currentPageNumber,
  prevPage,
  nextPage,
  className
}): ReactElement => {
  const prevPageExists = currentPageNumber > 1 ? true : false;
  const nextPageExists =
    currentPageNumber < Math.ceil((view as DataGridRow[]).length / rowsPerPage);
  const active = 'active border-slate-700 cursor-pointer';

  return (
    <>
      {view && view.length > rowsPerPage && (
        <div className={`Anique-Pagination ${className || ''}`}>
          <div
            className={`Anique-PaginationPrevious ${
              prevPageExists ? active : 'border-slate-900'
            }`}
            title="Previous"
            onClick={prevPage}
          >
            <Icon
              source={ArrowLeftMinor}
              color={`${
                prevPageExists ? 'textSecondary' : 'btnDisabled'
              }`}
            />
          </div>
          <div
            className={`Anique-PaginationNext ${
              nextPageExists ? active : 'border-slate-900'
            }`}
            title="Next"
            onClick={nextPage}
          >
            <Icon
              source={ArrowRightMinor}
              color={`${
                nextPageExists ? 'textSecondary' : 'btnDisabled'
              }`}
            />
          </div>
        </div>
      )}
    </>
  );
};

export const Pagination = styled(AniquePagination)(
  ({ theme: { color, border } }) => `
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
    bottom: 0;

    & > .Anique-PaginationPrevious, .Anique-PaginationNext {
      padding: 10px;
      border-width: 1px;
      border-style: solid;
      border-color: ${color.borderPrimary};
    }

    & > .Anique-PaginationPrevious.active, .Anique-PaginationNext.active {
      cursor: pointer;
      border-color: ${color.borderSecondary};
    }
  `
);
