import React, {
  createElement,
  ChangeEvent,
  KeyboardEvent,
  ReactElement,
  FocusEvent,
  forwardRef,
  useState,
  useImperativeHandle,
  useRef,
  useEffect,
  ReactNode
} from 'react';
import styled from '@emotion/styled';
import { generateUniqueID } from '../../utilities';
import { Icon } from '../Icon';
import {
  ViewMinor,
  HideMinor,
  CircleCancelMajor
} from "../../icons";

type Type =
  | 'text'
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'url'
  | 'date'
  | 'datetime-local'
  | 'month'
  | 'time'
  | 'week'
  | 'currency';

type TextAlign = 'left' | 'center' | 'right';

export interface BaseInputField {
  /** An unique identifier for the Text field */
  id?: string;
  /** Text field name attribute */
  name?: string;
  /** Text field className attribute */
  className?: string;
  /** Text field text-decoration set to Uppercase */
  uppercase?: boolean;
  /** Specify that an input field should automatically get focus when the page loads. */
  autoFocus?: boolean;
  /** Enable automatic completion by the browser. */
  autoComplete?: 'on' | 'off';
  /** Visually hidden text for screen readers */
  ariaLabel?: string;
  /** Space-separated list of ids of the elements that describe the field
   * E.g. of ids: The error id if an error is thrown
   */
  ariaDescribedBy?: string;
  /** Whether field is disabled */
  disabled?: boolean;
  /** Callback fired when value is changed */
  onChange?(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
  /** Callback fired when a key is pressed up */
  onKeyUp?(event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>): void;
  /** Callback fired when input is focused */
  onFocus?(event?: FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void;
  /** Callback fired when input is blurred */
  onBlur?(event?: FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void;
  /** Whether field is required */
  required?: boolean;
  /** Whether field is read-only */
  readOnly?: boolean;
}

export interface TextfieldProps extends BaseInputField {
  label?: string;
  labelHidden?: boolean;
  labelAction?: ReactNode;
  /** Type of Text field. Default: `text`
   *
   * One of the following values: `text`, `email`, `number`, `password`, `search`, `tel`,
   * `url`, `date`, `datetime-local`, `month`, `time`, `week`, `currency`
   */
  type?: Type;
  placeholder?: string;
  placeholderOff?: boolean;
  value?: string;
  /** Use the max and min attributes together to create a range of legal values. */
  /** Minimum value for an input field of type:
   * `number`, `range`, `date`, `datetime-local`, `month`, `time` or `week`.
   */
  min?: number;
  /** Maximum value for an input field of type:
   * `number`, `range`, `date`, `datetime-local`, `month`, `time` or `week`.
   */
  max?: number;
  /** Minimum length of the Textfield. Must be an integer value `0` or higher. */
  minLength?: number;
  /** Maximum length of the Textfield.
   * `maxlength` value must be greater than or equal to the value of `minlength`.
   */
  maxLength?: number;
  /** A regular expression to check the value against */
  pattern?: string;
  /** Determines the alignment of the text in the input */
  align?: TextAlign;
  /** Whether monospaced font should be used */
  monospaced?: boolean;
  /** Whether multiline textfield */
  multiline?: boolean | number;
  /** Whether spellcheck is allowed */
  spellCheck?: boolean;
  /** Indicates whether or not the entire value should be selected on focus. */
  selectOnFocus?: boolean;
  /** Show a clear text button in the input */
  clearButton?: boolean;
  /** Callback fired when clear button is clicked */
  onClearButtonClick?: (id: string) => void;
  /** Text / Symbol to display before value. E.g. `₹` */
  prefix?: ReactNode;
  /** Text / Symbol to display after value. E.g. `₹` */
  suffix?: ReactNode;
  /** Display the Toggle Password Icon */
  togglePasswordIcon?: boolean;
}

const AniqueTextfield = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextfieldProps
>(
  (
    {
      id: _id,
      name,
      value,
      className,
      type = 'text',
      label,
      placeholder,
      disabled,
      minLength,
      maxLength,
      min,
      max,
      pattern,
      labelHidden,
      labelAction,
      multiline,
      placeholderOff,
      required,
      readOnly,
      onChange,
      onKeyUp,
      onFocus,
      onBlur,
      onClearButtonClick,
      autoFocus,
      autoComplete,
      spellCheck,
      selectOnFocus,
      clearButton,
      togglePasswordIcon,
      prefix,
      suffix
    },
    ref
  ): ReactElement => {
    /***************************************************************************************/
    /** Declare variables, refs, state */
    /***************************************************************************************/

    const [showPassword, setShowPassword] = useState(false);
    const [focus, setFocus] = useState(false);

    /** Generate Name */
    const Name = name
      ?.replace(/[^a-zA-Z0-9 ]/g, '')
      .replace(/\s+/g, '_')
      .toLowerCase();

    /** Generate the ID */
    const id = _id || generateUniqueID('Anique-Textfield');
    const _labelid = generateUniqueID('Anique-TextfieldLabel');

    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () =>
      multiline
        ? (textAreaRef.current as HTMLTextAreaElement)
        : (inputRef.current as HTMLInputElement)
    );

    /***************************************************************************************/
    /** Side Effects */
    /***************************************************************************************/
    useEffect(() => {
      const target = (multiline ? textAreaRef : inputRef).current;
      focus ? target?.focus() : target?.blur();
    }, [focus, multiline]);

    /***************************************************************************************/
    /** Handle Events */
    /***************************************************************************************/

    /** Focus Event */
    const handleFocus = (
      e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setFocus(true);

      if (selectOnFocus) {
        const target = multiline ? textAreaRef.current : inputRef.current;
        target?.select();
      }
      onFocus && onFocus(e);
    };

    /** Blur Event */
    const handleBlur = (
      e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setFocus(false);
      if (onBlur) {
        onBlur && onBlur(e);
      }
    };

    /** Handle Clear Button */
    const handleClearButton = () => {
      onClearButtonClick && onClearButtonClick(id);
      // (multiline ? textAreaRef : inputRef).current?.focus();
      setFocus(true);
    };

    /***************************************************************************************/
    /** Categorize Attributes and Props */
    /***************************************************************************************/

    /** Parse types */
    let typeParsed: Type;
    switch (type) {
      case 'password':
        typeParsed = showPassword ? 'text' : 'password';
        break;
      default:
        typeParsed = type;
        break;
    }

    /** Categorize Global Attributes */
    const globalAttributes = {
      id,
      className: 'Anique-Input',
      ref: multiline ? textAreaRef : inputRef,
      name: Name,
      type: multiline ? undefined : typeParsed,
      disabled,
      autoFocus,
      autoComplete,
      placeholder: placeholderOff ? undefined : placeholder || label,
      readOnly,
      required,
      pattern
    };

    /** Props for Input fields that are text-based */
    const textFieldProps = {
      spellCheck
    };

    /** Accessibility Props */
    const accessibilityProps = {
      'aria-labelledby': _labelid,
      'aria-required': required || undefined
    };

    /** TextArea related Props */
    const textAreaProps = {
      ...textFieldProps
    };

    const elementProps = {
      ...globalAttributes,
      minLength,
      maxLength,
      max,
      min,
      value,
      onChange,
      onKeyUp,
      onFocus: handleFocus,
      onBlur: handleBlur,
      ...accessibilityProps
    };

    /***************************************************************************************/
    /** Generate Content */
    /***************************************************************************************/
    const prefixMarkup = prefix && (
      <div className="Anique-TextfieldPrefix" id={`${id}-Prefix`}>
        {prefix}
      </div>
    );

    // const suffixMarkup = suffix ? (
    //   <div className={styles.Suffix} id={`${id}-Suffix`} ref={suffixRef}>
    //     {suffix}
    //   </div>
    // ) : null;

    const textfieldMarkup = createElement(
      multiline ? 'textarea' : 'input',
      multiline ? Object.assign(elementProps, textAreaProps) : elementProps
    );

    const toggleShowPasswordMarkup = type === 'password' &&
      togglePasswordIcon && (
        <Icon
          className="Anique-PasswordShowHide"
          source={showPassword ? HideMinor : ViewMinor}
          onClick={() => setShowPassword((prev) => !prev)}
        />
      );

    const clearMarkup = clearButton && value !== '' && type !== 'password' && (
      <Icon
        className="Anique-TextClearButton"
        source={CircleCancelMajor}
        onClick={handleClearButton}
      />
    );

    /***************************************************************************************/
    /** Render the Textfield */
    /***************************************************************************************/

    return (
      <div className={`Anique-TextfieldContainer ${className || ''}`}>
        <div className="Anique-LabelContainer">
          <label
            id={_labelid}
            className={`Anique-TextfieldLabel ${labelHidden ? 'hidden' : ''}`}
            htmlFor={id}
          >
            {label}
          </label>
          {labelAction && (
            <div className="Anique-TextfieldLabelAction">{labelAction}</div>
          )}
        </div>
        <div className={`Anique-Textfield`} data-field={name}>
          {prefixMarkup}
          {textfieldMarkup}
          {toggleShowPasswordMarkup}
          {clearMarkup}
        </div>
      </div>
    );
  }
);

export const Textfield = styled(AniqueTextfield)(
  ({
    theme: { color, fontSize },
    uppercase,
    align = 'left',
    monospaced,
    multiline,
    prefix,
    suffix
  }) => `
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        
        .Anique-LabelContainer {
          display: flex;
          justify-content: space-between;
          align-items: center;

          & > .Anique-TextfieldLabel {
            font-size: ${fontSize.fontSize4};
          }
        }

        .Anique-Textfield {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.375rem;
          width: 100%;
          padding-top: 0.375rem;
          padding-bottom: 0.375rem;

          & > .Anique-TextfieldPrefix {
            position: absolute;
            left: 0.5rem;
            color: ${color.textSecondary}
          }

          & > .Anique-Input {
            width: 100%;
            min-height: ${multiline ? '6.75rem' : 'inherit'};
            padding: 0.625rem;
            padding-left: ${prefix && '1.625rem'};
            border: 1px solid ${color.btnDisabled};
            border-radius: 4px;
            font-family: ${monospaced ? 'monospace' : 'inherit'};
            font-size: ${fontSize.fontSize4};
            text-align: ${align};
            text-transform: ${uppercase ? 'uppercase' : 'none'};
            transition: outline 0.05s ease-in-out;
            resize: none;

            &:focus {
              outline: 2px solid blue;
              outline-offset: 0.1rem;
            }
          }

          & > .Anique-PasswordShowHide, .Anique-TextClearButton {
            cursor: pointer;
            position: absolute;
            right: 0.5rem;
          }
        }

    `
);
