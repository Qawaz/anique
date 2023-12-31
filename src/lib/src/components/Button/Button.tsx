import React, {
  ReactElement,
  ReactNode,
  useState,
  useCallback,
  useRef,
  forwardRef,
  useImperativeHandle,
  ChangeEvent,
  createElement
} from 'react';

import styled from '@emotion/styled';

import {
  ActionListItem,
  BaseButton,
  IconSource,
  UploadButtonProps
} from '../../types';
import { Spinner } from '../Spinner';
import { useTestId, isIconSource } from '../../utilities';
import { Icon } from '../Icon';
import {
  CaretUpMinor,
  CaretDownMinor,
  SelectMinor
} from "../../icons";
import { Popover } from '../Popover';
import { ActionList } from '../ActionList';
import { Invisible } from '../Invisible';

export interface ConnectedDisclosure {
  /** Visually hidden label for screen readers */
  ariaLabel?: string;
  /** Whether Connected Disclosure is disabled or not */
  disabled?: boolean;
  /** The actions available from the popover */
  actions?: ActionListItem[];
}

export interface ButtonProps extends BaseButton {
  children?: string | ReactElement;
  textAlign?: 'left' | 'center' | 'right';
  size?: 'slim' | 'medium' | 'large';
  fullWidth?: boolean;
  primary?: boolean;
  outline?: boolean;
  plain?: boolean;
  alert?: boolean;
  icon?: ReactElement | IconSource;
  iconOnly?: boolean;
  disclosure?: 'down' | 'up' | 'select' | boolean;
  upload?: boolean;
  uploadOptions?: UploadButtonProps;
  connectedDisclosure?: ConnectedDisclosure;
}

const ButtonContainer = styled.div`
  display: inline-flex;
`

const AniqueButton = forwardRef<
  HTMLButtonElement | HTMLInputElement,
  ButtonProps
>(
  (
    {
      children,
      id,
      name,
      className,
      url,
      disabled,
      external,
      download,
      submit,
      loading,
      pressed,
      role,
      ariaLabel,
      ariaControls,
      ariaExpanded,
      ariaDescribedBy,
      ariaChecked,
      ariaPressed,
      onClick,
      onFocus,
      onBlur,
      onKeyDown,
      onKeyPress,
      onKeyUp,
      onMouseEnter,
      onTouchStart,
      onPointerDown,
      icon,
      iconOnly,
      upload,
      uploadOptions,
      disclosure,
      connectedDisclosure,
      primary,
      outline,
      alert,
      plain,
      size = 'medium'
    },
    ref
  ): ReactElement => {
    /***************************************************************************************/
    /** Declare variables, refs, state */
    /***************************************************************************************/
    const classes = `Anique-Button ${className ?? ''}`;

    const [disclosureActive, setDisclosureActive] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null); // For File Upload Button (input type: file)
    const buttonRef = useRef<HTMLButtonElement>(null); // For other Buttons

    useImperativeHandle(ref, () =>
      upload
        ? (inputRef.current as HTMLInputElement)
        : (buttonRef.current as HTMLButtonElement)
    );

    /***************************************************************************************/
    /** Handle Events */
    /***************************************************************************************/

    const toggleDisclosure = useCallback(
      () => setDisclosureActive((prev) => !prev),
      []
    );

    const handleUploadButton = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        uploadOptions?.onChange?.(event);
      },
      [uploadOptions?.onChange]
    );

    /***************************************************************************************/
    /** Categorize Props */
    /***************************************************************************************/

    const commonProps = {
      id,
      className: classes,
      'aria-label': ariaLabel
    };

    const childMarkup =
      typeof children === 'string' ? (
        <span className="Anique-ButtonText">{children}</span>
      ) : (
        children
      );

    const linkProps = {
      target: external ? '_blank' : undefined,
      rel: external ? 'noopener noreferrer' : undefined
    };

    const interactiveProps = {
      ...commonProps,
      role: role ?? 'button',
      onClick: upload ? () => inputRef.current?.click() : onClick,
      onFocus,
      onBlur,
      onMouseEnter,
      onTouchStart
    };

    const accessibilityProps = {
      'aria-busy': loading ? true : undefined,
      'aria-controls': ariaControls,
      'aria-expanded': ariaExpanded,
      'aria-describedby': ariaDescribedBy,
      'aria-checked': ariaChecked,
      'aria-pressed': ariaPressed
    };

    /***************************************************************************************/
    /** Content Markup */
    /***************************************************************************************/
    const iconSource = isIconSource(icon) ? (
      <Icon source={loading ? 'placeholder' : icon} />
    ) : (
      icon
    );

    let iconMarkup: ReactNode;
    if (iconSource) {
      iconMarkup = iconOnly ? (
        iconSource
      ) : (
        <span className="Anique-ButtonIcon">
          {iconSource} {childMarkup}
        </span>
      );
    }

    const getDisclosureIconSource = (
      disclosure: NonNullable<ButtonProps['disclosure']>
    ) => {
      switch (disclosure) {
        case 'up':
          return CaretUpMinor;
        case 'select':
          return SelectMinor;
        default:
          return CaretDownMinor;
      }
    };

    /** Markup: Disclosure icon */
    const disclosureMarkup = disclosure ? (
      <Icon
        className="Anique-ButtonDisclosure"
        source={loading ? 'placeholder' : getDisclosureIconSource(disclosure)}
        size="large"
      />
    ) : undefined;

    /** Markup: Connected Disclosure  */
    let connectedDisclosureMarkup: ReactNode;
    if (connectedDisclosure) {
      const { disabled, ariaLabel, actions } = connectedDisclosure;

      /** Disclosure Trigger */
      const connectedDisclosureTrigger = (
        <button
          type="button"
          className={`Anique-ConnectedDisclosure ${classes}`}
          aria-disabled={disabled}
          aria-label={ariaLabel ?? 'Button Actions'}
          aria-describedBy={ariaDescribedBy}
          aria-checked={ariaChecked}
          onClick={toggleDisclosure}
          tabIndex={disabled ? -1 : undefined}
        >
          <Icon source={CaretDownMinor} size="large" />
        </button>
      );

      connectedDisclosureMarkup = (
        <Popover
          active={disclosureActive}
          trigger={connectedDisclosureTrigger}
          onClose={toggleDisclosure}
        >
          <ActionList items={actions} onActionAnyItem={toggleDisclosure} />
        </Popover>
      );
    }

    const buttonContent = loading ? (
      <Spinner color="white" size="small" />
    ) : icon ? (
      iconMarkup
    ) : (
      childMarkup
    );

    /** Enable Button as a Link */
    let buttonMarkup: ReactElement;
    if (url && !upload) {
      buttonMarkup = (
        <a
          {...Object.assign(
            linkProps,
            disabled ? commonProps : { ...interactiveProps, href: url }
          )}
        >
          {buttonContent}
          {disclosureMarkup}
        </a>
      );
    } else {
      /** Generate Button without a Link */
      buttonMarkup = (
        <button
          {...interactiveProps}
          name={name}
          type={submit ? 'submit' : 'button'}
          ref={buttonRef}
          tabIndex={0}
          disabled={disabled}
          onKeyDown={onKeyDown}
          onKeyPress={onKeyPress}
          onKeyUp={onKeyUp}
          onPointerDown={onPointerDown}
          {...accessibilityProps}
        >
          {buttonContent}
          {disclosureMarkup}
        </button>
      );
    }

    const uploadMarkup = upload ? (
      <Invisible>
        <input
          type="file"
          hidden
          aria-hidden="true"
          tabIndex={-1}
          ref={inputRef}
          name={name}
          onChange={handleUploadButton}
          multiple={uploadOptions?.allowMultiple}
          accept={uploadOptions?.accept}
          {...useTestId('button-upload')}
        />
      </Invisible>
    ) : undefined;

    /***************************************************************************************/
    /** Render the Button */
    /***************************************************************************************/

    return (
      <ButtonContainer className="Anique-ButtonContainer">
        {buttonMarkup}
        {connectedDisclosureMarkup}
        {uploadMarkup}
      </ButtonContainer>
    );
  }
);

