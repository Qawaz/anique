import React, {
  ReactElement,
  MouseEvent,
  ChangeEvent,
  FocusEvent,
  useState,
  useEffect,
  useCallback,
  useImperativeHandle,
  useRef,
  forwardRef
} from 'react';

import styled from '@emotion/styled';

import { MinusMinor, TickMinor } from "../../icons";
import { Icon } from '../Icon';
import { generateUniqueID } from '../../utilities';

export interface CheckboxProps {
  /** Unique identifier for checkbox input */
  id?: string;
  /** Name for checkbox input */
  name: string;
  /** Label for the checkbox */
  label: string;
  /** Visually hide the label */
  labelHidden?: boolean;
  /** Value for form input */
  value?: string;
  /* Classes to apply to the tag */
  className?: string;
  /** Checkbox is selected. */
  checked?: boolean | 'indeterminate';
  /** Disable input */
  disabled?: boolean;
  /** Callback when checkbox is toggled */
  // onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChange?(event: ChangeEvent<HTMLInputElement>): void;
  /** Callback when checkbox is focussed */
  onFocus?(event?: FocusEvent<HTMLInputElement>): void;
  /** Callback when focus is removed */
  onBlur?(event?: FocusEvent<HTMLInputElement>): void;
  /** Indicates the ID of the element that is controlled by the checkbox*/
  ariaControls?: string;
  /** Indicates the ID of the element that describes the checkbox*/
  ariaDescribedBy?: string;
  /** Help */
  helpText?: string;
}

const AniqueCheckbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      name,
      label,
      value,
      className,
      checked,
      disabled,
      onChange,
      onFocus,
      onBlur,
      ariaControls,
      ariaDescribedBy,
      helpText
    },
    ref
  ): ReactElement => {
    const uniqueID = generateUniqueID('Anique-Checkbox');
    const _id = id || `Anique-Checkbox-${uniqueID}`;
    const labelID = `Anique-CheckboxLabel-${uniqueID}`;
    const helpTextID = `Anique-CheckboxHelpText-${uniqueID}`;
    const [isChecked, setIsChecked] = useState(checked == true || false);
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    /********************************************************************/
    // Handle Indeterminate
    /********************************************************************/
    const isIndeterminate = checked === 'indeterminate';

    const indeterminateAttributes = isIndeterminate
      ? { indeterminate: 'true', 'aria-checked': 'mixed' as const }
      : { 'aria-checked': isChecked };

    const iconSource = isIndeterminate ? MinusMinor : TickMinor;

    useEffect(() => {
      if (inputRef.current) {
        if (checked === 'indeterminate') {
          inputRef.current.indeterminate = true;
        } else {
          inputRef.current.indeterminate = false;
          setIsChecked(Boolean(checked));
        }
      }
    }, [checked]);

    /********************************************************************/
    // Event Handlers
    /********************************************************************/
    const handleClick = useCallback((event: MouseEvent<HTMLInputElement>) => {
      setIsChecked((prevState) => !prevState);
    }, []);

    /********************************************************************/
    // Render Checkbox JSX
    /********************************************************************/

    return (
      <div className={`Anique-CheckboxContainer ${className || ''}`}>
        <label id={labelID} className="Anique-CheckboxLabel" htmlFor={_id}>
          <input
            id={_id}
            className="Anique-Checkbox"
            ref={inputRef}
            name={name}
            value={value}
            type="checkbox"
            role="checkbox"
            checked={isChecked}
            disabled={disabled}
            onClick={handleClick}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            aria-labelledby={labelID}
            aria-describedby={helpText ? helpTextID : ariaDescribedBy}
            aria-controls={ariaControls}
            {...indeterminateAttributes}
          />
          <span className="Anique-CheckboxIcon">
            <Icon source={iconSource} color={"white"} />
          </span>

          <span className="Anique-CheckboxLabelText">{label}</span>
        </label>
        {helpText && (
          <p id={helpTextID} className="Anique-CheckboxHelpText">
            {helpText}
          </p>
        )}
      </div>
    );
  }
);

/********************************************************************/
// Styled Checkbox
/********************************************************************/

export const Checkbox = styled(AniqueCheckbox)(
  ({ theme: { color }, labelHidden, checked }) => `
    label.Anique-CheckboxLabel {
        display: inline-flex;
        align-items: center;
        padding-left: 0.25rem;
        cursor: pointer;
        padding-top: 0.625rem;
        padding-bottom: 0.625rem;
    }
    input[type="checkbox"].Anique-Checkbox {
        width: 1.2em;
        height: 1.2em;
        border: 2px solid ${color.textPrimary};
        clip: rect(0, 0, 0, 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
    }
    .Anique-CheckboxIcon {
      display: inline-flex;
      cursor: pointer;
      height: 1.2em;
      width: 1.2em;
      border-width: 2px;
      border-style: solid;
      border-radius: 2px;
      margin-right: ${labelHidden ? '0' : '10px'};
      background-color: ${
        checked ? color.accentColor : color.bgPrimary
      };
      border-color: ${
        checked
          ? color.accentColor
          : color.textSecondary
      };
    }
    .Anique-CheckboxLabelText {
      visibility: ${labelHidden ? 'hidden' : 'visible'};
    }
    & > .Anique-CheckboxHelpText {
      padding-left: calc(1.2rem + 2px + 0.625rem);
      color: ${color.textSecondary}
    }
    `
);
