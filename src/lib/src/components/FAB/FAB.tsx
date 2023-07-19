import React from "react"
import styled from "@emotion/styled";
import {HTMLAttributes, MouseEventHandler} from "react";
import {createThemedRipple} from "../ThemeProvider";
import {useTheme} from "@emotion/react";

export const FloatingActionButton = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: ${props => props.theme.color.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.color.bg};
  cursor: pointer;
  outline: 0;
  border: 0;
  position: relative;
  overflow:hidden;

  &:hover {
    background: ${props => props.theme.color.primary100};
  }

`

export function RippledFloatingActionButton(props: HTMLAttributes<HTMLDivElement>) {
    const {onClick, ...otherProps} = props
    const theme = useTheme()
    return (
        <FloatingActionButton {...otherProps} onClick={(e) => {
            createThemedRipple(theme.color.onBg, e)
            if (onClick) {
                onClick(e)
            }
        }}/>
    )
}