export const Button = styled(AniqueButton)(
  ({
    theme: { color, fontSize },
    fullWidth,
    iconOnly,
    uppercase = false,
    outline,
    url,
    primary,
    loading,
    alert,
    disclosure,
    disabled,
    textAlign = 'center'
  }) => {
    const ButtonTextColor = `${
      disabled
        ? color.btnDisabled
        : (primary || alert) && !outline
        ? 'white'
        : alert
        ? color.btnAlert
        : outline
        ? alert
          ? color.btnAlert
          : color.btnPrimary
        : color.textSecondary
    };`;

    return `
  ${
    (url || disclosure) &&
    `
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  `
  };
  width: ${fullWidth ? '100%' : 'auto'};
  min-width: ${iconOnly ? 'auto' : '85px'};
  padding: 0.875em 1.5em;
  font-size: ${fontSize.fontSize3};
  font-weight: bold;
  text-transform: ${uppercase ? 'uppercase' : 'none'};
  text-decoration: none;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  border-color: ${
    disabled
      ? color.btnDisabled
      : alert
      ? color.btnAlert
      : primary || outline
      ? color.btnPrimary
      : color.borderPrimary
  };
  background-color: ${
    disabled
      ? 'transparent'
      : outline
      ? 'transparent'
      : alert
      ? color.btnAlert
      : primary || loading
      ? color.btnPrimary
      : 'white'
  };
  color: ${ButtonTextColor};
  transition-property: color, background-color, box-shadow, border-color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  
  &:focus-visible {
    outline: 2px solid transparent;
    outline-offset: 1px;
    transition: outline-color 0.2s linear;
    outline-color: ${color.accentColor};
  }

  &:hover {
    color: "auto";
    background-color: ${
      disabled || outline
        ? 'transparent'
        : alert
        ? color.btnAlertHovered
        : primary || loading
        ? color.btnPrimaryHovered
        : '#F8F8F8'
    };
    border-color: ${
      disabled
        ? color.btnDisabled
        : alert
        ? color.btnAlertHovered
        : primary || outline || loading
        ? color.btnPrimaryHovered
        : 'auto'
    };
    cursor: ${disabled ? 'auto' : 'pointer'};
    box-shadow: ${
      (primary || alert || loading) && !outline
        ? `0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)`
        : 'none'
    };
    white-space: nowrap;
  }
  .Anique-Icon {
    margin: auto;
  }
  & > .Anique-Icon.Anique-ButtonDisclosure {
    margin-left: 0.75rem;
    margin-right: 0;
    padding-right: 0;
    padding-left: 0;
  }
  &.Anique-ConnectedDisclosure {
    min-width: auto;
    margin-left: 0.125rem;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }
  .Anique-ButtonIcon {
    display: inline-flex;
    justify-content: ${
      textAlign === 'left'
        ? 'flex-start'
        : textAlign === 'right'
        ? 'flex-end'
        : 'center'
    };
    align-items: center;
    gap: 0.5em;
  }
`;
  }
);
