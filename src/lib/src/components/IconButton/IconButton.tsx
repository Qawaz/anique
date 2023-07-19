import React, {HTMLAttributes} from "react";

import styled from "@emotion/styled";
import {useTheme} from "@emotion/react";
import {createThemedRipple} from "../ThemeProvider";

export const IconButton = styled.button`
  display: inline-flex;
  width: 1.5em;
  height: 1.5em;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  text-decoration: none;
  text-align: center;
  flex: 0 0 auto;
  font-size: 1.5rem;
  //padding: 8px;
  border-radius: 50%;
  overflow: hidden; //overflow: visible;
  color: ${props => props.theme.color.onBg};
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    color: ${props => props.theme.color.onBg100};
  }

`

export function RippledIconButton(props: HTMLAttributes<HTMLButtonElement>) {
    const {onClick, ...otherProps} = props
    const theme = useTheme()
    return (
        <IconButton {...otherProps} onClick={(e) => {
            createThemedRipple(theme.color.onBg, e)
            if (onClick) {
                onClick(e)
            }
        }}>
            {props.children}
        </IconButton>
    )
}