import React, { ReactElement, forwardRef } from 'react';
import styled from '@emotion/styled';
import { TabProps } from '../../../types';

const AniqueTab = forwardRef<HTMLButtonElement, TabProps>(
  (
    { id, label, selected, className, index, onClick, onKeyUp },
    ref
  ): ReactElement => {
    return (
      <li
        className={`Anique-TabHeadItem ${selected ? 'selected' : ''} ${
          className || ''
        }`}
        role="presentation"
      >
        <button
          className="Anique-Tab"
          id={id}
          ref={ref}
          type="button"
          role="tab"
          aria-label={label}
          aria-selected={selected ? 'true' : 'false'}
          aria-controls={`${id}-panel`}
          onClick={() => onClick(index)}
          onKeyUp={onKeyUp}
          tabIndex={selected ? 0 : -1}
          data-index={index}
        >
          <span className="Anique-TabTitle">{label}</span>
        </button>
      </li>
    );
  }
);

export const Tab = styled(AniqueTab)(
  ({ theme: { color }, layout, selected }) => `
      display: flex;
      cursor: pointer;
      margin: 0;
      padding: 0;
      color: ${
        selected ? color.textPrimary : color.textSecondary
      };
      
  
      .Anique-Tab {
          all: unset;
          cursor: pointer;
          margin: 0;
          padding: ${layout === 'vertical' ? '0.75em 1.5em' : '0.6em 1.5em'};
          width: 100%;
          font-weight: bold;
          z-index: 2;
          border-bottom: ${
            layout === 'vertical'
              ? '0'
              : `0.3em solid ${
                  selected ? color.btnPrimary : 'transparent'
                }`
          };
          border-left: ${
            layout === 'vertical'
              ? `0.3em solid ${
                  selected ? color.btnPrimary : 'transparent'
                }`
              : '0'
          };
          transition-property: color, border-bottom, border-left;
          transition-duration: 0.15s;
          transition-timing-function: ease-in-out;
      }
      &:hover {
          color: ${color.textPrimary};
  
          .Anique-Tab {
            padding: ${layout === 'vertical' ? '0.75em 1.5em' : '0.6em 1.5em'};
            border-bottom: ${
              layout === 'vertical'
                ? '0'
                : `0.3em solid ${!selected && color.textSecondary}`
            };
            border-left: ${
              layout === 'vertical'
                ? `0.3em solid ${!selected && color.textSecondary}`
                : '0'
            };
          }
      }
      `
);
