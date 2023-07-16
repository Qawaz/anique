import styled from '@emotion/styled';
import React, {
    FC,
    ReactElement,
    ReactNode,
    forwardRef,
    ForwardedRef,
    ComponentType,
    AnchorHTMLAttributes,
    PropsWithChildren,
    HTMLAttributeAnchorTarget,
    HTMLAttributeReferrerPolicy
} from 'react';

import {Icon} from '../Icon';
import {ExternalSmallMinor} from "../../icons";
import {css, Theme} from "@emotion/react";
import {Color} from "../../types/theme";

export interface LinkProps {
    url: string;
    children?: ReactNode;
    external?: boolean;
    monochrome?: boolean;
    download?: string | boolean;
    unstyled?: boolean;

    [key: string]: any;
}

const UnstyledAnchorTag = styled.a(
    ({theme: {color}}) => `
    text-decoration: none;
    color: ${color.textPrimary};
  `
);

interface AnchorProps extends PropsWithChildren {

    underlined?: boolean
    colored?: boolean
    underlineOnHover?: boolean

}

const AnchorStyles = (color: Color, colored: boolean, underlined: boolean, underlineOnHover: boolean) => css`
  color: ${colored ? color.linkPrimary : color.textPrimary};
  text-decoration: ${underlined ? 'underline' : 'none'};

  &:hover {
    text-decoration: ${underlineOnHover ? "underline" : "none"};
    ${(colored) && css`
      color: ${color.linkPrimaryHovered};
    `}
  }
`

export const Anchor = styled("a",{
    shouldForwardProp : (name) => name != "colored" && name != "underlined" && name != "underlineOnHover"
})<AnchorProps>`
  ${props => AnchorStyles(props.theme.color, props.colored ?? true, props.underlined ?? true, props.underlineOnHover ?? true)}
`

interface ExternalAnchorProps extends AnchorProps {
    className?: string
    id?: string
    href?: string
    target?: HTMLAttributeAnchorTarget
    referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
    download?: any;
}

const ExternalAnchorTag = styled(Anchor)<ExternalAnchorProps>`
  display: inline-flex;
  align-items: center;
  gap: 5px;
`

export function ExternalAnchor(props: ExternalAnchorProps) {
    return (
        <span className={props.className} id={props.id}>
            <ExternalAnchorTag
                underlined={props.underlined}
                colored={props.colored}
                underlineOnHover={props.underlineOnHover}
                href={props.href}
                target={props.target ?? "_blank"}
                referrerPolicy={props.referrerPolicy}
                download={props.download}
            >
                <span>{props.children}</span>
                <Icon
                    source={ExternalSmallMinor}
                    size="large"
                    color={'linkPrimary'}
                />
            </ExternalAnchorTag>
        </span>
    )
}

export const UnstyledLink: FC<LinkProps> = forwardRef(
    (props, ref: ForwardedRef<HTMLAnchorElement>): ReactElement => {
        const {external, url, children, unstyled, ...rest} = props;
        const target = external ? '_blank' : undefined;
        const rel = external ? 'noopener noreferrer' : undefined;
        return (
            <span className="Anique-LinkElement">
        <UnstyledAnchorTag
            className={`Anique-AnchorTag`}
            ref={ref}
            target={target}
            href={url}
            rel={rel}
            data-testid="link"
            {...rest}
        >
          <span className="Anique-LinkText">{children}</span>
            {external && !unstyled && typeof children === 'string' && (
                <span className="Anique-LinkExternalIcon">
              <Icon
                  source={ExternalSmallMinor}
                  size="large"
                  color={'linkPrimary'}
              />
            </span>
            )}
        </UnstyledAnchorTag>
      </span>
        );
    }
);

export const Link = styled(UnstyledLink)(
    ({theme: {color}, monochrome, unstyled}) => `
        display: inline-flex;
        align-items: center;
        gap: 5px;
        color: ${
        monochrome || unstyled
            ? color.textPrimary
            : color.linkPrimary
    };
        text-decoration: ${unstyled ? 'none' : 'underline'};
        transition-property: color;
        transition-duration: 3s;
        transition-timing-function: ease-in-out;
        &:hover {
            color: ${
        monochrome || unstyled
            ? color.textPrimary
            : color.linkPrimaryHovered
    };
        }        
    `
);
